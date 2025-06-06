// import './ActivityShow.css'
import { useParams } from 'react-router'
import { getSingleActivity } from '../../services/activities'
import useFetch from '../../hooks/useFetch'

export default function ActivityShow(){
  // * Params
  const { activityId } = useParams()

  // * State
  const { data: activity, isLoading, error } = useFetch(
    getSingleActivity, // Service function
    {}, // Initial data value
    activityId
  )
  console.log(' ACTIVITY ID:', activityId);
  console.log(' ACTIVITY DATA:', activity);

  return (
    <>
      {error
        ? <p className='error-message'>{error}</p>
        : isLoading
          ? <p>Loading...</p>
          : (
            <section className="single-activity">
              <h1>{activity.title}</h1>
            </section>
          )
      }
    </>
  )
}