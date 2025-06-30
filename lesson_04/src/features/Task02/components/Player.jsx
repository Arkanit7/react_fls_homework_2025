import {useState} from 'react'
import Clickable from '@/components/Clickable'
import Field from '@/components/Field'
import clsx from 'clsx/lite'

function Player({
  isActive,
  position,
  isAllowedDigit,
  playDigit,
  guessedDigits,
}) {
  const [digit, setDigit] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const normalizedDigit = parseInt(digit)

    if (!isAllowedDigit(normalizedDigit)) return
    playDigit(normalizedDigit)
    setDigit('')
  }

  const classes = clsx(
    isActive && 'ring-2 ring-cyan-400',
    'p-3 space-y-2 rounded bg-black border border-cyan-900',
  )

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <h3 className="text-xl">Гравець {position}</h3>
      <p>
        <Field
          value={digit}
          onChange={(e) => setDigit(e.target.value)}
          className="w-full"
          type="number"
          disabled={!isActive}
          aria-label="Введіть цифру."
        />
      </p>
      <p>
        <Clickable
          variant="outline"
          type="submit"
          disabled={!isActive || !isAllowedDigit(parseInt(digit))}
          className="w-full"
        >
          Зробити хід
        </Clickable>
      </p>
      {guessedDigits.length !== 0 && (
        <>
          <p>Вгадані числа:</p>
          <ul className="flex flex-wrap gap-1">
            {guessedDigits.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </>
      )}
    </form>
  )
}

export default Player
