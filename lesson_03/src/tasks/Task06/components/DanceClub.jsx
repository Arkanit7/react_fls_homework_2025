import {useState} from 'react'
import Button from '@/components/Button'
import SingleList from './SingleList'
import PairList from './PairList'
import {useSessionStorage} from '@/hooks'

function DanceClub({boys, girls}) {
  const [activeBoyId, setActiveBoyId] = useState(null)
  const [activeGirlId, setActiveGirlId] = useState(null)

  const [pairs, setPairs] = useSessionStorage('dancePairs', () => [])
  const pairCollection = pairs.map(({id, boyId, girlId}) => ({
    id,
    boy: boys.find(({id}) => boyId === id),
    girl: girls.find(({id}) => girlId === id),
  }))

  const availableBoys = boys.filter(
    (boy) => !pairs.some(({boyId}) => boyId === boy.id),
  )
  const availableGirls = girls.filter(
    (girl) => !pairs.some(({girlId}) => girlId === girl.id),
  )

  const canSelectBoy = availableGirls.length > 0
  const canSelectGirl = availableBoys.length > 0
  const isPairReady = activeBoyId !== null && activeGirlId !== null

  function makePair() {
    if (!isPairReady) return
    setPairs((p) => [
      ...p,
      {id: crypto.randomUUID(), boyId: activeBoyId, girlId: activeGirlId},
    ])

    // cleanup
    setActiveBoyId(null)
    setActiveGirlId(null)
  }

  function pickBoyId(id) {
    if (!canSelectBoy) return

    if (activeBoyId === id) setActiveBoyId(null)
    else setActiveBoyId(id)
  }

  function pickGirlId(id) {
    if (!canSelectGirl) return

    if (activeGirlId === id) setActiveGirlId(null)
    else setActiveGirlId(id)
  }

  function removePairById(id) {
    setPairs((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-2 md:grid-cols-2">
        <SingleList
          title="Хлопці"
          list={availableBoys}
          pickDancerId={pickBoyId}
          activeDancerId={activeBoyId}
          disabled={!canSelectBoy}
        />
        <SingleList
          title="Дівчата"
          list={availableGirls}
          pickDancerId={pickGirlId}
          activeDancerId={activeGirlId}
          disabled={!canSelectGirl}
        />
      </div>
      <div className="flex justify-center">
        <Button
          onClick={makePair}
          size="lg"
          disabled={!isPairReady}
          type="button"
        >
          Додати
        </Button>
      </div>
      <PairList list={pairCollection} removePairById={removePairById} />
    </div>
  )
}

export default DanceClub
