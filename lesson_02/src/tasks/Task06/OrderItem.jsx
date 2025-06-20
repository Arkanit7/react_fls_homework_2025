import Button from '@/components/Button'

function OrderItem({updateOrder, name, buttonLabel}) {
  return (
    <div className="border-green-500 flex flex-wrap gap-2 items-start border rounded-lg p-2 text-sm">
      <span className="flex-auto">{name}</span>
      <Button size="sm" variant="success" onClick={updateOrder}>
        {buttonLabel}
      </Button>
    </div>
  )
}

export default OrderItem
