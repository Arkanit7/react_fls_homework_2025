function Badge({text, count, ...restProps}) {
  return (
    <button
      className="rounded-lg bg-slate-700 px-1 py-0.5 text-sm ring-cyan-400 transition-[box-shadow] hover:ring"
      {...restProps}
    >
      {text} {count}
    </button>
  )
}

export default Badge
