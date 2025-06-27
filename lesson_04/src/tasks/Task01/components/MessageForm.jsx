import {SendHorizontal} from 'lucide-react'

function MessageForm({handleSubmit, handleTextareaKeyDown}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-1 rounded border border-gray-800 bg-gray-950 p-2 ring-cyan-500 transition-[box-shadow] focus-within:ring"
    >
      <textarea
        className="field-sizing-content w-0 flex-1 resize-none focus:outline-0"
        name="message"
        autoComplete="off"
        onKeyDown={handleTextareaKeyDown}
      ></textarea>
      <button
        className="flex-none self-start text-cyan-700 transition-[color] hover:text-cyan-500"
        title="Send the message"
      >
        <SendHorizontal className="size-[2.125em]" />
      </button>
    </form>
  )
}

export default MessageForm
