const { readData, writeData } = require('../utils/fileHandler')
const { v4: uuidv4 } = require('uuid')

const filePath = './data/patients.json'

exports.getAllPatients = async (req, res) => {
  const patients = await readData(filePath)
  const { name, page = 1, size = 10 } = req.query

  let filteredPatients = patients

  if (name != null) {
    const normalizedName = name.trim().toLowerCase()

    filteredPatients = patients.filter((p) =>
      p.fullName.toLowerCase().includes(normalizedName)
    )
  }

  const normalizedPage = parseInt(page)
  const normalizedSize = parseInt(size)
  const start = (normalizedPage - 1) * normalizedSize
  const paginatedPatients = filteredPatients.slice(
    start,
    start + normalizedSize
  )
  const totalPages = Math.ceil(filteredPatients.length / size)
  const remaining = filteredPatients.length - (start + normalizedSize)

  res.json({
    items: paginatedPatients,
    remaining: remaining > 0 ? remaining : 0,
    totalPages,
  })
}

exports.getPatientById = async (req, res) => {
  const patients = await readData(filePath)
  const patient = patients.find((p) => p.id === req.params.id)
  if (patient) res.json(patient)
  else res.status(404).json({ error: 'Пацієнта не знайдено' })
}

exports.createPatient = async (req, res) => {
  const patients = await readData(filePath)
  const newPatient = { id: uuidv4(), ...req.body }
  patients.push(newPatient)
  await writeData(filePath, patients)
  res.status(201).json(newPatient)
}

exports.updatePatient = async (req, res) => {
  const patients = await readData(filePath)
  const index = patients.findIndex((p) => p.id === req.params.id)
  if (index !== -1) {
    patients[index] = { ...patients[index], ...req.body }
    await writeData(filePath, patients)
    res.json(patients[index])
  } else res.status(404).json({ error: 'Пацієнта не знайдено' })
}

exports.deletePatient = async (req, res) => {
  const patients = await readData(filePath)
  const updated = patients.filter((p) => p.id !== req.params.id)
  if (updated.length === patients.length)
    return res.status(404).json({ error: 'Пацієнта не знайдено' })
  await writeData(filePath, updated)
  res.status(204).end()
}
