import Car from './Car'

function CarList({cars}) {
  return (
    <div className="overflow-auto">
      <table className="space-y-2 w-full">
        <caption className="text-lg font-medium">Машини</caption>
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Марка</th>
            <th className="border border-gray-400 p-2">Рік</th>
            <th className="border border-gray-400 p-2">Ціна</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <Car key={car.id} {...car} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CarList
