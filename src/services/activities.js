import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAllActivites = async () => {
  
    const response = await axios.get(`${BASE_URL}/activities`)
    return response.data;
  }