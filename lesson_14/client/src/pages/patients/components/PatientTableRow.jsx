import {useDeletePatientMutation} from '@/api/api'
import {navigationRoutes} from '@/router/navigation'
import {Pencil, Trash} from 'lucide-react'
import {Link} from 'react-router'

function PatientTableRow({patient}) {
  const [deletePatient] = useDeletePatientMutation()

  return (
    <tr className="relative transition-[background-color] hover:bg-primary/10">
      <td>
        <Link
          className="after:absolute after:inset-0"
          to={navigationRoutes.patients.getDetails(patient.id)}
        >
          {patient.fullName}
        </Link>
      </td>
      {['birthDate', 'phone', 'address', 'notes'].map((key, i) => (
        <td key={i}>{patient[key]}</td>
      ))}
      <td className="relative flex gap-2">
        <Link
          className="btn btn-square p-1 btn-soft btn-sm btn-primary"
          to={navigationRoutes.patients.getEditDetails(patient.id)}
        >
          <Pencil /> <span className="sr-only">Редагувати</span>
        </Link>
        <button
          className="btn btn-square p-1 btn-soft btn-sm btn-error"
          onClick={() => deletePatient(patient.id)}
        >
          <Trash /> <span className="sr-only">Видалити</span>
        </button>
      </td>
    </tr>
  )
}

export default PatientTableRow
