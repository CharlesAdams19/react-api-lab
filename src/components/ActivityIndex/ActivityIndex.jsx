// import './ActivityIndex.css'
import { Link } from 'react-router'
import useFetch from '../../hooks/useFetch'

// Get all activities from activities.js
import { getAllActivities } from '../../services/activities'

export default function ActivityIndex() {

    // * State : 3 pieces updated for hook 
    const { data: activities, isLoading, error } = useFetch(getAllActivities, [])
    console.log('activities:', activities)
    console.log('IS LOADING:', isLoading);
    console.log('ERROR:', error);

    return (
        <>
            <h1>Activities</h1>
            <section className="activity-list">
                {error
                    ? <p className='error-message'>{error}</p>
                    : isLoading
                        ? <p>Loading...</p>
                        : Array.isArray(activities) && activities.length > 0
                            ? activities.map(activity => (
                                <Link key={activity._id} to={`/activities/${activity._id}`}>
                                    <article>
                                        <h2>{activity.title}</h2>
                                    </article>
                                </Link>
                            ))
                            : <p>No activities found</p>
                }
            </section>
        </>
    )
}