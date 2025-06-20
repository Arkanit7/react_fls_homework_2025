import {useLocalStorage} from '@/hooks'
import Order from './Order'

function useKitchen() {
  const [orders, setOrders] = useLocalStorage('orders', [])

  function makeOrder(name) {
    setOrders((o) => [...o, new Order(name)])
  }

  function updateOrderStatusById(id, status) {
    setOrders((prevOrders) =>
      prevOrders.map((o) => (o.id === id ? {...o, status} : o)),
    )
  }

  function removeOrderById(id) {
    setOrders((prevOrders) => prevOrders.filter((o) => o.id !== id))
  }

  return {orders, makeOrder, updateOrderStatusById, removeOrderById}
}

export default useKitchen
