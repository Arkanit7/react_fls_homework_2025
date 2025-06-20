import LoginForm from './LoginForm'
import {CREDENTIALS} from './constants'

function Task01() {
  return (
    <div className="flex justify-center">
      <LoginForm credentials={CREDENTIALS} />
    </div>
  )
}

export default Task01
