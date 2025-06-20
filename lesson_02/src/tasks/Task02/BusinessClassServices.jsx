import RadioSet from '@/components/composed/RadioSet'
import {BUSINESS_SERVICES} from './constants'
import {useState} from 'react'

function BusinessClassServices({services, updateServices}) {
  const [hasAppetizer, setHasAppetizer] = useState(false)

  function handlePrefersAppetizer({target: {checked}}) {
    setHasAppetizer(checked)
    updateServices('appetizer', '')
  }

  return (
    <div className="space-y-4">
      <RadioSet
        list={BUSINESS_SERVICES.newspapers}
        onChange={(e) => updateServices('newspaper', e.target.value)}
        legend="Газети"
        name="newspaper"
      />
      <RadioSet
        list={BUSINESS_SERVICES.cognacs}
        onChange={(e) => updateServices('cognac', e.target.value)}
        legend="Коньяки"
        name="cognac"
      />
      {services.cognac && (
        <>
          <p>
            <label>
              <input
                onChange={handlePrefersAppetizer}
                className="accent-cyan-400"
                type="checkbox"
              />{' '}
              Бажаєте закуску?
            </label>
          </p>
          {hasAppetizer && (
            <RadioSet
              list={BUSINESS_SERVICES.appetizers}
              onChange={(e) => updateServices('appetizer', e.target.value)}
              legend="Закуски"
              name="appetizer"
            />
          )}
        </>
      )}
    </div>
  )
}

export default BusinessClassServices
