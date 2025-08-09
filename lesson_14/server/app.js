const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const patientsRoutes = require('./routes/patients')
const appointmentsRoutes = require('./routes/appointments')
const doctorsRoutes = require('./routes/doctors')

const app = express()

app.use((req, res, next) => {
  setTimeout(() => next(), 500)
})
app.use(cors())
app.use(bodyParser.json())

// Роути
app.use('/patients', patientsRoutes)
app.use('/appointments', appointmentsRoutes)
app.use('/admin/doctors', doctorsRoutes)

module.exports = app
