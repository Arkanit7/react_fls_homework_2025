function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-1 backdrop-blur-[1px]">
      <div className="size-6 animate-bounce rounded-full bg-green-400"></div>
      <div className="size-6 animate-[bounce_1s_-0.125s_infinite] rounded-full bg-blue-400"></div>
      <div className="size-6 animate-[bounce_1s_-0.25s_infinite] rounded-full bg-red-400"></div>
    </div>
  )
}

export default Loader
