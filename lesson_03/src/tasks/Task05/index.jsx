import SportsmenPicker from './components/SportsmenPicker'
import {SPORTSMEN} from './constants'

function Task05() {
  return <SportsmenPicker list={SPORTSMEN} storageKey="sportsman" />
}

export default Task05
