import { useEffect, useState } from 'react'
import { API_BASE_URL, fetchCollection } from '../api.js'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : `${API_BASE_URL}/api/teams/`

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(teamsEndpoint).then(setTeams).catch((requestError) => setError(requestError.message))
  }, [])

  return <section><p className="eyebrow">Find your crew</p><h1>Teams</h1>{error ? <div className="alert alert-warning">{error}</div> : null}<div className="data-list">{teams.length ? teams.map((team, index) => <article className="data-card" key={team.id ?? team._id ?? index}><strong>{team.name ?? 'Team'}</strong><span>{team.members?.length ?? 0} members</span></article>) : <p className="muted">No teams available yet.</p>}</div></section>
}

export default Teams
