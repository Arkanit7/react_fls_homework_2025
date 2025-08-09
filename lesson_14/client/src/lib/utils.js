import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * @param {import('react-router').RouteObject[]} routes
 * @param {string} parentPath
 */
export function getRoutesWithTitles(routes, parentPath = '') {
  const result = []

  for (const route of routes) {
    let currentPath = parentPath

    if (route.path) currentPath += '/' + route.path

    if (route.handle?.title) {
      result.push({path: currentPath || '/', title: route.handle.title})
    }

    if (route.children) {
      result.push(...getRoutesWithTitles(route.children, currentPath))
    }
  }

  return result
}

export function formatDateForInput(date) {
  return date.toISOString().split('T')[0]
}
