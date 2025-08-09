const { readData, writeData } = require('../utils/fileHandler')
const { v4: uuidv4 } = require('uuid')

const filePath = './data/doctors.json'

exports.getAllDoctors = async (req, res) => {
  const doctors = await readData(filePath)
  res.json(doctors)
}
exports.getDoctorById = async (req, res) => {
  const doctors = await readData(filePath)
  const doctor = doctors.find((p) => p.id === req.params.id)
  if (doctor) res.json(doctor)
  else res.status(404).json({ error: 'Лікаря не знайдено' })
}

exports.createDoctor = async (req, res) => {
  const doctors = await readData(filePath)
  const newDoc = { id: uuidv4(), ...req.body }
  doctors.push(newDoc)
  await writeData(filePath, doctors)
  res.status(201).json(newDoc)
}

exports.updateDoctor = async (req, res) => {
  const doctors = await readData(filePath)
  const index = doctors.findIndex((d) => d.id === req.params.id)
  if (index !== -1) {
    doctors[index] = { ...doctors[index], ...req.body }
    await writeData(filePath, doctors)
    res.json(doctors[index])
  } else res.status(404).json({ error: 'Лікаря не знайдено' })
}

exports.deleteDoctor = async (req, res) => {
  const doctors = await readData(filePath)
  const updated = doctors.filter((d) => d.id !== req.params.id)
  if (updated.length === doctors.length)
    return res.status(404).json({ error: 'Лікаря не знайдено' })
  await writeData(filePath, updated)
  res.status(204).end()
}
