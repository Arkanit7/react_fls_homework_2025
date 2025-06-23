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
