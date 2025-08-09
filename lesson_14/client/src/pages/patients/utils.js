import {LOCALE} from '@/lib/constants'

/** @param {import('@/types').Patient} patient */
export function getPatientDetailsData({
  birthDate,
  address,
  gender,
  email,
  phone,
  notes,
}) {
  const dateFormatter = new Intl.DateTimeFormat(LOCALE, {
    dateStyle: 'long',
  })

  return [
    {
      title: 'Дата народження',
      data: dateFormatter.format(Date.parse(birthDate)),
    },
    {title: 'Стать', data: gender === 'male' ? 'Чоловік' : 'Жінка'},
    {title: 'Телефон', data: phone},
    {title: 'Імейл', data: email},
    {title: 'Адреса', data: address},
    ...(notes ? [{title: 'Нотатка', data: notes}] : []),
  ]
}

import {formatDateForInput} from '@/lib/utils'

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
        min: formatDateForInput(minDate),
        max: formatDateForInput(maxDate),
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
