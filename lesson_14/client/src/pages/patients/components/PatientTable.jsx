import Pagination from './Pagination'
import DataTableRow from './PatientTableRow'

function PatientTable({patient}) {
  return (
    <div className="rounded-box border border-base-content/5 bg-base-100">
      <div className="overflow-x-auto">
        <table className="table table-zebra table-sm">
          <thead>
            <tr>
              {[
                'ПІБ',
                'Рік народження',
                'Телефон',
                'Адреса',
                'Нотатка',
                'Дії',
              ].map((title, i) => (
                <th key={i}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {patientsList.map((patient) => (
              <DataTableRow key={patient.id} patient={patient} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        isEmpty={isEmpty}
      />
    </div>
  )
}

export default PatientTable
