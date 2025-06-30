export function mapPackagesToId(packages) {
  return packages.reduce((accumulator, item) => {
    accumulator[item.id] = item

    return accumulator
  }, {})
}

export function getUppercasePackages(packages) {
  return packages.map((p) => ({
    id: p.id,
    title: p.title.toUpperCase(),
    description: p.description.toUpperCase(),
  }))
}

export function filterPackages(searchTerm, packagesById, packagesUpperCase) {
  return packagesUpperCase.reduce((accumulator, item) => {
    if (
      item.title.includes(searchTerm) ||
      item.description.includes(searchTerm)
    )
      accumulator.push(packagesById[item.id])

    return accumulator
  }, [])
}
