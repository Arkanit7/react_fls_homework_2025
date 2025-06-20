import {useState} from 'react'
import Button from '../../components/Button'
import FieldGroup from '../../components/FieldGroup'
import {ArrowLeftEndOnRectangleIcon} from '@heroicons/react/24/solid'

function LoginForm({action, loginError, passwordError, errorClass}) {
  return (
    <form
      className="w-xs rounded-xl bg-gray-800 border-1 border-cyan-400 px-4 py-6 space-y-3 shadow-lg shadow-cyan-400/25"
      action={action}
    >
      <h3 className="text-2xl text-center flex gap-2 justify-center">
        <span className="self-center">Log in</span>
        <ArrowLeftEndOnRectangleIcon className="size-10" />
      </h3>
      <p className="grid gap-1">
        <FieldGroup
          label="Login:"
          name="login"
          autoComplete="off"
          required
          autoFocus
        />
        {loginError && <em className={errorClass}>{loginError}</em>}
      </p>
      <p className="grid gap-1">
        <FieldGroup
          label="Password:"
          name="password"
          type="password"
          autoComplete="off"
          required
        />
        {passwordError && <em className={errorClass}>{passwordError}</em>}
      </p>
      <p>
        <label>
          <input className="accent-cyan-400" type="checkbox" /> Remember me
        </label>
      </p>
      <p>
        <Button type="submit" size="lg" className="w-full">
          Log in
        </Button>
      </p>
    </form>
  )
}

function FormControl({credentials}) {
  const [errorClass, setErrorClass] = useState(null)
  const [loginError, setLoginError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)
  const [user, setUser] = useState(null)

  function handleAction(formData) {
    setLoginError(null)
    setPasswordError(null)
    setErrorClass('text-red-600')

    const userLogin = formData.get('login')
    const userPassword = formData.get('password')

    const user = credentials.find(({login}) => login === userLogin)

    if (user == null) return setLoginError('No such user')

    if (user.errorClass) setErrorClass(user.errorClass)

    if (user.password !== userPassword)
      return setPasswordError('Wrong password')

    setUser(user)
  }

  return user ? (
    <p className="text-[10rem]">😺</p>
  ) : (
    <LoginForm
      action={handleAction}
      loginError={loginError}
      passwordError={passwordError}
      errorClass={errorClass}
    />
  )
}

export default FormControl
