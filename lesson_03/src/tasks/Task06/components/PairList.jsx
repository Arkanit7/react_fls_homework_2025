import Pair from './Pair'

function PairList({list, removePairById}) {
  return (
    <div className="space-y-2 rounded-lg border border-cyan-900 p-2">
      <h2 className="text-center text-lg font-medium">Пари</h2>
      <ul className="xs:grid-cols-2 grid gap-2 lg:grid-cols-3">
        {list.length === 0 ? (
          <li className="text-gray-500">Список порожній</li>
        ) : (
          list.map(({id, boy, girl}) => (
            <Pair
              key={id}
              boy={boy}
              girl={girl}
              removePair={() => removePairById(id)}
            ></Pair>
          ))
        )}
      </ul>
    </div>
  )
}

export default PairList
