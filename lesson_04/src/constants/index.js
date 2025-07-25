import {Task} from '@/models'

import Task01 from '@/features/Task01'
import Task02 from '@/features/Task02'

export const TASKS = [
  new Task({
    title: 'Задача №1',
    description:
      'Створити імітатор месенджера. Є можливість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).',
    component: Task01,
  }),
  new Task({
    title: 'Задача №2',
    description:
      "Гра “Вгадай число”. Правила гри: 1) комп'ютер генерує трицифрове число; 2) кожен гравець по черзі задає цифру, якої ще не було (відсліковуємо, щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести (блокуємо кнопку “Зробити хід”)). 3) якщо цифру вгадано, вона відображатися у полі гри “Число”; 4) програє той, хто вгадав останню цифру. Бажано відображати біля області кожного гравця цифри, які він вгадав.",
    component: Task02,
  }),
]
