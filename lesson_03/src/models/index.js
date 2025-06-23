export class Task {
  static count = 0

  constructor({title, description, component, id}) {
    this.title = title
    this.description = description
    this.component = component
    this.id = id ?? Task.count

    Task.count++
  }
}
