import Pair from './Pair'

function PairList({list, removePairByBoyId}) {
  return (
    <div className="space-y-2 border border-cyan-900 rounded-lg p-2">
      <h2 className="text-lg text-center font-medium">Пари</h2>
      <ul className="grid xs:grid-cols-2 lg:grid-cols-3 gap-2">
        {list.map(({boy, girl}) => (
          <Pair
            key={boy.id}
            boy={boy}
            girl={girl}
            removePair={() => removePairByBoyId(boy.id)}
          ></Pair>
        ))}
      </ul>
    </div>
  )
}

export default PairList
