import Button from '@/components/Button'

function Order({updateOrder, name, buttonLabel}) {
  return (
    <div className="flex flex-wrap gap-2 items-start border rounded-lg p-2 text-sm">
      <span className="flex-auto">{name}</span>
      <Button size="sm" onClick={updateOrder}>
        {buttonLabel}
      </Button>
    </div>
  )
}

export default Order
