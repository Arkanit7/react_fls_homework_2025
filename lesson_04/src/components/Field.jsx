function Field({className, type = 'text', ...restProps}) {
  return (
    <input
      className={`rounded-lg border-1 border-cyan-700 bg-black px-4 py-2 transition-[border-color] hover:border-cyan-500 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      type={type}
      {...restProps}
    />
  )
}

export default Field
