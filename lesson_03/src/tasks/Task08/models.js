export class Car {
  constructor({brand, year, color, price}) {
    this.brand = brand
    this.year = year
    this.color = color
    this.price = price

    Object.defineProperty(this, 'id', {
      value: crypto.randomUUID(),
      enumerable: false,
    })
  }
}
