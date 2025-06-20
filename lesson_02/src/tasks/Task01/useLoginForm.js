import {useState} from 'react'

function useLoginForm(credentials) {
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
  return {user, handleAction, loginError, passwordError, errorClass}
}

export default useLoginForm
