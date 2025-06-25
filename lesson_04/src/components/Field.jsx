function Field({className, type = 'text', ...restProps}) {
  return (
    <input
      className={`px-4 py-2 rounded-lg border-1 border-cyan-700 bg-black hover:border-cyan-500 transition-[border-color] disabled:pointer-events-none disabled:opacity-50 ${className}`}
      type={type}
      {...restProps}
    />
  )
}

export default Field
