import {useState} from 'react'

function useFlightServices() {
  const [services, setServices] = useState(() => ({
    flightClass: '',
    newspaper: '',
    cognac: '',
    appetizer: '',
    beer: '',
    chips: '',
  }))

  function updateServices(key, value) {
    setServices((s) => ({...s, [key]: value}))
  }

  function updateFlightClass(flightClass) {
    setServices({
      flightClass,
      newspaper: '',
      cognac: '',
      appetizer: '',
      beer: '',
      chips: '',
    })
  }

  return {services, updateFlightClass, updateServices}
}

export default useFlightServices
