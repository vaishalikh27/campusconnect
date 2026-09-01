// Mock user list — login is validated against this array only.
// No backend, no real authentication: this exists purely so the
// login screen has something concrete to check credentials against.

export const MOCK_USERS = [
  {
    email: 'aditi.rao2026@vitstudent.ac.in',
    password: 'campus123',
    name: 'Aditi Rao',
  },
  {
    email: 'karthik.iyer2025@vitstudent.ac.in',
    password: 'campus123',
    name: 'Karthik Iyer',
  },
  {
    email: 'demo@vitstudent.ac.in',
    password: 'demo1234',
    name: 'Demo Student',
  },
  {
    email: 'priya.menon2025@vitstudent.ac.in',
    password: 'campus123',
    name: 'Priya Menon',
  },
  {
    email: 'rahul.das2026@vitstudent.ac.in',
    password: 'campus123',
    name: 'Rahul Das',
  },
  {
    email: 'sneha.kapoor2024@vitstudent.ac.in',
    password: 'campus123',
    name: 'Sneha Kapoor',
  },
]

export function findUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase()
  return MOCK_USERS.find(
    (user) => user.email.toLowerCase() === normalizedEmail && user.password === password,
  )
}

export function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
