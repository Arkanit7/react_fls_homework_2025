export function getRandomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1))
}

/**
 * @param {string} text
 * @param {number} maxLength
 * @param {string} overflow
 * @returns {string}
 */
export function clampText(text, maxLength, overflow = '...') {
  if (text.length < maxLength) return text

  return text.slice(0, maxLength - overflow.length) + overflow
}

/**
 *
 * @param {string} link
 * @param {string} delimiter
 * @returns {string}
 */
export function prettyPrintLink(link, delimiter = ' › ') {
  return link.replaceAll(/(?<!\/)\/(?!\/|$)/g, delimiter)
}

export function shuffleArray(list, inPlace = true) {
  const shuffledList = inPlace ? list : Array.from(list)

  for (let i = list.length - 1; i > 0; i--) {
    const j = getRandomInteger(0, i)
    ;[shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]
  }

  return shuffledList
}

export function capitalize(text) {
  return text
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

export function wait(timeoutMs) {
  return new Promise((resolve) => setTimeout(resolve, timeoutMs))
}

export function getInitials(fullName) {
  return fullName
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function getUniqueDigitsList(length) {
  if (length > 9) throw new RangeError('Max length is 9.')
  if (length < 1) throw new RangeError('Min length is 1.')

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const shuffled = shuffleArray(digits, false)

  return shuffled.slice(0, length)
}
