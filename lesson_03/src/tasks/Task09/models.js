export class Word {
  constructor({en, uk}) {
    this.en = en
    this.uk = uk
    this.id = crypto.randomUUID()
  }
}
