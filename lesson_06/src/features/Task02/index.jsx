import DataGrid from './components/DataGrid'
import {HEADERS, MOVIES} from './constants'

function Task02() {
  return <DataGrid data={MOVIES} headers={HEADERS} />
}

export default Task02
