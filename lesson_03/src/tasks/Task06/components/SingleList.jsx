import Person from './Person'

function SingleList({title, list, pickDancerId, activeDancerId, disabled}) {
  return (
    <section className="border border-cyan-900 p-2 rounded-lg space-y-2">
      <h2 className="text-lg text-center font-medium">{title}</h2>
      <ul className="grid xs:grid-cols-2 gap-2">
        {list
          .filter(({hasPair}) => !hasPair)
          .map(({name, id}) => (
            <Person
              key={id}
              name={name}
              isActive={activeDancerId === id}
              pickDancer={() => pickDancerId(id)}
              disabled={disabled}
            />
          ))}
      </ul>
    </section>
  )
}

export default SingleList
