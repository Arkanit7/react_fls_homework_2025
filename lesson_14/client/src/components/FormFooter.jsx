import {ArrowLeft} from 'lucide-react'
import {Link} from 'react-router'

function FormFooter({to, isError}) {
  return (
    <div className="flex justify-between gap-x-8 gap-y-2 max-sm:flex-col">
      <Link className="btn btn-dash btn-primary" to={to}>
        <ArrowLeft /> Назад
      </Link>
      <button className="btn btn-primary">
        {isError ? 'Помилка' : 'Відправити'}
      </button>
    </div>
  )
}

export default FormFooter
