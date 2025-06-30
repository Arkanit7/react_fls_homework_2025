import {useMemo, useState} from 'react'
import FieldGroup from '@/components/composed/FieldGroup'
import Clickable from '@/components/Clickable'
import ResultDisplay from './ResultDisplay'
import {useInput} from '@/hooks'
import RenderCountWrapper from '@/components/RenderCountWrapper'

function Calculator() {
  const [count, setCount] = useState(0)
  const firstNumberInput = useInput('0')
  const secondNumberInput = useInput('0')

  const sum = useMemo(() => {
    return (
      parseFloat(firstNumberInput.value) + parseFloat(secondNumberInput.value)
    )
  }, [firstNumberInput.value, secondNumberInput.value])

  return (
    <RenderCountWrapper title="Calculator">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-2 2xs:grid-cols-2 2xs:gap-4"
      >
        <div>
          <FieldGroup {...firstNumberInput} label="Число A" type="number" />
        </div>

        <div>
          <FieldGroup {...secondNumberInput} label="Число B" type="number" />
        </div>

        <div>
          <ResultDisplay value={sum} />
        </div>

        <div className="col-span-full">
          <Clickable onClick={() => setCount((c) => c + 1)} size="lg">
            Лічильник {count}
          </Clickable>
        </div>
      </form>
    </RenderCountWrapper>
  )
}

export default Calculator
