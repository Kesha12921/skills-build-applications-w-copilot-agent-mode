import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  ['/', 'Overview'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Users'],
  ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <section className="overview">
      <p className="eyebrow">OctoFit Tracker</p>
      <h1>Move with purpose.</h1>
      <p className="lede">A calmer way to build momentum, see your progress, and move together.</p>
      <NavLink className="btn btn-dark" to="/activities">Log an activity</NavLink>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/">OCTOFIT<span>/</span></NavLink>
        <nav aria-label="Primary navigation">
          {navigation.map(([path, label]) => <NavLink key={path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={path}>{label}</NavLink>)}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
      <footer>Small steps. Strong teams. Better days.</footer>
    </div>
  )
}

export default App
