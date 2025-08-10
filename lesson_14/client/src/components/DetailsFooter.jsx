import {ArrowLeft, Pencil, Trash} from 'lucide-react'
import {Link} from 'react-router'

function DetailsFooter({back, edit, onDelete}) {
  return (
    <div className="flex justify-between gap-2 max-sm:flex-col">
      <Link className="btn flex-none btn-dash btn-primary" to={back}>
        <ArrowLeft /> Назад
      </Link>

      <div className="flex flex-wrap justify-end gap-[inherit] max-sm:flex-col">
        <Link className="btn btn-primary" to={edit}>
          <Pencil /> Редагувати
        </Link>
        <button className="btn btn-error" onClick={onDelete} type="button">
          <Trash /> Видалити
        </button>
      </div>
    </div>
  )
}

export default DetailsFooter
