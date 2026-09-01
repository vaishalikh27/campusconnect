# CampusConnect(https://campusconnectspidey.netlify.app/)

**Your Spider-Sense for Campus.**

A student-focused campus discovery platform that brings events, club
activities, notes/resources, and announcements into one personalized feed —
instead of checking WhatsApp groups, Instagram, club pages, emails, and
notice boards separately.

This is mostly a frontend MVP: no real auth, no user database. All post data
is local mock data; login session, selected interests, and registrations
persist in `localStorage`. The one exception is the "Ask about campus"
assistant, which optionally calls a real AI (Gemini) through a small local
backend — see [AI assistant setup](#ai-assistant-setup) below. Without that
backend running, the assistant automatically falls back to local keyword
matching, so the app is fully usable either way.

## Demo login

Login is checked against a hardcoded list in `src/data/users.js` — nothing
is sent anywhere. Use:

```
demo@vitstudent.ac.in / demo1234
```

(or click the demo credentials shown on the login screen to autofill them).
Logging out clears both the session and your saved interests, so the next
login walks through onboarding again.

## Stack

- React + Vite
- Tailwind CSS v4
- lucide-react (icons)

No routing — it's a single-page app that swaps between an onboarding screen
and a dashboard based on React state.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # oxlint
npm run server    # AI backend only (server/index.js)
npm run dev:all   # frontend + AI backend together
```

## AI assistant setup

The "Ask about campus" box uses a real AI model (Gemini) if a small local
backend is running and configured; otherwise it silently falls back to
matching keywords against posts locally — either way the feature works.

To enable real AI answers:

1. Get a free API key from https://aistudio.google.com/apikey (no card
   required for the free tier).
2. Copy `.env.example` to `.env` and paste your key into `GEMINI_API_KEY`.
3. Run both processes together: `npm run dev:all` (or run `npm run server`
   in one terminal and `npm run dev` in another).

`server/index.js` is a single Express endpoint (`POST /api/ask`) that holds
the API key server-side, sends the student's question plus a compact view of
`posts` to Gemini, and returns a short summary plus the matching post IDs.
The key never reaches the browser, and `.env` is gitignored.

## How it works

- **One master dataset.** `src/data/posts.js` holds a single `posts` array.
  Every post has a `category` (`event` | `club` | `note` | `announcement`)
  and a `tags` array. Every view — category tabs, search, and the "For You"
  section — filters this one array; nothing is duplicated per view.
- **Login.** Mock credential check against `src/data/users.js` → session
  stored in React state → persisted to `localStorage`.
- **Onboarding.** Pick interests from a chip grid → stored in React state →
  persisted to `localStorage` → app switches to the dashboard.
- **For You.** Derived on the fly: posts whose `tags` overlap (case-insensitive)
  with your selected interests. Updates automatically if interests change.
- **Search + tabs.** Search matches title, description, location, and tags
  (case-insensitive) and combines with whichever category tab is active.

## Project structure

```
src/
  components/
    Login.jsx             mock login screen
    Header.jsx            top bar with logo + account menu / logout
    SearchBar.jsx         search input
    Onboarding.jsx        interest-selection screen
    InterestChip.jsx      selectable interest chip
    ForYouSection.jsx     personalized horizontal rail
    CategoryTabs.jsx      Events / Club Activities / Notes / Announcements
    PostGrid.jsx          responsive grid of PostCards
    PostCard.jsx          individual post card
    EmptyState.jsx        "no results" / "no matches" states
  data/
    posts.js              master posts array + categories + interest list
    users.js               mock user list for login
  utils/
    search.js              local keyword matcher (AI fallback)
    askApi.js               calls the AI backend, throws on failure
  App.jsx                  top-level state + view switching
  main.jsx                 React entry point
server/
  index.js                 AI backend — POST /api/ask (see setup above)
```
