const { readData, writeData } = require('../utils/fileHandler')
const { v4: uuidv4 } = require('uuid')

const filePath = './data/appointments.json'
const patientsPath = './data/patients.json'

exports.getAllAppointments = async (req, res) => {
  const appointments = await readData(filePath)
  const patients = await readData(patientsPath)
  const { date, patientName } = req.query

  let result = appointments

  if (date) {
    result = result.filter((app) => app.date.startsWith(date))
  }

  if (patientName) {
    result = result.filter((app) => {
      const patient = patients.find((p) => p.id === app.patientId)
      return (
        patient &&
        patient.fullName.toLowerCase().includes(patientName.toLowerCase())
      )
    })
  }

  res.json(result)
}

exports.getAppointmentById = async (req, res) => {
  const appointments = await readData(filePath)
  const app = appointments.find((a) => a.id === req.params.id)
  if (app) res.json(app)
  else res.status(404).json({ error: 'Запис не знайдено' })
}

exports.createAppointment = async (req, res) => {
  const appointments = await readData(filePath)
  const newApp = { id: uuidv4(), ...req.body }
  appointments.push(newApp)
  await writeData(filePath, appointments)
  res.status(201).json(newApp)
}

exports.updateAppointment = async (req, res) => {
  const appointments = await readData(filePath)
  const index = appointments.findIndex((a) => a.id === req.params.id)
  if (index !== -1) {
    appointments[index] = { ...appointments[index], ...req.body }
    await writeData(filePath, appointments)
    res.json(appointments[index])
  } else res.status(404).json({ error: 'Запис не знайдено' })
}

exports.deleteAppointment = async (req, res) => {
  const appointments = await readData(filePath)
  const updated = appointments.filter((a) => a.id !== req.params.id)
  if (updated.length === appointments.length)
    return res.status(404).json({ error: 'Запис не знайдено' })
  await writeData(filePath, updated)
  res.status(204).end()
}
