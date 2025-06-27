import Button from '@/components/Button'

function Pair({boy, girl, removePair}) {
  return (
    <li className="flex items-start justify-between gap-1 rounded border border-cyan-900 bg-black p-1">
      👦 {boy.name} – 👧 {girl.name}
      <Button
        onClick={removePair}
        variant="alert"
        size="sm"
        className="flex-none"
        title="Розформувати"
      >
        ✖
      </Button>
    </li>
  )
}

export default Pair
