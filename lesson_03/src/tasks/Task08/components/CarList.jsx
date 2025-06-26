import Car from './Car'

function CarList({cars, filtersSchema}) {
  return (
    <div className="overflow-auto">
      <table className="space-y-2 w-full">
        <caption className="text-xl font-medium">Машини</caption>
        <thead>
          <tr className="capitalize">
            {/* {use the predefined filter names for the table header} */}
            {filtersSchema.map(({title}, i) => (
              <th key={i} className="border border-cyan-900 p-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cars.length === 0 ? (
            <tr>
              <td colSpan={filtersSchema.length}>
                Жодних товарів, які відповідали б обраним фільтрам.
              </td>
            </tr>
          ) : (
            cars.map((car) => <Car key={car.id} details={car} />)
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CarList
