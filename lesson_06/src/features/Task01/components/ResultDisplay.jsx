import {memo} from 'react'
import RenderCountWrapper from '@/components/RenderCountWrapper'

function ResultDisplay({value}) {
  return (
    <RenderCountWrapper title="ResultDisplay">
      <label className="text-lg">
        {isFinite(value) ? (
          <>
            Сума: <output>{value}</output>
          </>
        ) : (
          <em className="text-red-500">помилка</em>
        )}
      </label>
    </RenderCountWrapper>
  )
}

export default memo(ResultDisplay)
