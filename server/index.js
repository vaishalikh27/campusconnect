// Minimal backend for the "Ask about campus" assistant.
//
// Exists for exactly one reason: calling the Gemini API requires a secret
// API key, and a key shipped in browser JS is visible to anyone who opens
// dev tools. This server holds the key and proxies the request instead.
// No database, no auth here — it reuses the same posts data the frontend
// already has, and only exposes one endpoint.

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { posts } from '../src/data/posts.js'

const app = express()
app.use(cors())
app.use(express.json({ limit: '10kb' }))

const PORT = process.env.PORT || 8787
const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.5-flash'
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

// Compact view of the posts the model reasons over — keeps the prompt small
// and avoids sending fields (like registration state) that live client-side.
const compactPosts = posts.map((p) => ({
  id: p.id,
  title: p.title,
  category: p.category,
  date: p.date,
  location: p.location,
  tags: p.tags,
  description: p.description,
}))

app.post('/api/ask', async (req, res) => {
  const query = typeof req.body?.query === 'string' ? req.body.query.trim() : ''
  if (!query) {
    return res.status(400).json({ error: 'Missing "query" string in request body.' })
  }
  if (query.length > 300) {
    return res.status(400).json({ error: 'Query is too long (max 300 characters).' })
  }
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Server is missing GEMINI_API_KEY — add it to .env and restart.' })
  }

  const prompt = `You are the campus assistant inside CampusConnect, an app for VIT Chennai students.
A student asked: "${query}"

Here is the current list of events, club activities, notes, and announcements as a JSON array (each item has an "id"):
${JSON.stringify(compactPosts)}

Pick the items that are genuinely relevant to the student's question — anywhere from 0 to 6 of them, best match first. Do not invent items that aren't in the list.
Write a short, friendly 1-2 sentence summary of what you found (or say plainly if nothing matches).
Respond with only the JSON described by the response schema — no extra text.`

  try {
    const geminiRes = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: 'OBJECT',
            properties: {
              summary: { type: 'STRING' },
              matchedIds: { type: 'ARRAY', items: { type: 'INTEGER' } },
            },
            required: ['summary', 'matchedIds'],
          },
        },
      }),
    })

    if (!geminiRes.ok) {
      const errText = await geminiRes.text()
      console.error('Gemini API error:', geminiRes.status, errText)
      return res.status(502).json({ error: 'The AI service returned an error.' })
    }

    const data = await geminiRes.json()
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
    if (!text) {
      return res.status(502).json({ error: 'The AI service returned an empty response.' })
    }

    const parsed = JSON.parse(text)
    const validIds = new Set(posts.map((p) => p.id))
    const matchedIds = Array.isArray(parsed.matchedIds)
      ? parsed.matchedIds.filter((id) => validIds.has(id)).slice(0, 6)
      : []

    res.json({ summary: String(parsed.summary ?? ''), matchedIds })
  } catch (err) {
    console.error('Ask endpoint failed:', err)
    res.status(500).json({ error: 'Something went wrong talking to the AI service.' })
  }
})

app.listen(PORT, () => {
  console.log(`CampusConnect AI backend listening on http://localhost:${PORT}`)
})
