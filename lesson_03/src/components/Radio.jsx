function Radio({label, name, value, onChange}) {
  return (
    <label className="inline-flex cursor-pointer gap-2 rounded-lg px-3 py-1.5 transition-colors hover:bg-black/60 has-checked:bg-cyan-800 has-checked:ring-2 has-checked:ring-cyan-400 has-focus-visible:bg-black/60">
      {label}{' '}
      <input
        onChange={onChange}
        defaultValue={value}
        name={name}
        className="sr-only"
        type="radio"
      />
    </label>
  )
}

export default Radio
