import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getNavRoutesHandles(routes) {
  const handles = []

  for (const {handle, children} of routes) {
    if (handle?.isInNavBar) handles.push(handle)

    if (!children?.length) continue

    const childHandles = getNavRoutesHandles(children)
    handles.push(...childHandles)
  }

  return handles
}

export function calcTimePassed(timeMs) {
  const totalSeconds = Math.floor(timeMs / 1000)
  const minutes = Math.floor(totalSeconds / 60) % 60
  const hours = Math.floor(totalSeconds / 3600) % 24
  const days = Math.floor(totalSeconds / (3600 * 24))

  return {
    seconds: totalSeconds % 60,
    minutes,
    hours,
    days,
  }
}
