// src/pages/patients/patientFormFields.js
import {formatInputDate} from '@/lib/utils'

export function getPatientFormFields(patient) {
  const minDate = new Date()
  minDate.setFullYear(-130)

  const maxDate = new Date()

  return [
    {
      component: 'InputWithLabel',
      props: {
        label: 'ПІБ',
        name: 'fullName',
        defaultValue: patient?.fullName,
        required: true,
      },
    },
    {
      component: 'InputWithLabel',
      props: {
        label: 'Дата народження',
        name: 'birthDate',
        type: 'date',
        min: formatInputDate(minDate),
        max: formatInputDate(maxDate),
        defaultValue: patient?.birthDate,
        required: true,
      },
    },
    {
      component: 'select',
      props: {
        label: 'Стать',
        name: 'gender',
        defaultValue: patient?.gender,
        required: true,
        options: [
          {value: 'male', label: 'Чоловік'},
          {value: 'female', label: 'Жінка'},
        ],
      },
    },
    {
      component: 'InputWithLabel',
      props: {
        label: 'Телефон',
        name: 'phone',
        type: 'tel',
        defaultValue: patient?.phone,
        required: true,
      },
    },
    {
      component: 'InputWithLabel',
      props: {
        label: 'Імейл',
        name: 'email',
        type: 'email',
        defaultValue: patient?.email,
        required: true,
      },
    },
    {
      component: 'InputWithLabel',
      props: {
        label: 'Адреса',
        name: 'address',
        defaultValue: patient?.address,
        required: true,
      },
    },
    {
      component: 'InputWithLabel',
      props: {
        label: 'Нотатка',
        name: 'notes',
        defaultValue: patient?.notes,
      },
    },
  ]
}
