# CampusConnect

**Your Spider-Sense for Campus.**

A student-focused campus discovery platform that brings events, club
activities, notes/resources, and announcements into one personalized feed —
instead of checking WhatsApp groups, Instagram, club pages, emails, and
notice boards separately.

This is a frontend MVP: no backend, no auth, no API keys. All data is local
mock data; selected interests persist in `localStorage`.

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
```

## How it works

- **One master dataset.** `src/data/posts.js` holds a single `posts` array.
  Every post has a `category` (`event` | `club` | `note` | `announcement`)
  and a `tags` array. Every view — category tabs, search, and the "For You"
  section — filters this one array; nothing is duplicated per view.
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
    Header.jsx          top bar with logo + avatar
    SearchBar.jsx        search input
    Onboarding.jsx       interest-selection screen
    InterestChip.jsx      selectable interest chip
    ForYouSection.jsx    personalized horizontal rail
    CategoryTabs.jsx     Events / Club Activities / Notes / Announcements
    PostGrid.jsx         responsive grid of PostCards
    PostCard.jsx         individual post card
    EmptyState.jsx       "no results" / "no matches" states
  data/
    posts.js             master posts array + categories + interest list
  App.jsx                 top-level state + view switching
  main.jsx                React entry point
```
