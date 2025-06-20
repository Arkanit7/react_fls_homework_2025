class TranslateItem {
  constructor(original, translateList, imgSrc) {
    this.word = original
    this.translateList = translateList
    this.imgSrc = imgSrc
  }
}

export const STATUS = {
  IDLE: 'idle',
  SUCCESS: 'success',
  ERROR: 'error',
  FINISH: 'finish',
}

export const translateList = [
  new TranslateItem('a cat', ['кіт'], '/translate/cat.webp'),
  new TranslateItem('a dog', ['пес', 'собака'], '/translate/dog.webp'),
  new TranslateItem('a flower', ['квітка'], '/translate/flower.webp'),
  new TranslateItem('a bottle', ['пляшка'], '/translate/bottle.webp'),
  new TranslateItem('the moon', ['місяць'], '/translate/moon.webp'),
  new TranslateItem('woods', ['ліс'], '/translate/woods.webp'),
  new TranslateItem('a river', ['річка'], '/translate/river.webp'),
]
