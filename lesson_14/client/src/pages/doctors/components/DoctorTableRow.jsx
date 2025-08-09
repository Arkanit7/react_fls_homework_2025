import {useDeleteDoctorMutation} from '@/api/api'
import {navigationRoutes} from '@/router/navigation'
import {Pencil, Trash} from 'lucide-react'
import {Link} from 'react-router'

function PatientTableRow({doctor}) {
  const [deletePatient] = useDeleteDoctorMutation()

  return (
    <tr className="relative transition-[background-color] hover:bg-primary/10">
      <td>
        <Link
          className="after:absolute after:inset-0"
          to={navigationRoutes.doctors.getDetails(doctor.id)}
        >
          {doctor.fullName}
        </Link>
      </td>
      {['specialty', 'phone', 'room', 'notes'].map((key, i) => (
        <td key={i}>{doctor[key]}</td>
      ))}
      <td className="relative flex gap-2">
        <Link
          className="btn btn-square p-1 btn-soft btn-sm btn-primary"
          to={navigationRoutes.doctors.getEditDetails(doctor.id)}
        >
          <Pencil /> <span className="sr-only">Редагувати</span>
        </Link>
        <button
          className="btn btn-square p-1 btn-soft btn-sm btn-error"
          onClick={() => deletePatient(doctor.id)}
        >
          <Trash /> <span className="sr-only">Видалити</span>
        </button>
      </td>
    </tr>
  )
}

export default PatientTableRow
