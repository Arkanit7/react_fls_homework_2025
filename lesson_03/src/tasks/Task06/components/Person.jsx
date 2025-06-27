import clsx from 'clsx/lite'

function Person({name, pickDancer, isActive, disabled}) {
  return (
    <li>
      <button
        onClick={pickDancer}
        className={clsx(
          disabled && 'pointer-events-none opacity-25',
          isActive && 'bg-cyan-300 text-black',
          'w-full rounded border border-cyan-900 px-1 py-0.5 text-start transition-[box-shadow] duration-300 hover:ring-2 hover:ring-cyan-400',
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
