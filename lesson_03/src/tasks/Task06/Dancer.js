class Dancer {
  static count = 0

  constructor(name, id = Dancer.count) {
    this.name = name
    this.id = id

    Dancer.count++
  }
}

export default Dancer
