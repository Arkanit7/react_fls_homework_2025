import {useEffect} from 'react'

function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])
}

export default useUpdateLogger
