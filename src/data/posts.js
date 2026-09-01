// Single master data source for the whole app.
// Every view (For You, category tabs, search) derives its content by
// filtering this one array — nothing is duplicated per-category.
// Sourced from vit_events_data.json (VIT Chennai campus events/clubs/notes/announcements).

import { CalendarDays, UsersRound, BookOpen, Megaphone } from 'lucide-react'

export const CATEGORIES = [
  { id: 'event', label: 'Events' },
  { id: 'club', label: 'Club Activities' },
  { id: 'note', label: 'Notes' },
  { id: 'announcement', label: 'Announcements' },
]

// Shared by PostCard and EventDetail so both render categories identically.
export const CATEGORY_META = {
  event: { label: 'Event', icon: CalendarDays },
  club: { label: 'Club Activity', icon: UsersRound },
  note: { label: 'Note', icon: BookOpen },
  announcement: { label: 'Announcement', icon: Megaphone },
}

// Categories a student can register/RSVP for from the detail page.
export const REGISTRABLE_CATEGORIES = new Set(['event', 'club'])

export const INTERESTS = [
  'AI',
  'Coding',
  'Robotics',
  'Design',
  'Music',
  'Sports',
  'Finance',
  'Entrepreneurship',
  'Academics',
  'Hardware',
  'IoT',
  'Mobile',
  'Hackathons',
  'Mechanical',
  'Civil',
  'Electronics',
  'Physics',
  'Biotech',
  'Campus',
  'Tech',
  'Gaming',
  'Simulation',
]

export const posts = [
  {
    id: 1,
    title: "HackVerse: Into the Web",
    description:
      "24-hour build marathon by IEEE RAS. Three sprints: vibe coding, competitive coding, and an open-domain build. Teams of 3-5.",
    date: "September 1, 2026",
    location: "AB1 Seminar Hall",
    category: "event",
    tags: ["Coding","AI","Hackathons"],
  },
  {
    id: 2,
    title: "Hackatronics 2.0",
    description:
      "24-hour hardware and AI hackathon across 6 specialized domains including IoT, ML, and Auto.",
    date: "September 1, 2026",
    location: "Nethaji Auditorium",
    category: "event",
    tags: ["Hardware","AI","IoT"],
  },
  {
    id: 3,
    title: "Flutterverse Workshop",
    description:
      "Cross-platform mobile app development sprint using Flutter and Dart. Bring a laptop.",
    date: "September 1, 2026",
    location: "AB3 Lab 102",
    category: "event",
    tags: ["Mobile","Coding"],
  },
  {
    id: 4,
    title: "Innovate to Escape",
    description:
      "Tech-themed escape room challenge requiring participants to solve engineering puzzles.",
    date: "September 1, 2026",
    location: "AB1 Studio",
    category: "event",
    tags: ["Tech","Gaming"],
  },
  {
    id: 5,
    title: "Wreck It India",
    description:
      "Competitive mechanical disassembly and rapid re-engineering challenge.",
    date: "September 1, 2026",
    location: "Main Plaza",
    category: "event",
    tags: ["Mechanical","Design"],
  },
  {
    id: 6,
    title: "Code O Fiesta",
    description:
      "Speed-coding contest with algorithmic constraints and fast-paced rounds.",
    date: "September 2, 2026",
    location: "AB2 Lab 201",
    category: "event",
    tags: ["Coding"],
  },
  {
    id: 7,
    title: "Agent Colosseum",
    description:
      "Autonomous AI agent arena simulation challenge testing reinforcement learning models.",
    date: "September 2, 2026",
    location: "Central Computing Lab",
    category: "event",
    tags: ["AI","Simulation"],
  },
  {
    id: 8,
    title: "Make Your Own Jarvis",
    description:
      "Hands-on session on building custom voice-controlled AI assistants using open-source APIs.",
    date: "September 2, 2026",
    location: "AB1 Room 204",
    category: "event",
    tags: ["AI","Coding"],
  },
  {
    id: 9,
    title: "Civil Quest",
    description:
      "Structural design and load-testing competition for civil engineering enthusiasts.",
    date: "September 2, 2026",
    location: "Architecture Block",
    category: "event",
    tags: ["Civil","Design"],
  },
  {
    id: 10,
    title: "TechnoVIT 2026 Registrations Open",
    description:
      "Annual technical festival. Workshops, competitions and guest lectures across all departments. Early registration closes Friday.",
    date: "September 5, 2026",
    location: "Main Campus",
    category: "event",
    tags: ["Coding","Robotics","Design"],
  },
  {
    id: 11,
    title: "Inter-Hostel Football League",
    description:
      "Group stage fixtures begin this week. Squad lists due to the sports office by Wednesday.",
    date: "September 6, 2026",
    location: "Main Ground",
    category: "event",
    tags: ["Sports"],
  },
  {
    id: 12,
    title: "CodeChef Monthly Contest",
    description:
      "Three-hour rated contest with DSA problems from easy to hard. Top three get goodies.",
    date: "September 7, 2026",
    location: "Central Computing Lab",
    category: "event",
    tags: ["Coding"],
  },
  {
    id: 13,
    title: "Intro to LLM Fine-Tuning Workshop",
    description:
      "Hands-on session on fine-tuning open-source models. Bring a laptop with Python installed. Limited to 60 seats.",
    date: "September 8, 2026",
    location: "AB2 Lab 305",
    category: "event",
    tags: ["AI","Coding"],
  },
  {
    id: 14,
    title: "Open Mic Night",
    description:
      "Music, poetry and stand-up. Sign-up sheet outside the cultural office.",
    date: "September 9, 2026",
    location: "Amphitheatre",
    category: "event",
    tags: ["Music"],
  },
  {
    id: 15,
    title: "UI/UX Design Sprint",
    description:
      "One-day sprint on Figma fundamentals and design systems. Beginners welcome.",
    date: "September 10, 2026",
    location: "AB1 Studio",
    category: "event",
    tags: ["Design"],
  },
  {
    id: 16,
    title: "Robotics Line-Follower Challenge",
    description:
      "Build and race an autonomous line-following bot. Kits provided for first 20 teams.",
    date: "September 12, 2026",
    location: "Robotics Lab, AB3",
    category: "event",
    tags: ["Robotics","Hardware"],
  },
  {
    id: 17,
    title: "Competitive Programming Bootcamp",
    description:
      "Four-session series on graphs, DP, and greedy techniques. Attendance across all sessions recommended.",
    date: "September 14, 2026",
    location: "AB2 Lab 210",
    category: "event",
    tags: ["Coding"],
  },
  {
    id: 18,
    title: "Startup Pitch Night",
    description:
      "Pitch a five-minute idea to a panel of alumni founders. Open to all years.",
    date: "September 15, 2026",
    location: "Auditorium",
    category: "event",
    tags: ["Entrepreneurship","Finance"],
  },
  {
    id: 19,
    title: "GDG on Campus Info Session",
    description:
      "Overview of the year's roadmap covering Android, cloud and ML study jams.",
    date: "September 3, 2026",
    location: "AB2 Seminar Hall",
    category: "club",
    tags: ["Coding","AI"],
  },
  {
    id: 20,
    title: "PromptCraft Workshop",
    description:
      "Generative AI prompt engineering techniques for software and creative workflows.",
    date: "September 3, 2026",
    location: "AB1 Room 302",
    category: "club",
    tags: ["AI"],
  },
  {
    id: 21,
    title: "Simulation with ROS",
    description:
      "Hands-on Robot Operating System 2 environment setup and virtual testing.",
    date: "September 3, 2026",
    location: "Robotics Lab, AB3",
    category: "club",
    tags: ["Robotics"],
  },
  {
    id: 22,
    title: "Robo Soccer X Monster Truck",
    description:
      "Custom bot soccer tournament combined with a terrain obstacle race.",
    date: "September 3, 2026",
    location: "Open Amphitheatre",
    category: "club",
    tags: ["Robotics"],
  },
  {
    id: 23,
    title: "IEEE RAS Recruitment Drive",
    description:
      "Applications open for technical, design and operations teams. First-years encouraged to apply.",
    date: "September 4, 2026",
    location: "AB1 Conference Room",
    category: "club",
    tags: ["Robotics","AI"],
  },
  {
    id: 24,
    title: "Technobridge",
    description:
      "Cross-disciplinary tech showcase and project mentorship drive for junior developers.",
    date: "September 4, 2026",
    location: "AB2 Seminar Hall",
    category: "club",
    tags: ["Tech"],
  },
  {
    id: 25,
    title: "Rover Excavation Challenge",
    description:
      "Autonomous terrain navigation and soil-sampling bot contest.",
    date: "September 4, 2026",
    location: "Outdoor Testing Pit",
    category: "club",
    tags: ["Robotics"],
  },
  {
    id: 26,
    title: "Bioconnect'26",
    description:
      "Interactive session on bioinformatics tools and modern gene sequencing technologies.",
    date: "September 4, 2026",
    location: "AB1 Room 105",
    category: "club",
    tags: ["Biotech"],
  },
  {
    id: 27,
    title: "Finance Club Weekly Markets Meet",
    description:
      "Discussion on the week's market movement and a live paper-trading session.",
    date: "September 5, 2026",
    location: "AB1 Room 112",
    category: "club",
    tags: ["Finance"],
  },
  {
    id: 28,
    title: "Photography Club Campus Walk",
    description:
      "Golden-hour walk around campus. All skill levels and phone cameras welcome.",
    date: "September 6, 2026",
    location: "Meet at Main Gate",
    category: "club",
    tags: ["Design"],
  },
  {
    id: 29,
    title: "Music Club Auditions",
    description:
      "Auditions for vocals, guitar, keys and percussion. Bring your own instrument.",
    date: "September 7, 2026",
    location: "Music Room",
    category: "club",
    tags: ["Music"],
  },
  {
    id: 30,
    title: "Entrepreneurship Cell Mentor Hours",
    description:
      "Weekly one-on-one slots with alumni mentors. Book through the E-Cell form.",
    date: "September 11, 2026",
    location: "Incubation Centre",
    category: "club",
    tags: ["Entrepreneurship"],
  },
  {
    id: 31,
    title: "Python for Beginners Slide Deck",
    description:
      "Session slides from the coding club's introductory workshop, with practice problems.",
    date: "Updated August 25, 2026",
    location: "Online",
    category: "note",
    tags: ["Coding","AI"],
    link: "https://drive.google.com",
  },
  {
    id: 32,
    title: "Data Structures Unit 1-3 Notes",
    description:
      "Compiled notes covering arrays, linked lists, stacks, queues and trees with solved examples.",
    date: "Updated August 28, 2026",
    location: "Online",
    category: "note",
    tags: ["Coding"],
    link: "https://drive.google.com",
  },
  {
    id: 33,
    title: "Digital Logic Design Question Bank",
    description:
      "Previous years' questions organised by unit with worked solutions.",
    date: "Updated August 29, 2026",
    location: "Online",
    category: "note",
    tags: ["Electronics"],
    link: "https://drive.google.com",
  },
  {
    id: 34,
    title: "Engineering Physics Formula Sheet",
    description:
      "Single-page reference for quantum mechanics and wave optics. Useful for CAT prep.",
    date: "Updated August 30, 2026",
    location: "Online",
    category: "note",
    tags: ["Physics"],
    link: "https://drive.google.com",
  },
  {
    id: 35,
    title: "Library Extended Hours During Exams",
    description:
      "Central Library open until 2 AM through the exam period. ID card required after 10 PM.",
    date: "September 1, 2026",
    location: "Central Library",
    category: "announcement",
    tags: ["Academics"],
  },
  {
    id: 36,
    title: "CAT-1 Exam Schedule Released",
    description:
      "Timetable published on the student portal. Check your slot and hall allocation.",
    date: "September 2, 2026",
    location: "Student Portal",
    category: "announcement",
    tags: ["Academics"],
  },
  {
    id: 37,
    title: "Hostel Mess Menu Feedback Form",
    description:
      "Submit suggestions for the upcoming menu revision. Form closes Sunday.",
    date: "September 3, 2026",
    location: "Online",
    category: "announcement",
    tags: ["Campus"],
  },
  {
    id: 38,
    title: "Campus Wi-Fi Maintenance Window",
    description:
      "Network downtime expected Saturday 2 AM to 5 AM across academic blocks.",
    date: "September 6, 2026",
    location: "All Blocks",
    category: "announcement",
    tags: ["Campus"],
  },
  {
    id: 39,
    title: "Semester Fee Payment Deadline",
    description:
      "Last date for fee payment without a late charge is September 10.",
    date: "September 10, 2026",
    location: "Student Portal",
    category: "announcement",
    tags: ["Academics"],
  },
  {
    id: 40,
    title: "Prakriti Cultural Fest Registrations Open",
    description:
      "VIT Chennai's flagship cultural festival — live bands, dance battles, fashion show and a celebrity night. Passes on sale from Monday.",
    date: "September 18, 2026",
    location: "Main Ground",
    category: "event",
    tags: ["Music","Design"],
  },
  {
    id: 41,
    title: "Web3 & Blockchain Basics Talk",
    description:
      "Guest lecture on smart contracts and decentralized apps, followed by an open Q&A with an industry speaker.",
    date: "September 19, 2026",
    location: "AB2 Seminar Hall",
    category: "event",
    tags: ["Coding","Finance"],
  },
  {
    id: 42,
    title: "Astro Club Stargazing Night",
    description:
      "Telescope viewing session on the terrace, weather permitting. Meet at the AB1 rooftop after 8 PM.",
    date: "September 20, 2026",
    location: "AB1 Rooftop",
    category: "event",
    tags: ["Academics","Tech"],
  },
  {
    id: 43,
    title: "Case Study Championship",
    description:
      "Business case-cracking competition run by the Management department, open to teams of 2-4 from any branch.",
    date: "September 21, 2026",
    location: "MB Seminar Hall",
    category: "event",
    tags: ["Finance","Entrepreneurship"],
  },
  {
    id: 44,
    title: "CAD Modelling Workshop",
    description:
      "Two-day intensive on SolidWorks fundamentals for first- and second-years, covering parts, assemblies and drawings.",
    date: "September 23, 2026",
    location: "AB4 CAD Lab",
    category: "event",
    tags: ["Mechanical","Design"],
  },
  {
    id: 45,
    title: "Aeromodelling Fly-Off",
    description:
      "RC glider and fixed-wing competition judged on distance, stability and a spot landing challenge.",
    date: "September 24, 2026",
    location: "Sports Ground",
    category: "event",
    tags: ["Hardware","Mechanical"],
  },
  {
    id: 46,
    title: "CTF: Campus Cyber Challenge",
    description:
      "Jeopardy-style capture-the-flag with web, crypto, reversing and forensics categories. Solo or teams of 2.",
    date: "September 26, 2026",
    location: "Central Computing Lab",
    category: "event",
    tags: ["Coding","Tech"],
  },
  {
    id: 47,
    title: "Battle of Bands Finals",
    description:
      "Final round of the campus-wide battle of bands, judged by a panel of alumni musicians.",
    date: "September 28, 2026",
    location: "Amphitheatre",
    category: "event",
    tags: ["Music"],
  },
  {
    id: 48,
    title: "App-a-thon: Build in a Day",
    description:
      "One-day mobile app building sprint — ship a working prototype by 8 PM for a chance at seed funding.",
    date: "September 30, 2026",
    location: "AB3 Lab 102",
    category: "event",
    tags: ["Mobile","Coding","Entrepreneurship"],
  },
  {
    id: 49,
    title: "Inter-Department Basketball Finals",
    description:
      "Championship match of the inter-department basketball league. Snacks and merch for the first 100 spectators.",
    date: "October 2, 2026",
    location: "Sports Complex",
    category: "event",
    tags: ["Sports"],
  },
  {
    id: 50,
    title: "VLSI Design Club Intro Session",
    description:
      "Overview of the semester roadmap covering digital IC design flow and an intro to Cadence tools.",
    date: "September 12, 2026",
    location: "AB2 Lab 401",
    category: "club",
    tags: ["Electronics","Hardware"],
  },
  {
    id: 51,
    title: "Literary Society Book Swap",
    description:
      "Bring a book, take a book. Casual meetup with short readings and a discussion on this month's pick.",
    date: "September 13, 2026",
    location: "Library Courtyard",
    category: "club",
    tags: ["Academics"],
  },
  {
    id: 52,
    title: "Chess Club Weekly Blitz",
    description:
      "Round-robin blitz format, 5 minutes a side. All rating levels welcome, boards provided.",
    date: "September 16, 2026",
    location: "AB1 Common Room",
    category: "club",
    tags: ["Gaming"],
  },
  {
    id: 53,
    title: "Biotech Society Lab Visit",
    description:
      "Guided tour of the campus biotech research lab, followed by a talk on ongoing gene-editing projects.",
    date: "September 17, 2026",
    location: "Biotech Research Block",
    category: "club",
    tags: ["Biotech","Academics"],
  },
  {
    id: 54,
    title: "Dance Crew Open Practice",
    description:
      "Open practice session ahead of Prakriti — all styles welcome, no audition needed to join this one.",
    date: "September 22, 2026",
    location: "Dance Studio, AB1",
    category: "club",
    tags: ["Music","Design"],
  },
  {
    id: 55,
    title: "Operating Systems Unit 1-2 Notes",
    description:
      "Process scheduling, memory management and deadlock handling, summarized with diagrams and past-year questions.",
    date: "Updated September 3, 2026",
    location: "Online",
    category: "note",
    tags: ["Coding","Academics"],
    link: "https://drive.google.com",
  },
  {
    id: 56,
    title: "Signals and Systems Cheat Sheet",
    description:
      "Condensed formula reference for Fourier and Laplace transforms ahead of CAT-1.",
    date: "Updated September 5, 2026",
    location: "Online",
    category: "note",
    tags: ["Electronics","Physics"],
    link: "https://drive.google.com",
  },
  {
    id: 57,
    title: "Thermodynamics Solved Problem Set",
    description:
      "Worked examples on the first and second laws, entropy and cycles, compiled from tutorial sheets.",
    date: "Updated September 8, 2026",
    location: "Online",
    category: "note",
    tags: ["Mechanical","Physics"],
    link: "https://drive.google.com",
  },
  {
    id: 58,
    title: "Placement Drive: Resume Review Slots",
    description:
      "Career Services is offering one-on-one resume review slots ahead of the September placement drive. Book via the portal.",
    date: "September 12, 2026",
    location: "Career Services Office",
    category: "announcement",
    tags: ["Academics","Campus"],
  },
  {
    id: 59,
    title: "Shuttle Bus Timing Update",
    description:
      "Revised inter-block shuttle timings take effect Monday — five-minute frequency during peak class hours.",
    date: "September 14, 2026",
    location: "Campus-wide",
    category: "announcement",
    tags: ["Campus"],
  },
  {
    id: 60,
    title: "Course Registration Window Opens",
    description:
      "Elective registration for the next semester opens on the student portal. Slots are first-come, first-served.",
    date: "September 16, 2026",
    location: "Student Portal",
    category: "announcement",
    tags: ["Academics"],
  },
]
