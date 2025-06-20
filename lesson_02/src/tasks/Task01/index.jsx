import LoginForm from './LoginForm'
import {CREDENTIALS} from './constants'

function Task01() {
  return (
    <div>
      <ul>
        {CREDENTIALS.map(({login, password}, i) => (
          <li key={i}>
            {login} / {password}
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <LoginForm credentials={CREDENTIALS} />
      </div>
    </div>
  )
}

export default Task01
