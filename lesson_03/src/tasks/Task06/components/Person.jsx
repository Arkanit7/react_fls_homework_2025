import clsx from 'clsx/lite'

function Person({name, pickDancer, isActive, disabled}) {
  return (
    <li>
      <button
        onClick={pickDancer}
        className={clsx(
          disabled && 'pointer-events-none opacity-25',
          isActive && 'bg-white text-black',
          'px-1 py-0.5 rounded border w-full text-start hover:bg-white/25 transition-colors',
        )}
        type="button"
        disabled={disabled}
      >
        {name}
      </button>
    </li>
  )
}

export default Person
