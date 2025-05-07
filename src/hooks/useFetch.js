// reusable function that deals with other lifecycle efects - this time setting errors 
import {useEffect, useState} from 'react'

export default function useFetch(serviceFunction, initialDataValue, arg){

    // pieces of state 
    const [data, setData] = useState(initialDataValue)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState ('')

    // effects on mount 
    useEffect(() =>{
        async function fetchData (){
            try{
                const result = await serviceFunction(arg)
                // consume the data from the api and then have to set the data 
                setData(result)
            } catch {
                setError('failed to fetch')
            
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
}, [serviceFunction, arg])

  
return { data, isLoading, error}
}