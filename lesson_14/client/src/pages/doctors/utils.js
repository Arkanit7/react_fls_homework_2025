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
