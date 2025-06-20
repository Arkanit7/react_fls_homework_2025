import {WORKERS_LIST_2} from './constants'

function Task04() {
  return (
    <>
      <h2>Працівники:</h2>
      <ul>
        {WORKERS_LIST_2.map(({name, salary}, i) => (
          <li key={i} className="list-disc list-inside">
            {name}: {salary}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Task04
