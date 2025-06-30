import clsx from 'clsx/lite'
import {useWindowSize} from '../hooks'
import {getDeviceIconAndText} from '../utils'

const baseClasses =
  '[--color-lines:var(--color-neutral-700)] bg-[image:repeating-linear-gradient(45deg,_var(--color-lines)_0_1px,_transparent_1px_50%)] bg-[size:10px_10px] border border-[var(--color-lines)] absolute text-5xl 2xs:text-6xl xs:text-7xl font-extralight 2xs:font-thin text-cyan-400'

function WindowMetrics() {
  const windowSize = useWindowSize()
  const {icon: Icon, text} = getDeviceIconAndText(windowSize.width)

  return (
    <div className="pointer-events-none fixed inset-0 z-1000">
      <div className={clsx(baseClasses, 'bottom-0 w-full pr-[1lh]')}>
        {windowSize.width}px
      </div>

      <div
        className={clsx(
          baseClasses,
          'right-0 h-full pb-[1lh] writing-vertical-rl',
        )}
      >
        <div className="rotate-180">{windowSize.height}px</div>
      </div>

      <div className="absolute top-1/2 left-1/2 grid -translate-1/2 justify-items-center text-cyan-400 drop-shadow-xl drop-shadow-cyan-400">
        <Icon className="size-20 stroke-1 xs:size-30 sm:size-40" />
        <div className="text-center text-4xl font-extralight 2xs:text-5xl 2xs:font-thin xs:text-6xl">
          {text}
        </div>
      </div>
    </div>
  )
}

export default WindowMetrics
