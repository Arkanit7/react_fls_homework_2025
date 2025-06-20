function Field(props) {
  return (
    <input
      className="w-full px-4 py-2 rounded-lg border-1 border-gray-600 bg-gray-900 hover:border-cyan-400 transition-[border-color]"
      type="text"
      {...props}
    />
  )
}

export default Field
