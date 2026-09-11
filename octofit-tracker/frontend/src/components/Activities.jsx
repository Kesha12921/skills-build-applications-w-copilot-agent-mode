import { useEffect, useState } from 'react'
import { API_BASE_URL, fetchCollection } from '../api.js'

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : `${API_BASE_URL}/api/activities/`

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(activitiesEndpoint).then(setActivities).catch((requestError) => setError(requestError.message))
  }, [])

  return (
    <section>
      <p className="eyebrow">Movement log</p>
      <h1>Activities</h1>
      {error ? <div className="alert alert-warning">{error}</div> : null}
      <div className="row g-3">
        {activities.length ? activities.map((activity, index) => (
          <div className="col-md-6" key={activity.id ?? activity._id ?? index}>
            <article className="data-card"><strong>{activity.name ?? activity.type ?? 'Activity'}</strong><span>{activity.points ?? 0} points</span></article>
          </div>
        )) : <p className="muted">No activities logged yet.</p>}
      </div>
    </section>
  )
}

export default Activities
