import {HOTELS, HOTELS_ACTIONS} from '@/lib/constants'
import {createContext, useContext, useReducer} from 'react'

const HotelsContext = createContext({})

function hotelsReducer(hotels, {type, payload}) {
  switch (type) {
    case HOTELS_ACTIONS.TOGGLE_SELECTION:
      return hotels.map((hotel) =>
        hotel.id === payload.id
          ? {...hotel, isSelected: !hotel.isSelected}
          : hotel,
      )
    case HOTELS_ACTIONS.CLEAR_SELECTION:
      return hotels.map((hotel) =>
        hotel.isSelected ? {...hotel, isSelected: false} : hotel,
      )
    default:
      throw new Error(`There's no such hotel action type as "${type}".`)
  }
}

export function HotelsProvider(props) {
  const [hotels, hotelsDispatch] = useReducer(hotelsReducer, HOTELS)

  return <HotelsContext {...props} value={{hotels, hotelsDispatch}} />
}

export function useHotelsContext() {
  return useContext(HotelsContext)
}
