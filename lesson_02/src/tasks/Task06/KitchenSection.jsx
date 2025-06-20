import OrderItem from './OrderItem'

function KitchenSection({orders, title, buttonLabel, updateOrderById}) {
  return (
    <div className="rounded-lg border border-yellow-400 bg-yellow-400/15 p-2 grid md:grid-rows-subgrid md:row-span-full divide-y-1 space-y-2 divide-yellow-400">
      <h4 className="text-center pb-2 text-yellow-400">{title}</h4>
      <ul className="space-y-1">
        {orders.map((order) => (
          <OrderItem
            key={order.id}
            updateOrder={() => updateOrderById(order.id)}
            buttonLabel={buttonLabel}
            {...order}
          />
        ))}
      </ul>
    </div>
  )
}

export default KitchenSection
