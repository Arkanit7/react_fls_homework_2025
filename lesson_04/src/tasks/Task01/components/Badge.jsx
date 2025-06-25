function Badge({text, count, ...restProps}) {
  return (
    <button
      className="bg-slate-700 px-1 py-0.5 text-sm rounded-lg ring-cyan-400 hover:ring transition-[box-shadow]"
      {...restProps}
    >
      {text} {count}
    </button>
  )
}

export default Badge
