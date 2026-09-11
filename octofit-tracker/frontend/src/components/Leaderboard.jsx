import { useEffect, useState } from 'react'
import { API_BASE_URL, fetchCollection } from '../api.js'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : `${API_BASE_URL}/api/leaderboard/`

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(leaderboardEndpoint).then(setEntries).catch((requestError) => setError(requestError.message))
  }, [])

  return <section><p className="eyebrow">Team standings</p><h1>Leaderboard</h1>{error ? <div className="alert alert-warning">{error}</div> : null}<div className="data-list">{entries.length ? entries.map((entry, index) => <article className="data-card" key={entry.id ?? entry._id ?? index}><strong>{entry.name ?? entry.username ?? 'Athlete'}</strong><span>{entry.points ?? entry.score ?? 0} points</span></article>) : <p className="muted">Standings will appear here.</p>}</div></section>
}

export default Leaderboard
