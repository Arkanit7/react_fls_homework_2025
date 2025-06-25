import clsx from 'clsx/lite'

function Person({name, pickDancer, isActive, disabled}) {
  return (
    <li>
      <button
        onClick={pickDancer}
        className={clsx(
          disabled && 'pointer-events-none opacity-25',
          isActive && 'bg-cyan-300 text-black',
          'px-1 py-0.5 rounded border border-cyan-900 w-full text-start hover:ring-2 hover:ring-cyan-400 transition-[box-shadow] duration-300',
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
