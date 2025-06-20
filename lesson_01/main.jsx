import React from 'react'
import { createRoot } from 'react-dom/client'

class Task {
  constructor(data) {
    Object.assign(this, data)
  }
}

const TASKS = [
  new Task({
    title: 'Задача №1',
    text: 'Вводиться кількість пасажирів. Вивести:',
    href: './task_01/',
  }),
  new Task({
    title: 'Задача №2',
    text: 'Вводиться номер місяця. Автоматично виводити рекомендований одяг (зима – пальто, літо – шорти, ….). Також автоматично виводити зображення з відповідним зображенням лісу (зима – ліс зі снігом, осінь – жовтий ліс, …)',
    href: './task_02/',
  }),
  new Task({
    title: 'Задача №3',
    text: 'Задано початок та кінець діапазону. При натисканні на кнопку випадковим чином генерувати значення з вказаного діапазону та відображати його.',
    href: './task_03/',
  }),
  new Task({
    title: 'Задача №4',
    text: `Вимоги:

    Спочатку сума дорівнює 0грн. Змінити суму у гривнях можна або зарахуванням на рахунок, або зняттям.
    Сума автоматично переводиться у долари та євро (фіксований курс задається у data).
    можливість зарахувати суму (контролювати, щоб не була від’ємною)
    можливість зняти (щоб не можна зняти більше ніж є на рахунку)
    при виконанні зняття і зарахування коштів вираховувати 3% від суми (відображати кількість відсотків автоматично)

При зміні суми :

    якщо було зняття, то суму відображати червоним
    якщо було зарахування, то суму відображати зеленим
    якщо сума валюти менша за 100 то відображати червоним кольором, інакше - зеленим`,
    href: './task_04/',
  }),
  new Task({
    title: 'Задача №5',
    text: "Додаток містить масив об'єктів (логін, пароль) – існуючі логіни і паролі. Користувач вводить логін і пароль, а програма при натисненні на кнопку повідомляє чи може користувач бути авторизованим.",
    href: './task_05/',
  }),
]

function clampText(text, maxLength = 80) {
  if (text.length <= maxLength) return text

  return text.slice(0, maxLength - 3) + '...'
}

function Card({ title, text, href }) {
  return (
    <a className="task-card | card h-100 border-info link-light" href={href}>
      <article className="card-body">
        <h2 className="card-title h5">{title}</h2>
        <p className="card-text">{clampText(text)}</p>
      </article>
    </a>
  )
}

function App({ tasks }) {
  return (
    <div className="overflow-hidden">
      <main className="container py-4">
        <h1 className="text-center mb-4">1. Вступ. Основи синтаксису</h1>
        <div className="row g-2 g-md-3">
          {tasks.map((task, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-xl-3">
              <Card {...task} />
            </div>
          ))}
        </div>
      </main>
      <img
        className="background-image"
        src="./react_logo.webp"
        alt="React Logo"
      />
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App tasks={TASKS} />)
