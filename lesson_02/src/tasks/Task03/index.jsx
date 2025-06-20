import {translateList} from './constants'
import TranslateManager from './TranslateManager'

function Task03() {
  return (
    <div className="flex justify-center">
      <TranslateManager list={translateList} />
    </div>
  )
}

export default Task03
