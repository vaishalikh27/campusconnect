// Single master data source for the whole app.
// Every view (For You, category tabs, search) derives its content by
// filtering this one array — nothing is duplicated per-category.

export const CATEGORIES = [
  { id: 'event', label: 'Events' },
  { id: 'club', label: 'Club Activities' },
  { id: 'note', label: 'Notes' },
  { id: 'announcement', label: 'Announcements' },
]

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
]

export const posts = [
  {
    id: 1,
    title: 'HackVerse 2026',
    description:
      '24-hour student hackathon focused on building innovative technology solutions across AI, fintech, and sustainability tracks.',
    date: 'September 12, 2026',
    location: 'VIT Chennai, TT Auditorium',
    category: 'event',
    tags: ['Coding', 'AI', 'Entrepreneurship'],
  },
  {
    id: 2,
    title: 'Neural Networks Workshop',
    description:
      'Hands-on session covering the fundamentals of neural networks, backpropagation, and building your first model in PyTorch.',
    date: 'September 18, 2026',
    location: 'AI Research Lab, SJT Block',
    category: 'event',
    tags: ['AI', 'Academics', 'Coding'],
  },
  {
    id: 3,
    title: 'RoboWars Championship',
    description:
      'Inter-college robotics combat competition where student-built bots battle it out in the arena for the top prize.',
    date: 'October 3, 2026',
    location: 'Anna Auditorium, VIT Chennai',
    category: 'event',
    tags: ['Robotics', 'Coding'],
  },
  {
    id: 4,
    title: 'Prakriti Cultural Fest',
    description:
      "VIT Chennai's flagship cultural festival featuring live music, dance battles, fashion shows, and celebrity performances.",
    date: 'October 15, 2026',
    location: 'Main Ground, VIT Chennai',
    category: 'event',
    tags: ['Music', 'Design'],
  },
  {
    id: 5,
    title: 'Inter-Hostel Sports Meet',
    description:
      'Annual sports tournament covering cricket, basketball, football, and athletics across all hostel blocks.',
    date: 'September 25, 2026',
    location: 'Sports Complex, VIT Chennai',
    category: 'event',
    tags: ['Sports'],
  },
  {
    id: 6,
    title: 'Founders Meetup: Zero to One',
    description:
      'A campus entrepreneurship event where student founders and alumni share stories of building startups from scratch.',
    date: 'September 20, 2026',
    location: 'Innovation Hub, VIT Chennai',
    category: 'event',
    tags: ['Entrepreneurship', 'Finance'],
  },
  {
    id: 7,
    title: 'Code Club Recruitment Drive',
    description:
      'Open recruitment for the Coding Club — join weekly DSA sessions, competitive programming contests, and open-source sprints.',
    date: 'September 8, 2026',
    location: 'CB Block, Room 204',
    category: 'club',
    tags: ['Coding', 'Academics'],
  },
  {
    id: 8,
    title: 'Robotics Club Build Session',
    description:
      'Weekly hands-on build session for the line-follower bot project — soldering, sensor calibration, and firmware debugging.',
    date: 'September 14, 2026',
    location: 'Robotics Lab, TT Block',
    category: 'club',
    tags: ['Robotics'],
  },
  {
    id: 9,
    title: 'Design Guild Meetup',
    description:
      'Monthly meetup for the Design Club covering UI/UX critique, Figma workflows, and a portfolio review with senior designers.',
    date: 'September 22, 2026',
    location: 'Creative Studio, GDN Block',
    category: 'club',
    tags: ['Design'],
  },
  {
    id: 10,
    title: 'E-Cell Pitch Practice',
    description:
      'Entrepreneurship Cell session where student startup teams practice their pitch decks ahead of the regional summit.',
    date: 'September 27, 2026',
    location: 'Innovation Hub, VIT Chennai',
    category: 'club',
    tags: ['Entrepreneurship', 'Finance'],
  },
  {
    id: 11,
    title: 'Music Club Jam Night',
    description:
      'Open jam session for vocalists and instrumentalists — bring your own instrument or just come to sing along.',
    date: 'September 19, 2026',
    location: 'Amphitheatre, VIT Chennai',
    category: 'club',
    tags: ['Music'],
  },
  {
    id: 12,
    title: 'Data Structures & Algorithms Notes',
    description:
      'Complete semester notes covering arrays, trees, graphs, and dynamic programming with solved problem sets.',
    date: 'Updated August 30, 2026',
    location: 'Shared Drive · CSE Dept',
    category: 'note',
    tags: ['Coding', 'Academics'],
  },
  {
    id: 13,
    title: 'Engineering Mathematics — Unit 3 & 4',
    description:
      'Concise revision notes on Laplace transforms and vector calculus, with previous-year solved question papers.',
    date: 'Updated August 27, 2026',
    location: 'Shared Drive · Maths Dept',
    category: 'note',
    tags: ['Academics'],
  },
  {
    id: 14,
    title: 'Engineering Physics Study Material',
    description:
      'Quantum mechanics and semiconductor physics notes compiled from lectures, with diagrams and formula sheets.',
    date: 'Updated August 24, 2026',
    location: 'Shared Drive · Physics Dept',
    category: 'note',
    tags: ['Academics'],
  },
  {
    id: 15,
    title: 'C Programming Lab Resources',
    description:
      'Lab manual, sample programs, and common compiler error explanations for the first-year C programming course.',
    date: 'Updated August 20, 2026',
    location: 'Shared Drive · CSE Dept',
    category: 'note',
    tags: ['Coding', 'Academics'],
  },
  {
    id: 16,
    title: 'AI & ML Interview Prep Guide',
    description:
      'Curated guide covering machine learning fundamentals, common interview questions, and a project portfolio checklist.',
    date: 'Updated September 1, 2026',
    location: 'Shared Drive · AI Club',
    category: 'note',
    tags: ['AI', 'Coding'],
  },
  {
    id: 17,
    title: 'End-Semester Exam Schedule Released',
    description:
      'The final exam timetable for all departments has been published. Check your slot allocation on the student portal.',
    date: 'September 5, 2026',
    location: 'Academic Office',
    category: 'announcement',
    tags: ['Academics'],
  },
  {
    id: 18,
    title: 'HackVerse Registration Closing Soon',
    description:
      'Registrations for HackVerse 2026 close in 48 hours. Team up now — solo entries and team sizes up to 4 are allowed.',
    date: 'September 10, 2026',
    location: 'Online · Student Portal',
    category: 'announcement',
    tags: ['Coding', 'AI', 'Entrepreneurship'],
  },
  {
    id: 19,
    title: 'Library Hours Extended for Exam Season',
    description:
      'The central library will remain open until 2 AM starting next week to support students preparing for finals.',
    date: 'September 6, 2026',
    location: 'Central Library, VIT Chennai',
    category: 'announcement',
    tags: ['Academics'],
  },
  {
    id: 20,
    title: 'Campus Wi-Fi Maintenance Notice',
    description:
      'Scheduled network maintenance across hostel blocks this weekend may cause intermittent connectivity issues.',
    date: 'September 4, 2026',
    location: 'Campus-wide',
    category: 'announcement',
    tags: ['Academics'],
  },
]
