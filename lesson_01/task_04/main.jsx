import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const EXCHANGE_RATES = {
  USD: 1 / 41.41,
  EUR: 1 / 47.05,
}

const INFO_MESSAGES = {
  BLANK: { text: null, type: null },
  NOT_ENOUGH_MONEY: { text: 'Помилка: недостатньо коштів', type: 'error' },
  INCORRECT_INPUT: { text: 'Помилка: некоректний ввід', type: 'error' },
  SUCCESS: { text: 'Успішно!', type: 'success' },
}

/** @param {number} money */
function formatMoney(money) {
  return money.toLocaleString('uk-UA', { maximumFractionDigits: 2 })
}

function HighlightBallance({ ballance, lastOperation }) {
  const prettyBalance = formatMoney(ballance) + ' ₴'
  let ballanceClass

  if (lastOperation === 'withdrawal') ballanceClass = 'text-danger'
  else if (lastOperation === 'deposit') ballanceClass = 'text-success'
  else ballanceClass = 'text-info'

  return (
    <p className="fs-4 d-flex flex-wrap justify-content-between align-items-center row-gap-1 column-gap-2">
      Сума на рахунку: <span className={ballanceClass}>{prettyBalance}</span>
    </p>
  )
}

function HighlightCurrency({ currency }) {
  return (
    <span className={currency < 100 ? 'text-danger' : 'text-success'}>
      {formatMoney(currency)}
    </span>
  )
}

function CurrencyTable({ ballance, exchangeUSD, exchangeEUR }) {
  return (
    <table className="table table-sm table-striped-columns text-center">
      <thead>
        <tr>
          <th>USD, $</th>
          <th>EUR, €</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <HighlightCurrency currency={ballance * exchangeUSD} />
          </td>
          <td>
            <HighlightCurrency currency={ballance * exchangeEUR} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

function InfoScreen({ text, type }) {
  let className = 'info-screen | px-3 py-2 rounded-2 border'

  switch (type) {
    case 'error':
      className += ' text-danger bg-danger-subtle'
      break
    case 'success':
      className += ' text-success bg-success-subtle'
      break
  }

  return <div className={className}>{text}</div>
}

function AmountInput({ amount, onAmountChange }) {
  const bindingId = crypto.randomUUID()

  return (
    <div className="form-floating">
      <input
        id={bindingId}
        className="form-control bg-dark-subtle"
        autoComplete="off"
        required
        value={amount}
        onChange={(e) => onAmountChange(e.currentTarget.value)}
        type="number"
        min="0"
        step="0.01"
        placeholder="Введіть суму"
      />
      <label htmlFor={bindingId}>Введіть суму</label>
    </div>
  )
}

function Button({ label, onClick }) {
  return (
    <button className="btn btn-info" onClick={onClick} type="button">
      {label}
    </button>
  )
}

function PredictionTable({ money, fee }) {
  return (
    <table className="table table-sm">
      <tbody>
        <tr>
          <th scope="row">До зарахування</th>
          <td className="text-end">{formatMoney(money * (1 - fee))} ₴</td>
        </tr>
        <tr>
          <th scope="row">До зняття</th>
          <td className="text-end">{formatMoney(money * (1 + fee))} ₴</td>
        </tr>
        <tr>
          <th scope="row">Комісія ({formatMoney(fee * 100)}%)</th>
          <td className="text-end">{formatMoney(money * fee)} ₴</td>
        </tr>
      </tbody>
    </table>
  )
}

function FinanceManager({ initBallance, fee }) {
  const [ballance, setBallance] = useState(initBallance)
  const [message, setMessage] = useState(INFO_MESSAGES.BLANK)

  const [userAmount, setUserAmount] = useState('')
  const parsedUserAmount = parseFloat(userAmount)
  // Я навмисно використовую тип String для userAmount, щоб мати змогу очищувати поле вводу (писати не 0, а '')

  const [lastOperation, setLastOperation] = useState(null)

  function onBallanceChange(newBallance, operationType) {
    if (newBallance < 0) {
      setMessage(INFO_MESSAGES.NOT_ENOUGH_MONEY)
      return
    }

    setMessage(INFO_MESSAGES.SUCCESS)
    setBallance(newBallance)
    setUserAmount('')
    setLastOperation(operationType)
  }

  function depositMoney(money) {
    if (!isFinite(money) || money <= 0)
      return setMessage(INFO_MESSAGES.INCORRECT_INPUT)

    onBallanceChange(ballance + money * (1 - fee), 'deposit')
  }

  function withdrawMoney(money) {
    if (!isFinite(money) || money <= 0)
      return setMessage(INFO_MESSAGES.INCORRECT_INPUT)

    onBallanceChange(ballance - money * (1 + fee), 'withdrawal')
  }

  /** @param {number} newUserAmount */
  function handleUserAmount(newUserAmount) {
    setMessage(INFO_MESSAGES.BLANK)
    setUserAmount(newUserAmount)
  }

  return (
    <div className="finance | mx-auto px-2 px-sm-4 py-3 border-info border-2 border-top border-bottom shadow-lg flow-3">
      <HighlightBallance ballance={ballance} lastOperation={lastOperation} />
      <CurrencyTable
        ballance={ballance}
        exchangeUSD={EXCHANGE_RATES.USD}
        exchangeEUR={EXCHANGE_RATES.EUR}
      />
      <InfoScreen {...message} />
      <AmountInput amount={userAmount} onAmountChange={handleUserAmount} />
      <div className="row g-2">
        <div className="col-6 d-grid">
          <Button
            label="Зарахувати"
            onClick={() => depositMoney(parsedUserAmount)}
          />
        </div>
        <div className="col-6 d-grid">
          <Button
            label="Зняти"
            onClick={() => withdrawMoney(parsedUserAmount)}
          />
        </div>
      </div>
      <PredictionTable money={parsedUserAmount || 0} fee={fee} />
    </div>
  )
}

function TaskDescription() {
  return (
    <>
      <h1>Задача №4 "Рахунок у банку"</h1>
      <p>Вимоги:</p>
      <ol>
        <li>
          Спочатку сума дорівнює 0грн. Змінити суму у гривнях можна або
          зарахуванням на рахунок, або зняттям.
        </li>
        <li>
          Сума автоматично переводиться у долари та євро (фіксований курс
          задається у data).
        </li>
        <li>
          можливість зарахувати суму (контролювати, щоб не була від’ємною)
        </li>
        <li> можливість зняти (щоб не можна зняти більше ніж є на рахунку)</li>
        <li>
          при виконанні зняття і зарахування коштів вираховувати 3% від суми
          (відображати кількість відсотків автоматично)
        </li>
      </ol>
      <p>При зміні суми :</p>
      <ul>
        <li>якщо було зняття, то суму відображати червоним</li>
        <li>якщо було зарахування, то суму відображати зеленим</li>
        <li>
          якщо сума валюти менша за 100 то відображати червоним кольором, інакше
          - зеленим
        </li>
      </ul>
    </>
  )
}

function App() {
  return (
    <div className="container-prose | py-4">
      <TaskDescription />
      <hr />
      <h2 className="mb-3">Рішення:</h2>
      <FinanceManager initBallance={0} fee={3 / 100} />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
