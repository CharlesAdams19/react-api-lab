// fucntions that do one thing 
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAllActivities = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/activities`)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  export const getSingleActivity = async (activityId) => {
      const response = await axios.get(`${BASE_URL}/activities/${activityId}`)
      return response.data
    }
