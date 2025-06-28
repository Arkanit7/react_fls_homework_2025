export default class Letter {
  constructor({author, message}) {
    this.author = author
    this.message = message
    this.likes = 0
    this.dislikes = 0
    this.time = Date.now()
    this.id = crypto.randomUUID()
  }
}
