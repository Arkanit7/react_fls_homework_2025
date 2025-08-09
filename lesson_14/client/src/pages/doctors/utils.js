/** @param {import('@/types').Doctor} docDoctor */
export function getDoctorDetailsData({specialty, email, phone, room, notes}) {
  return [
    {title: 'Спеціальність', data: specialty},
    {title: 'Телефон', data: phone},
    {title: 'Імейл', data: email},
    {title: 'Кабінет', data: room},
    ...(notes ? [{title: 'Нотатка', data: notes}] : []),
  ]
}

export function getDoctorFormFields(patient) {
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
        label: 'Спеціальність',
        name: 'specialty',
        defaultValue: patient?.specialty,
        required: true,
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
        label: 'Кабінет',
        name: 'room',
        type: 'number',
        defaultValue: patient?.room,
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
