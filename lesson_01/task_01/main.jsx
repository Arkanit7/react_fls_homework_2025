import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function getPassengerStatsFn(busCapacity, waterBottles, sandwiches) {
  return (passengersAmount) => ({
    Автобуси: Math.ceil(passengersAmount / busCapacity),
    'Пляшки води': passengersAmount * waterBottles,
    Бутерброди: passengersAmount * sandwiches,
  })
}

function ControlledInput({ value, onChange, label, type = 'text' }) {
  const bindingId = crypto.randomUUID()

  return (
    <div className="input-group">
      <label className="input-group-text" htmlFor={bindingId}>
        {label}
      </label>

      <input
        id={bindingId}
        className="form-control"
        style={{ minWidth: '10ch' }}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function Table({ data }) {
  const thList = Object.keys(data).map((tableHeader, i) => (
    <th key={i}>{tableHeader}</th>
  ))
  const tdList = Object.values(data).map((tableData, i) => (
    <td key={i}>{tableData}</td>
  ))

  return (
    <div className="table-responsive mt-4">
      <table className="table table-striped-columns">
        <thead>
          <tr>{thList}</tr>
        </thead>
        <tbody>
          <tr>{tdList}</tr>
        </tbody>
      </table>
    </div>
  )
}

function PassengerStats({ statsFn }) {
  const [passengersAmount, setPassengersAmount] = useState(0)
  const passengerStats = statsFn(passengersAmount)

  function onPassengersChange({ currentTarget: { value } }) {
    const parsedValue = parseInt(value)

    if (!isFinite(parsedValue) || parsedValue < 0) setPassengersAmount(0)
    else setPassengersAmount(parsedValue)
  }

  return (
    <>
      <ControlledInput
        value={passengersAmount}
        onChange={onPassengersChange}
        type="number"
        label={'Кількість пасажирів:'}
      />
      <Table data={passengerStats}></Table>
    </>
  )
}

function App() {
  const getPassengerStats = getPassengerStatsFn(20, 2, 3)

  return (
    <div className="container-prose | py-4">
      <h1>Задача №1</h1>
      <p>Вводиться кількість пасажирів. Вивести:</p>
      <ul>
        <li>скільки потрібно автобусів (кожен автобус на 20 місць)</li>
        <li>скільки пляшок води (кожному пасажиру 2 пляшки)</li>
        <li>скільки бутербродів (кожному пасажиру 3 бутерброди)</li>
      </ul>
      <hr />
      <h2>Рішення:</h2>
      <PassengerStats statsFn={getPassengerStats} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
