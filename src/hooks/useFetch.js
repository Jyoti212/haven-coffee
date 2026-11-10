import { useState, useEffect, useRef, useCallback } from 'react'

export default function useFetch(url, options) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const controllerRef = useRef(null)

  const fetchData = useCallback(async (signalUrl) => {
    if (!signalUrl) {
      setData(null)
      setLoading(false)
      setError(null)
      return
    }

    if (controllerRef.current) {
      controllerRef.current.abort()
    }
    const controller = new AbortController()
    controllerRef.current = controller

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(signalUrl, { signal: controller.signal, ...options })
      if (!res.ok) throw new Error(`Fetch error: ${res.status} ${res.statusText}`)
      const json = await res.json()
      setData(json)
      setError(null)
      return json
    } catch (err) {
      if (err.name === 'AbortError') return
      setError(err.message || String(err))
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [options])

  useEffect(() => {
    fetchData(url)
    return () => {
      if (controllerRef.current) controllerRef.current.abort()
    }
  }, [url, fetchData])

  const refetch = useCallback(() => {
    return fetchData(url)
  }, [url, fetchData])

  return { data, loading, error, refetch }
}
