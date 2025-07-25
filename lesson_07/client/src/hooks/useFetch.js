import {useEffect, useState} from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) {
      setData(null)
      setIsLoading(false)
      setError(null)
      return
    }

    const controller = new AbortController()
    setError(null)
    setIsLoading(true)

    async function fetchData() {
      try {
        const resp = await fetch(url, {signal: controller.signal})

        if (!resp.ok) throw new Error(`Bad response ${resp.status}.`)

        const json = await resp.json()
        setData(json)
      } catch (error) {
        if (error.name === 'AbortError') return
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [url])

  return {data, isLoading, error}
}

export default useFetch
