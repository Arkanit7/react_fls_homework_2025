import axios from 'axios'
import {useState, useCallback} from 'react'

function useAxios() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async ({method, url, data}) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await axios({method, data, url})
      setData(response.data)
    } catch (error) {
      setError(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const sendData = useCallback(async ({method, url, data}) => {
    setIsLoading(true)
    setError(null)

    try {
      await axios({method, data, url})
    } catch (error) {
      setError(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {data, isLoading, error, fetchData, sendData}
}

export default useAxios
