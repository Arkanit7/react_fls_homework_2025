import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function getRandomNumber(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from
}

function InputGroupFragment({
  label,
  value,
  onChange,
  min,
  max,
  type = 'text',
}) {
  const bindingId = crypto.randomUUID()

  return (
    <>
      <label className="input-group-text" htmlFor={bindingId}>
        {label}
      </label>
      <input
        id={bindingId}
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </>
  )
}

function RandomNumberRange({ initFrom, initTo }) {
  const [from, setFrom] = useState(initFrom)
  const [to, setTo] = useState(initTo)
  const [number, setNumber] = useState(null)

  function onFromChange({ currentTarget: { value } }) {
    const parsedValue = parseInt(value)

    if (!isFinite(parsedValue)) return

    setFrom(parsedValue)
  }

  function onToChange({ currentTarget: { value } }) {
    const parsedValue = parseInt(value)

    if (!isFinite(parsedValue)) return

    setTo(parsedValue)
  }

  function onNumberChange() {
    if (from > to) {
      setFrom(to)
      setTo(from)
    }

    setNumber(getRandomNumber(from, to))
  }

  return (
    <form action={onNumberChange}>
      <div className="input-group mb-3">
        <InputGroupFragment
          type="number"
          label="Від"
          value={from}
          onChange={onFromChange}
        />
        <InputGroupFragment
          type="number"
          label="До"
          value={to}
          onChange={onToChange}
        />
      </div>
      <button className="btn btn-info w-100 mb-3">Генерувати</button>
      <p className="text-center text-info fs-1 fw-lighter">{number}</p>
    </form>
  )
}

function App() {
  return (
    <div className="container-prose | py-4">
      <h1>Задача №3</h1>
      <p>
        Задано початок та кінець діапазону. При натисканні на кнопку випадковим
        чином генерувати значення з вказаного діапазону та відображати його.
      </p>
      <hr />
      <h2>Рішення:</h2>
      <RandomNumberRange initFrom={-99} initTo={99} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
