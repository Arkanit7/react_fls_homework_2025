import {useState, useEffect} from 'react'

function getStoredState(key, initState) {
  const storedState = JSON.parse(sessionStorage.getItem(key))

  if (storedState != null) return storedState

  if (initState instanceof Function) return initState()

  return initState
}

function useSessionStorage(key, initState) {
  const [state, setState] = useState(() => getStoredState(key, initState))

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default useSessionStorage
