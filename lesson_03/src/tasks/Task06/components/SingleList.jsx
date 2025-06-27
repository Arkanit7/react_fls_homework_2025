import Person from './Person'

function SingleList({title, list, pickDancerId, activeDancerId, disabled}) {
  return (
    <section className="space-y-2 rounded-lg border border-cyan-900 p-2">
      <h2 className="text-center text-lg font-medium">{title}</h2>
      <ul className="xs:grid-cols-2 grid gap-2">
        {list.length === 0 ? (
          <li className="text-gray-500">Список порожній</li>
        ) : (
          list
            .filter(({hasPair}) => !hasPair)
            .map(({name, id}) => (
              <Person
                key={id}
                name={name}
                isActive={activeDancerId === id}
                pickDancer={() => pickDancerId(id)}
                disabled={disabled}
              />
            ))
        )}
      </ul>
    </section>
  )
}

export default SingleList
