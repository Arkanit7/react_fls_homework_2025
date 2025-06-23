import {FEEDBACK_TYPES, FEEDBACK_DURATION_MS} from './constants'
import {wait} from '@/utils'

export async function checkWordsLogic({
  selectedIdEn,
  selectedIdUk,
  setSelectedIdEn,
  setSelectedIdUk,
  setFeedbackWords,
  setRemovedWords,
}) {
  if (selectedIdEn == null || selectedIdUk == null) return

  const isCorrect = selectedIdEn === selectedIdUk

  const feedback = {
    type: isCorrect ? FEEDBACK_TYPES.CORRECT : FEEDBACK_TYPES.ERROR,
    enId: selectedIdEn,
    ukId: selectedIdUk,
  }

  // add feedback
  setFeedbackWords((w) => [...w, feedback])
  setSelectedIdEn(null)
  setSelectedIdUk(null)

  await wait(FEEDBACK_DURATION_MS)

  // remove feedback on the words
  setFeedbackWords((w) =>
    w.filter(({enId, ukId}) => selectedIdEn !== enId || selectedIdUk !== ukId),
  )

  if (isCorrect)
    setRemovedWords((w) => new Set([...w, selectedIdEn, selectedIdUk]))
}
