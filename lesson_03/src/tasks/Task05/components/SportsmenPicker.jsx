import {useLocalStorage} from '@/hooks'
import SportsmenColumn from './SportsmenColumn'

function SportsmenPicker({list, storageKey}) {
  const [sportsmen, setSportsmen] = useLocalStorage(storageKey, list)

  function toggleChosenById(id) {
    setSportsmen((prevSportsmen) =>
      prevSportsmen.map((s) =>
        s.id === id ? {...s, isChosen: !s.isChosen} : s,
      ),
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <SportsmenColumn
        title="Загальний список"
        list={sportsmen.filter(({isChosen}) => !isChosen)}
        toggleChosenById={toggleChosenById}
      />
      <SportsmenColumn
        title="Обрані для змагання"
        list={sportsmen.filter(({isChosen}) => isChosen)}
        toggleChosenById={toggleChosenById}
      />
    </div>
  )
}

export default SportsmenPicker
