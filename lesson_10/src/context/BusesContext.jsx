import {BUSES, BUSES_ACTIONS} from '@/lib/constants'
import {createContext, useContext, useReducer} from 'react'

const BusesContext = createContext({})

function busesReducer(buses, {type, payload}) {
  switch (type) {
    case BUSES_ACTIONS.TOGGLE_SELECTION:
      return buses.map((bus) =>
        bus.id === payload.id ? {...bus, isSelected: !bus.isSelected} : bus,
      )
    case BUSES_ACTIONS.CLEAR_SELECTION:
      return buses.map((bus) =>
        bus.isSelected ? {...bus, isSelected: false} : bus,
      )
    default:
      throw new Error(`There's no such bus action type as "${type}".`)
  }
}

export function BusesProvider(props) {
  const [buses, busesDispatch] = useReducer(busesReducer, BUSES)

  return <BusesContext {...props} value={{buses, busesDispatch}} />
}

export function useBusesContext() {
  return useContext(BusesContext)
}
