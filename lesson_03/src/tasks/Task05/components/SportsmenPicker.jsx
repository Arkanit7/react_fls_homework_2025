import {useSessionStorage} from '@/hooks'
import SportsmenColumn from './SportsmenColumn'

function SportsmenPicker({list, storageKey}) {
  const [sportsmen, setSportsmen] = useSessionStorage(storageKey, list)
  const leftoverSportsmen = sportsmen.filter(({isChosen}) => !isChosen)
  const chosenSportsmen = sportsmen.filter(({isChosen}) => isChosen)

  function toggleChosenById(id) {
    setSportsmen((prevSportsmen) =>
      prevSportsmen.map((s) =>
        s.id === id ? {...s, isChosen: !s.isChosen} : s,
      ),
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <SportsmenColumn
        title="Загальний список"
        list={leftoverSportsmen}
        toggleChosenById={toggleChosenById}
      />
      <SportsmenColumn
        title="Обрані для змагання"
        list={chosenSportsmen}
        toggleChosenById={toggleChosenById}
      />
    </div>
  )
}

export default SportsmenPicker
