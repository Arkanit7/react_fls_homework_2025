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

export function getEntriesPluralName(pluralRule) {
  switch (pluralRule) {
    case 'one':
      return 'запис'
    case 'few':
      return 'записи'
    case 'many':
      return 'записів'
    default:
      throw new Error(`No plural rules for "${pluralRule}" for "запис".`)
  }
}
