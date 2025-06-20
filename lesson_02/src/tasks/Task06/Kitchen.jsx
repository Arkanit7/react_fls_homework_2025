import OrderForm from './OrderForm'
import useKitchen from './useKitchen'
import KitchenSection from './KitchenSection'
import {ORDER_STATUS} from './constants'

function Kitchen() {
  const {orders, makeOrder, updateOrderStatusById, removeOrderById} =
    useKitchen()

  return (
    <div className="space-y-4">
      <OrderForm makeOrder={makeOrder} />
      <div className="grid md:grid-cols-3 md:grid-rows-[auto_1fr] min-h-60">
        <KitchenSection
          title="Очікують на виконання"
          orders={orders.filter(({status}) => status === ORDER_STATUS.WAITING)}
          buttonLabel="Готувати"
          updateOrderById={(id) =>
            updateOrderStatusById(id, ORDER_STATUS.IN_PROGRESS)
          }
        />
        <KitchenSection
          title="Виконуються"
          orders={orders.filter(
            ({status}) => status === ORDER_STATUS.IN_PROGRESS,
          )}
          buttonLabel="Приготовлено"
          updateOrderById={(id) =>
            updateOrderStatusById(id, ORDER_STATUS.COMPLETED)
          }
        />
        <KitchenSection
          title="Готові до виносу"
          orders={orders.filter(
            ({status}) => status === ORDER_STATUS.COMPLETED,
          )}
          buttonLabel="Подано"
          updateOrderById={removeOrderById}
        />
      </div>
    </div>
  )
}

export default Kitchen
