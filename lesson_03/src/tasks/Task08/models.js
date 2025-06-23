export class Car {
  constructor({brand, year, price}) {
    this.brand = brand
    this.year = year
    this.price = price
    this.id = crypto.randomUUID()
  }
}
