import {useEffect, useState} from 'react'

export function useWindowSize() {
  const [windowMetrics, setWindowMetrics] = useState(() => ({
    height: window.innerHeight,
    width: window.innerWidth,
  }))

  useEffect(() => {
    function handleResize() {
      setWindowMetrics({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize, {passive: true})

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowMetrics
}
