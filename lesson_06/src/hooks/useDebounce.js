import {useEffect, useRef, useState} from 'react'

function useDebounce(value, delayMs = 500) {
  const timeoutIdRef = useRef()
  const [deferredValue, setDeferredValue] = useState(value)

  useEffect(() => {
    timeoutIdRef.current = setTimeout(() => setDeferredValue(value), delayMs)

    return () => clearTimeout(timeoutIdRef.current)
  }, [value, delayMs])

  return deferredValue
}

export default useDebounce
