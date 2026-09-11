import { useEffect, useState } from 'react'
import { API_BASE_URL, fetchCollection } from '../api.js'

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : `${API_BASE_URL}/api/workouts/`

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(workoutsEndpoint).then(setWorkouts).catch((requestError) => setError(requestError.message))
  }, [])

  return <section><p className="eyebrow">Make today count</p><h1>Workouts</h1>{error ? <div className="alert alert-warning">{error}</div> : null}<div className="data-list">{workouts.length ? workouts.map((workout, index) => <article className="data-card" key={workout.id ?? workout._id ?? index}><strong>{workout.name ?? 'Workout'}</strong><span>{workout.duration ?? 'Flexible pace'}</span></article>) : <p className="muted">Your next workout will appear here.</p>}</div></section>
}

export default Workouts
