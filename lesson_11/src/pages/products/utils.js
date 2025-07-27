import {createSelector} from '@reduxjs/toolkit'

/**
 * Must be memoized with the useMemo hook
 * @param {string} nameQuery
 */
export function createFilterProductsListSelector(nameQuery) {
  return createSelector(
    [(state) => state.products.productsList],
    (productsList) => {
      const normalizedNameQuery = nameQuery.trim().toUpperCase()

      if (normalizedNameQuery === '') return [...productsList]

      return productsList.filter((product) =>
        product.name.toUpperCase().includes(normalizedNameQuery),
      )
    },
  )
}
