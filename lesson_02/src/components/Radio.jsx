function Radio({label, name, value, onChange}) {
  return (
    <label className="px-2 py-1 inline-flex gap-2 rounded-lg cursor-pointer transition-colors hover:bg-black/60 has-focus-visible:bg-black/60 has-checked:bg-cyan-950 has-checked:text-indigo-200 has-checked:ring-cyan-900 accent-cyan-400">
      {label}{' '}
      <input
        onChange={onChange}
        defaultValue={value}
        name={name}
        className=""
        type="radio"
      />
    </label>
  )
}

export default Radio
