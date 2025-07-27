import {useSelector} from 'react-redux'
import ProductCard from './ProductCard'
import {useDeferredValue, useMemo, useState} from 'react'
import {createFilterProductsListSelector} from '../utils'

function ProductsList() {
  const [productNameQuery, setProductNameQuery] = useState('')
  const deferredProductNameQuery = useDeferredValue(productNameQuery)

  //? Memoization is necessary in order to avoid recreating the selector in between renders
  const filterProductsListSelector = useMemo(
    () => createFilterProductsListSelector(deferredProductNameQuery),
    [deferredProductNameQuery],
  )
  const filteredProductList = useSelector(filterProductsListSelector)

  return (
    <>
      <div>
        <input
          value={productNameQuery}
          onChange={(e) => setProductNameQuery(e.currentTarget.value)}
          type="search"
          placeholder="search"
        />
      </div>
      <div>
        {filteredProductList.toReversed().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductsList
