import {useDeleteAppointmentMutation} from '@/api/api'
import {navigationRoutes} from '@/router/navigation'
import {Pencil, Trash} from 'lucide-react'
import {Link} from 'react-router'
import {APPOINTMENT_STATUS_NAMES} from '../constants'
import {LOCALE} from '@/lib/constants'

const dateFormatter = new Intl.DateTimeFormat(LOCALE, {
  dateStyle: 'medium',
  timeStyle: 'short',
})

function AppointmentTableRow({appointment}) {
  const [deleteAppointment] = useDeleteAppointmentMutation()

  return (
    <tr className="relative transition-[background-color] hover:bg-primary/10">
      <td>
        <Link
          className="after:absolute after:inset-0"
          to={navigationRoutes.appointments.getDetails(appointment.id)}
        >
          {appointment.patientName}
        </Link>
      </td>
      <td>{appointment.doctorName}</td>
      <td>{dateFormatter.format(Date.parse(appointment.date))}</td>
      <td>{appointment.reason}</td>
      <td>{APPOINTMENT_STATUS_NAMES[appointment.status]}</td>
      <td className="relative flex gap-2">
        <Link
          className="btn btn-square p-1 btn-soft btn-sm btn-primary"
          to={navigationRoutes.appointments.getEditDetails(appointment.id)}
        >
          <Pencil /> <span className="sr-only">Редагувати</span>
        </Link>
        <button
          className="btn btn-square p-1 btn-soft btn-sm btn-error"
          onClick={() => deleteAppointment(appointment.id)}
        >
          <Trash /> <span className="sr-only">Видалити</span>
        </button>
      </td>
    </tr>
  )
}

export default AppointmentTableRow
