import RadioSet from '@/components/composed/RadioSet'
import {ECONOMY_SERVICES} from './constants'

function EconomyClassServices({updateServices}) {
  return (
    <>
      <RadioSet
        list={ECONOMY_SERVICES.beers}
        onChange={(e) => updateServices('beer', e.target.value)}
        legend="Пиво"
        name="beer"
      />
      <RadioSet
        list={ECONOMY_SERVICES.chips}
        onChange={(e) => updateServices('chips', e.target.value)}
        legend="Чипси"
        name="chips"
      />
    </>
  )
}

export default EconomyClassServices
