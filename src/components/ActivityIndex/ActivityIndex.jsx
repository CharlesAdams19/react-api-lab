// import './ActivityIndex.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router' 



// Get all activities from activities.js
import { getAllActivites } from '../../services/activities'

export default function ActivityIndex(){

 // * State : 3 pieces 
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

    // * On component mount (on the first render of the page)
    useEffect(() => {
        async function getActivities(){
          try {
            const { data } = await getAllActivites()
            setActivities(data)
          } catch {
            setError('Failed to fetch activity data. Please try again later.')
          } finally {
            setLoading(false)
          }
        }
        getActivities()
      }, [])


return (
    <section>
      <h1>Activities</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {activities.map((activity) => (
          <li key={activity._id}>
            <Link to={`/activities/${activity._id}`}>{activity.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );

}