import { useEffect, useState } from 'react'
import { API_BASE_URL, fetchCollection } from '../api.js'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : `${API_BASE_URL}/api/users/`

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(usersEndpoint).then(setUsers).catch((requestError) => setError(requestError.message))
  }, [])

  return <section><p className="eyebrow">The OctoFit community</p><h1>Users</h1>{error ? <div className="alert alert-warning">{error}</div> : null}<div className="data-list">{users.length ? users.map((user, index) => <article className="data-card" key={user.id ?? user._id ?? index}><strong>{user.name ?? user.username ?? 'Member'}</strong><span>{user.email ?? 'OctoFit member'}</span></article>) : <p className="muted">No users found.</p>}</div></section>
}

export default Users
