import {shuffleArray} from '@/utils'

export class GuessDigit {
  static DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  static getUniqueDigits(length) {
    const randomDigits = shuffleArray(GuessDigit.DIGITS, false).slice(0, length)

    return randomDigits.map((d) => new GuessDigit(d))
  }

  static getAllDigits() {
    return GuessDigit.DIGITS.map((d) => new GuessDigit(d))
  }

  constructor(value, isGuessed = false) {
    this.value = value
    this.isGuessed = isGuessed
  }
}
