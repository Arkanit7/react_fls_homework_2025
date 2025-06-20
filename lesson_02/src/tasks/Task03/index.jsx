import {translateList} from './constants'
import TranslateManager from './TranslateManager'

function Task03() {
  return (
    <div className="flex justify-center">
      <div
        className="basis-xs
      "
      >
        <TranslateManager list={translateList} />
      </div>
    </div>
  )
}

export default Task03
