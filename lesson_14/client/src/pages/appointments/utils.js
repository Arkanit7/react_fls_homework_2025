import {LOCALE} from '@/lib/constants'
import {
  APPOINTMENT_STATUS_NAMES,
  MISSING_DOCTOR_NAME,
  MISSING_PATIENT_NAME,
} from './constants'

/** @param {import('@/types').Patient} patient */
export function getAppointmentDetailsData({
  date,
  reason,
  status,
  doctorName,
  patientName,
}) {
  const dateFormatter = new Intl.DateTimeFormat(LOCALE, {
    dateStyle: 'full',
    timeStyle: 'medium',
  })

  return [
    {title: 'Статус', data: APPOINTMENT_STATUS_NAMES[status]},
    {title: 'Пацієнт', data: patientName},
    {title: 'Лікар', data: doctorName},
    {
      title: 'Час',
      data: dateFormatter.format(Date.parse(date)),
    },
    {title: 'Причина', data: reason},
  ]
}

function getIdToName(list) {
  const result = {}

  for (const {id, fullName} of list) {
    result[id] = fullName
  }

  return result
}

/**
 * @param {import('@/types').Appointment[]} appointmentsList
 * @param {import('@/types').Patient[]} patientsList
 * @param {import('@/types').Doctor[]} doctorsList
 */
export function getAppointmentsWithNames(
  appointmentsList,
  patientsList,
  doctorsList,
) {
  const patients = getIdToName(patientsList)
  const doctors = getIdToName(doctorsList)

  const result = []

  for (const appointment of appointmentsList) {
    result.push({
      ...appointment,
      patientName: patients[appointment.patientId] ?? MISSING_PATIENT_NAME,
      doctorName: doctors[appointment.doctorId] ?? MISSING_DOCTOR_NAME,
    })
  }

  return result
}

/**
 * @param {import('@/types').Appointment} appointment
 * @param {import('@/types').Patient[]} patientsList
 * @param {import('@/types').Doctor[]} doctorsList
 */
export function getAppointmentFormFields(
  appointment,
  patientsList,
  doctorsList,
) {
  return [
    {
      component: 'select',
      props: {
        label: 'Пацієнт',
        name: 'patientId',
        defaultValue: appointment?.patientId,
        required: true,
        options: patientsList.map(({id, fullName}) => ({
          value: id,
          label: fullName,
        })),
      },
    },
    {
      component: 'select',
      props: {
        label: 'Лікар',
        name: 'doctorId',
        defaultValue: appointment?.doctorId,
        required: true,
        options: doctorsList.map(({id, fullName}) => ({
          value: id,
          label: fullName,
        })),
      },
    },
    {
      component: 'InputWithLabel',
      props: {
        label: 'Час',
        name: 'date',
        type: 'datetime-local',
        // min: formatInputDate(minDate),
        // max: formatInputDate(maxDate),
        // ? Make sure that no seconds or milliseconds will break the input
        defaultValue: appointment?.date.slice(0, 16),
        required: true,
      },
    },
    {
      component: 'select',
      props: {
        label: 'Статус',
        name: 'status',
        defaultValue: appointment?.status,
        required: true,
        options: Object.entries(APPOINTMENT_STATUS_NAMES).map(
          ([value, label]) => ({
            value,
            label,
          }),
        ),
      },
    },
    {
      component: 'InputWithLabel',
      props: {
        label: 'Причина',
        name: 'reason',
        defaultValue: appointment?.reason,
        required: true,
      },
    },
  ]
}
