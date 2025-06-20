import {STATUS} from './constants'
import TranslateCard from './TranslateCard'
import useTranslateManager from './useTranslateManager'
import {CakeIcon} from '@heroicons/react/24/solid'

function TranslateManager({list}) {
  const {status, phrase, setPhrase, handleSubmit, currentQuestion} =
    useTranslateManager(list)

  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-center">Тест з англійської мови</h3>

      {status === STATUS.FINISH ? (
        <div className="p-2 flex gap-4 items-center bg-green-400/20 border border-green-400 rounded text-green-400">
          <CakeIcon className="size-12 flex-none" />
          <div>
            <p>Урок пройдено!</p>
            <p>Усього слів: {list.length}</p>
          </div>
        </div>
      ) : (
        <TranslateCard
          phrase={phrase}
          setPhrase={setPhrase}
          status={status}
          currentQuestion={currentQuestion}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default TranslateManager
