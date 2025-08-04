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
