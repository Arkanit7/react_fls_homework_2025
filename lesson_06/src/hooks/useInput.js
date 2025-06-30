import {useState} from 'react'

function useInput(initValue = '') {
  const [value, setValue] = useState(initValue)

  function onChange({currentTarget: {value}}) {
    setValue(value)
  }

  function onReset() {
    setValue('')
  }

  return {value, onChange, onReset}
}

export default useInput
