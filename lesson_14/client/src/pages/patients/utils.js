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
