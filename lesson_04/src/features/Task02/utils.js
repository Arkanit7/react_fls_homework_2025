export function initPlayerGuessedDigits(totalPlayers) {
  const playerGuessedDigits = {}

  for (let i = 0; i < totalPlayers; i++) {
    playerGuessedDigits[i] = []
  }

  return playerGuessedDigits
}

export function getPreviousPlayerIndex(activePlayerIndex, totalPlayers) {
  const previousPlayerIndex = activePlayerIndex - 1

  if (previousPlayerIndex < 0) return totalPlayers - 1
  return previousPlayerIndex
}
