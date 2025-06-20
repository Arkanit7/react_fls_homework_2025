import {useState} from 'react'
import TranslateCard from './TranslateCard'
import {shuffleArray} from '@/utils'

function TranslateManager({list}) {
  const [shuffledList] = useState(() => shuffleArray(list, false))
  const [activeIndex, setActiveIndex] = useState(0)

  function showNextCard() {
    setActiveIndex((a) => (a < list.length - 1 ? a + 1 : a))
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-center">Тест з англійської мови</h3>
      <TranslateCard
        showNextCard={showNextCard}
        {...shuffledList[activeIndex]}
      />
    </div>
  )
}

export default TranslateManager
