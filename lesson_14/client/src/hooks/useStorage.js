import {useState, useEffect} from 'react'

function getStoredState(key, initState, storageObject) {
  const storedState = storageObject.getItem(key)

  if (storedState != null) return JSON.parse(storedState)

  if (initState instanceof Function) return initState()

  return initState
}

function useStorage(key, initState, storageObject) {
  const [state, setState] = useState(() =>
    getStoredState(key, initState, storageObject),
  )

  useEffect(() => {
    if (state === undefined) {
      storageObject.removeItem(key)
      return
    }

    storageObject.setItem(key, JSON.stringify(state))
  }, [key, state, storageObject])

  return [state, setState]
}

function useLocalStorage(key, initState) {
  return useStorage(key, initState, localStorage)
}

function useSessionStorage(key, initState) {
  return useStorage(key, initState, sessionStorage)
}

export {useLocalStorage, useSessionStorage}
