import {ORDER_STATUS} from './constants'

class Order {
  constructor(name) {
    this.name = name
    this.status = ORDER_STATUS.WAITING
    this.id = crypto.randomUUID()
  }
}

export default Order
