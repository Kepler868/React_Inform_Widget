import { useState, useEffect } from 'react'

const useFetch = (requestMethod: any) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await requestMethod()
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [requestMethod])

  return { data, error, loading }
}

export default useFetch
