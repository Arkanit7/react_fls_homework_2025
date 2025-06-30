export class Task {
  static count = 0

  constructor({title, shortTitle = title, description, component, id}) {
    this.title = title
    this.shortTitle = shortTitle
    this.description = description
    this.component = component
    this.id = id ?? Task.count++
  }
}
