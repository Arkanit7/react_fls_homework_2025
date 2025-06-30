export class NodePackage {
  static count = 0

  constructor({title, link, description}) {
    this.title = title
    this.link = link
    this.description = description
    this.id = NodePackage.count++
  }
}
