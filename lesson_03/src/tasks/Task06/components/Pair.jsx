import Button from '@/components/Button'

function Pair({boy, girl, removePair}) {
  return (
    <li className="flex justify-between items-start gap-1 border p-1 rounded">
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
