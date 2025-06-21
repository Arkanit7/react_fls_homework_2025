import Button from '@/components/Button'
import FieldGroup from '@/components/composed/FieldGroup'
import {ArrowLeftEndOnRectangleIcon} from '@heroicons/react/24/solid'
import useLoginForm from './useLoginForm'

function LoginForm({credentials}) {
  const {user, handleAction, loginError, passwordError, errorClass} =
    useLoginForm(credentials)

  return user ? (
    <p className="text-[10rem]">😺</p>
  ) : (
    <form
      className="w-xs rounded-xl bg-gray-800 border-1 border-cyan-400 px-4 py-6 space-y-3 shadow-lg shadow-cyan-400/25"
      action={handleAction}
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

export default LoginForm
