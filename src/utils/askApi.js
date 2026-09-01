// Calls the real AI backend (server/index.js -> Gemini). Throws on any
// failure (no backend running, no API key configured, network error, bad
// response) so the caller can fall back to the local keyword matcher —
// the app should still work even if the AI piece isn't set up.
export async function askAI(query) {
  const res = await fetch('/api/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `AI request failed (${res.status})`)
  }

  const data = await res.json()
  if (!Array.isArray(data.matchedIds) || typeof data.summary !== 'string') {
    throw new Error('AI response was malformed.')
  }
  return data // { summary, matchedIds }
}
