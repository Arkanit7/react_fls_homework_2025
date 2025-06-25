import {SendHorizontal} from 'lucide-react'

function MessageForm({handleSubmit, handleTextareaKeyDown}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-950 rounded border border-gray-800 p-2 focus-within:ring ring-cyan-500 flex gap-1 transition-[box-shadow]"
    >
      <textarea
        className="focus:outline-0 flex-1 w-0 resize-none field-sizing-content"
        name="message"
        autoComplete="off"
        onKeyDown={handleTextareaKeyDown}
      ></textarea>
      <button
        className="flex-none self-start text-cyan-700 hover:text-cyan-500 transition-[color]"
        title="Send the message"
      >
        <SendHorizontal className="size-[2.125em]" />
      </button>
    </form>
  )
}

export default MessageForm
