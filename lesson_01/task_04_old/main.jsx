import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

const EXCHANGE_RATES = {
  USD: 1 / 41.41,
  EUR: 1 / 47.05,
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

function FormInput({
  onSubmit,
  label,
  buttonLabel,
  min,
  max,
  step,
  type = 'text',
}) {
  const bindingId = crypto.randomUUID()

  return (
    <form className="input-group" onSubmit={onSubmit}>
      <label className="input-group-text" htmlFor={bindingId}>
        {label}
      </label>
      <input
        id={bindingId}
        className="form-control"
        style={{ minWidth: '10ch' }}
        type={type}
        min={min ?? min}
        max={max ?? max}
        step={step}
      />
      <button className="btn btn-outline-info">{buttonLabel}</button>
    </form>
  )
}

function HighlightCurrency({ money, rate }) {
  const convertedBalance = money * rate
  const className = convertedBalance < 100 ? 'text-danger' : 'text-success'

  return (
    <span className={className}>
      {convertedBalance.toLocaleString('uk-UA')}
    </span>
  )
}

function HighlightBalance({ ballance, change }) {
  let className

  if (change > 0) className = 'text-success'
  else if (change < 0) className = 'text-danger'

  return <span className={className}>{ballance.toLocaleString('uk-UA')}</span>
}

function FinanceManager({ fee = 3 / 100 }) {
  const [finances, setFinances] = useState(() => ({
    ballanceUAH: 0,
    changeUAH: 0,
  }))
  const totalFee = Math.abs(finances.changeUAH) * fee

  function onReplenishUAH(e) {
    e.preventDefault()
    const inputEl = e.currentTarget.elements[0]
    const replenishUAH = parseFloat(inputEl.value)

    if (!isFinite(replenishUAH) || replenishUAH <= 0) return

    setFinances((prevFinances) => ({
      ballanceUAH: prevFinances.ballanceUAH + replenishUAH * (1 - fee),
      changeUAH: replenishUAH,
    }))
    inputEl.value = '0'
  }

  function onWithdrawalUAH(e) {
    e.preventDefault()
    const inputEl = e.currentTarget.elements[0]
    const withdrawalUAH = parseFloat(inputEl.value)

    if (
      !isFinite(withdrawalUAH) ||
      withdrawalUAH <= 0 ||
      finances.ballanceUAH < withdrawalUAH * (1 + fee)
    )
      return

    setFinances((prevFinances) => ({
      ballanceUAH: prevFinances.ballanceUAH - withdrawalUAH * (1 + fee),
      changeUAH: -withdrawalUAH,
    }))
    inputEl.value = '0'
  }

  return (
    <div className="flow-2">
      <p>
        Сума на рахунку:{' '}
        <HighlightBalance
          ballance={finances.ballanceUAH}
          change={finances.changeUAH}
        />{' '}
        ₴
      </p>
      <FormInput
        onSubmit={onReplenishUAH}
        label="Зарахувати на рахунок"
        buttonLabel="Зарахувати"
        type="number"
        min="0"
        step="any"
      />
      <FormInput
        onSubmit={onWithdrawalUAH}
        label="Зняти з рахунку"
        buttonLabel="Зняти"
        type="number"
        min="0"
        max={(finances.ballanceUAH * (1 - fee)).toFixed(2)}
        step="any"
      />
      <p>Відсотки за обслуговування: {totalFee.toLocaleString('uk-UA')} ₴</p>
      <p>
        Сума у доларах: $
        <HighlightCurrency
          money={finances.ballanceUAH}
          rate={EXCHANGE_RATES.USD}
        />
      </p>
      <p>
        Сума у євро: €
        <HighlightCurrency
          money={finances.ballanceUAH}
          rate={EXCHANGE_RATES.EUR}
        />
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="container-prose | py-4">
      <TaskDescription />
      <hr />
      <h2>Рішення:</h2>
      <FinanceManager />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
