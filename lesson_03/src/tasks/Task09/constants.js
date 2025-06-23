import {Word} from './models'

export const WORDS = [
  new Word({en: 'mouse', uk: 'миша'}),
  new Word({en: 'cat', uk: 'кіт'}),
  new Word({en: 'dog', uk: 'собака'}),
  new Word({en: 'house', uk: 'дім'}),
  new Word({en: 'car', uk: 'автомобіль'}),
  new Word({en: 'tree', uk: 'дерево'}),
  new Word({en: 'book', uk: 'книга'}),
  new Word({en: 'sun', uk: 'сонце'}),
  new Word({en: 'water', uk: 'вода'}),
  new Word({en: 'apple', uk: 'яблуко'}),
]

export const FEEDBACK_TYPES = {
  ERROR: 'error',
  CORRECT: 'correct',
}

export const FEEDBACK_DURATION_MS = 2e3
