import Car from './Car'

function CarList({cars}) {
  return (
    <table className="space-y-2">
      <caption className="text-lg font-medium">Машини</caption>
      <thead>
        <tr>
          <th className="border p-2">Марка</th>
          <th className="border p-2">Рік</th>
          <th className="border p-2">Ціна</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <Car key={car.id} {...car} />
        ))}
      </tbody>
    </table>
  )
}

export default CarList
