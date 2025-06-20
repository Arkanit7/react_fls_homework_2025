class TranslateItem {
  constructor(original, TranslateList, imgSrc) {
    this.original = original
    this.TranslateList = TranslateList
    this.imgSrc = imgSrc
  }
}

export const STATUS = {
  IDLE: 'idle',
  SUCCESS: 'success',
  ERROR: 'error',
}

export const translateList = [
  new TranslateItem('a cat', ['кіт'], '/translate/cat.webp'),
  new TranslateItem('a dog', ['пес', 'собака'], '/translate/dog.webp'),
  new TranslateItem('a flower', ['квітка'], '/translate/flower.webp'),
  new TranslateItem('a bottle', ['пляшка'], '/translate/bottle.webp'),
]
