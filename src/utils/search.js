// Lightweight, fully client-side "ask a doubt" matcher.
// Not an AI model — plain keyword scoring against the posts array, with a
// templated summary sentence. No API key, no network call, no cost.

import { CATEGORY_META, CATEGORIES } from '../data/posts'

const PLURAL_LABELS = Object.fromEntries(CATEGORIES.map((cat) => [cat.id, cat.label]))

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'do', 'does', 'did', 'can',
  'could', 'would', 'should', 'i', 'me', 'my', 'you', 'your', 'please',
  'doubt', 'doubts', 'question', 'about', 'related', 'to', 'of', 'for',
  'in', 'on', 'at', 'and', 'or', 'this', 'that', 'these', 'those', 'any',
  'some', 'what', 'when', 'where', 'how', 'which', 'who', 'whom', 'there',
  'know', 'tell', 'im', "i'm", 'campus',
])

function tokenize(text) {
  // Min length 2 (not 3) so short-but-meaningful tags like "AI" survive —
  // STOPWORDS already covers the common 2-letter filler words.
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length >= 2 && !STOPWORDS.has(word))
}

// A query token "matches" a haystack word if they're equal, or nearly so
// (simple plurals like hackathon/hackathons) — not a raw substring test,
// so "exam" doesn't spuriously match "examples".
function wordsMatch(word, token) {
  if (word === token) return true
  const diff = Math.abs(word.length - token.length)
  return diff > 0 && diff <= 2 && (word.startsWith(token) || token.startsWith(word))
}

// Score = number of query tokens that appear in the post's searchable text,
// with a bonus when a token matches one of the post's tags.
function scorePost(post, tokens) {
  const haystackWords = tokenize(
    [post.title, post.description, post.category, post.location, ...post.tags].join(' '),
  )
  const tagWords = post.tags.flatMap((tag) => tokenize(tag))

  let score = 0
  for (const token of tokens) {
    if (haystackWords.some((word) => wordsMatch(word, token))) score += 1
    if (tagWords.some((word) => wordsMatch(word, token))) score += 2
  }
  return score
}

export function searchPosts(query, posts, limit = 6) {
  const tokens = tokenize(query)
  if (tokens.length === 0) return { tokens, matches: [] }

  const scored = posts
    .map((post) => ({ post, score: scorePost(post, tokens) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)

  return { tokens, matches: scored.slice(0, limit).map((entry) => entry.post) }
}

export function summarize(query, matches) {
  if (matches.length === 0) {
    return `Couldn't find anything matching "${query}" — try different words, or browse by category below.`
  }

  const counts = matches.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1
    return acc
  }, {})
  const breakdown = Object.entries(counts)
    .map(([category, count]) => {
      const plural = PLURAL_LABELS[category] ?? category
      const singular = CATEGORY_META[category]?.label ?? category
      return `${count} ${count > 1 ? plural : singular}`
    })
    .join(', ')

  const top = matches[0]
  return `Found ${matches.length} thing${matches.length > 1 ? 's' : ''} related to "${query}" — ${breakdown}. Top match: "${top.title}" on ${top.date}.`
}
