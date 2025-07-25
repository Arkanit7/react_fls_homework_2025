import SportsmanItem from './SportsmanItem'

function SportsmenColumn({title, list, toggleChosenById}) {
  return (
    <section className="space-y-2">
      <h2 className="text-center text-lg font-medium">{title}</h2>
      <ul className="divide-y-1 divide-cyan-900 rounded border border-cyan-900 p-2">
        {list.length === 0 ? (
          <li className="text-gray-500">Список порожній...</li>
        ) : (
          list.map((sportsman) => (
            <li key={sportsman.id}>
              <SportsmanItem
                toggleChosen={() => toggleChosenById(sportsman.id)}
                {...sportsman}
              />
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

export default SportsmenColumn
