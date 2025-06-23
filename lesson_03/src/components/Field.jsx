function Field({className, type = 'text', ...restProps}) {
  return (
    <input
      className={`px-4 py-2 rounded-lg border-1 border-gray-600 bg-gray-900 hover:border-cyan-400 transition-[border-color] ${className}`}
      type={type}
      {...restProps}
    />
  )
}

export default Field
