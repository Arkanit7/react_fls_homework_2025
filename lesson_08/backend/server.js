const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs').promises // Використовуємо promises API для асинхронних операцій з файлами
const path = require('path') // Для роботи зі шляхами до файлів

const app = express()
const PORT = process.env.PORT || 5000
const DATA_FILE = path.join(__dirname, 'teachers.json') // Шлях до файлу даних

// Middleware
app.use(bodyParser.json())
app.use(cors())

// --- Допоміжні функції для роботи з файлом ---

// Функція для читання даних з JSON файлу
async function readTeachersFromFile() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // Якщо файл не існує або порожній, повертаємо порожній масив
    if (error.code === 'ENOENT' || error.name === 'SyntaxError') {
      return []
    }
    throw error // Викидаємо помилку, якщо щось пішло не так
  }
}

// Функція для запису даних у JSON файл
async function writeTeachersToFile(teachersData) {
  await fs.writeFile(DATA_FILE, JSON.stringify(teachersData, null, 2), 'utf8')
}

// Утиліта для генерації унікального ID
const generateId = (teachers) => {
  return new Date().getTime()
}

// --- Маршрути API для CRUD операцій ---

// 1. GET /api/teachers - Отримати всіх вчителів
app.get('/api/teachers', async (req, res) => {
  try {
    const teachers = await readTeachersFromFile()
    res.json(teachers)
  } catch (error) {
    console.error('Помилка при отриманні вчителів:', error)
    res.status(500).json({ message: 'Помилка сервера при отриманні вчителів' })
  }
})

// 2. GET /api/teachers/:id - Отримати вчителя за ID
app.get('/api/teachers/:id', async (req, res) => {
  const { id } = req.params
  try {
    const teachers = await readTeachersFromFile()
    const teacher = teachers.find((t) => t.id == id)

    if (teacher) {
      res.json(teacher)
    } else {
      res.status(404).json({ message: 'Вчителя не знайдено' })
    }
  } catch (error) {
    console.error('Помилка при отриманні вчителя за ID:', error)
    res.status(500).json({ message: 'Помилка сервера при отриманні вчителя' })
  }
})

// 3. POST /api/teachers - Створити нового вчителя
app.post('/api/teachers', async (req, res) => {
  const { name, subject, photo } = req.body

  if (!name || !subject) {
    return res
      .status(400)
      .json({ message: "Ім'я та предмет є обов'язковими полями" })
  }

  try {
    const teachers = await readTeachersFromFile()
    const newTeacher = {
      id: generateId(teachers),
      name,
      subject,
      photo: photo || 'https://cdn-icons-png.flaticon.com/512/168/168726.png', // Дефолтне фото
    }

    teachers.push(newTeacher)
    await writeTeachersToFile(teachers) // Зберігаємо оновлений список
    res.status(201).json(newTeacher) // 201 Created
  } catch (error) {
    console.error('Помилка при створенні вчителя:', error)
    res.status(500).json({ message: 'Помилка сервера при створенні вчителя' })
  }
})

// 4. PUT /api/teachers/:id - Оновити вчителя за ID
app.put('/api/teachers/:id', async (req, res) => {
  const { id } = req.params
  const { name, subject, photo } = req.body

  try {
    let teachers = await readTeachersFromFile()
    let found = false
    teachers = teachers.map((teacher) => {
      if (teacher.id == id) {
        found = true
        return {
          ...teacher,
          name: name !== undefined ? name : teacher.name, // Оновлюємо лише якщо поле надано
          subject: subject !== undefined ? subject : teacher.subject,
          photo: photo !== undefined ? photo : teacher.photo,
        }
      }
      return teacher
    })

    if (found) {
      await writeTeachersToFile(teachers) // Зберігаємо оновлений список
      const updatedTeacher = teachers.find((t) => t.id == id)
      res.json(updatedTeacher)
    } else {
      res.status(404).json({ message: 'Вчителя не знайдено для оновлення' })
    }
  } catch (error) {
    console.error('Помилка при оновленні вчителя:', error)
    res.status(500).json({ message: 'Помилка сервера при оновленні вчителя' })
  }
})

// 5. DELETE /api/teachers/:id - Видалити вчителя за ID
app.delete('/api/teachers/:id', async (req, res) => {
  const { id } = req.params
  console.log('----id')
  console.log(id)

  try {
    let teachers = await readTeachersFromFile()
    const initialLength = teachers.length
    teachers = teachers.filter((teacher) => teacher.id != id)

    if (teachers.length < initialLength) {
      await writeTeachersToFile(teachers) // Зберігаємо оновлений список
      res.status(204).send() // 204 No Content
    } else {
      res.status(404).json({ message: 'Вчителя не знайдено для видалення' })
    }
  } catch (error) {
    console.error('Помилка при видаленні вчителя:', error)
    res.status(500).json({ message: 'Помилка сервера при видаленні вчителя' })
  }
})

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`)
  console.log('Дані зберігаються у файлі:', DATA_FILE)
  console.log('Доступні маршрути:')
  console.log('GET   /api/teachers')
  console.log('GET   /api/teachers/:id')
  console.log('POST  /api/teachers')
  console.log('PUT   /api/teachers/:id')
  console.log('DELETE /api/teachers/:id')
})
