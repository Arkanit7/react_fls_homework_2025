import {capitalize} from '@/utils'
import Spoiler from '@/components/Spoiler'

function FilterList({filter, propertiesToFilter, setSelectedFilters}) {
  function handleChange({currentTarget: {checked, name}}) {
    setSelectedFilters((prevFilters) => {
      const propertiesClone = new Set(prevFilters[filter.key] ?? [])

      if (checked) propertiesClone.add(name)
      else propertiesClone.delete(name)

      return {...prevFilters, [filter.key]: propertiesClone}
    })
  }

  return (
    <Spoiler
      title={capitalize(filter.title)}
      isOpen={false}
      as="h3"
      variant="compact"
    >
      <ul>
        {propertiesToFilter.map((property, i) => (
          <li key={i}>
            <label>
              <input type="checkbox" name={property} onChange={handleChange} />{' '}
              {property}
            </label>
          </li>
        ))}
      </ul>
    </Spoiler>
  )
}

export default FilterList
