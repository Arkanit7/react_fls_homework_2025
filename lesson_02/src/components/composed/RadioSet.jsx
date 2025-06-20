import Radio from '@/components/Radio'

function RadioSet({list, onChange, legend, name}) {
  return (
    <fieldset className="space-y-1">
      {legend && <legend className="text-lg font-medium">{legend}</legend>}
      <ul className="flex flex-wrap gap-2">
        {list.map((item, i) => (
          <li key={i}>
            <Radio onChange={onChange} label={item} value={item} name={name} />
          </li>
        ))}
      </ul>
    </fieldset>
  )
}

export default RadioSet
