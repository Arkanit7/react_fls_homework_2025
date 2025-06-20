import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const CREDENTIALS = new Map([
  ['admin', 'master'],
  ['Svitlana', 'hello kitty'],
  ['Adriana', '123456'],
  ['Ivan-1', 'password'],
])

function FloatingInput({
  name,
  label,
  type = 'text',
  autoComplete = 'off',
  required = true,
}) {
  const bindingId = crypto.randomUUID()

  return (
    <div className="form-floating">
      <input
        id={bindingId}
        className="form-control"
        type={type}
        name={name}
        placeholder={label}
        autoComplete={autoComplete}
        required={required}
      />
      <label htmlFor={bindingId}>{label}</label>
    </div>
  )
}

function UserMessage({ isCorrect }) {
  let message

  if (isCorrect)
    message = (
      <p className="text-success bg-success-subtle p-1 rounded">
        <i className="bi bi-check-lg"></i> Успішно
      </p>
    )
  else
    message = (
      <p className="text-danger bg-danger-subtle p-1 rounded">
        <i className="bi bi-x-lg"></i> Невірні дані
      </p>
    )

  return message
}

/**
 * @param {Object} props
 * @param {Map} props.credentials
 */
function LoginForm({ credentials }) {
  const [isCorrect, setIsCorrect] = useState(null)

  /** @param {FormData} formData */
  function handleAction(formData) {
    const login = formData.get('login')
    const password = formData.get('password')

    setIsCorrect(credentials.get(login) === password)
  }

  return (
    <form
      className="form-signin w-100 mx-auto flow-3 px-3 py-4 border-info border-2 border-top border-bottom shadow-lg "
      action={handleAction}
    >
      <h3 className="fw-normal text-center">
        <i className="bi bi-door-open" /> Вхід на сайт
      </h3>

      <div>
        <FloatingInput name="login" label="Логін" />
        <FloatingInput name="password" label="Пароль" type="password" />
      </div>

      <button className="btn btn-info w-100 py-2">Увійти</button>

      {isCorrect != null && <UserMessage isCorrect={isCorrect} />}
    </form>
  )
}

function App() {
  const userList = (
    <ul>
      {Array.from(CREDENTIALS).map(([login, password], i) => (
        <li key={i}>{`${login} : ${password}`}</li>
      ))}
    </ul>
  )

  return (
    <div className="container-prose | py-4">
      <h1>Задача №5</h1>
      <p>
        Додаток містить масив об'єктів (логін, пароль) – існуючі логіни і
        паролі. Користувач вводить логін і пароль, а програма при натисненні на
        кнопку повідомляє чи може користувач бути авторизованим.
      </p>
      <hr />
      <div className="flow-3">
        <h2>Рішення:</h2>
        <LoginForm credentials={CREDENTIALS} />
        <h3>Користувачі:</h3>
        {userList}
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
