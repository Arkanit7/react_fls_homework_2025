export default class Sportsman {
  static count = 0

  constructor({name, isChosen = false, id = Sportsman.count}) {
    this.name = name
    this.isChosen = isChosen
    this.id = id

    Sportsman.count++
  }
}
