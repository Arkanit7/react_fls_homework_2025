import {useSelector} from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import {useDeferredValue, useMemo, useState} from 'react'
import {createFilterProductsListSelector} from '../../utils'
import styles from './ProductsList.module.scss'
import Field from '@/components/Field'

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
    <div className="flow-4">
      <div>
        <Field
          className={styles.search}
          value={productNameQuery}
          onChange={(e) => setProductNameQuery(e.currentTarget.value)}
          type="search"
          placeholder="Search products..."
        />
      </div>
      {filteredProductList.length === 0 ? (
        <p className={styles.empty}>Search came with no results...</p>
      ) : (
        <div className={styles.list}>
          {filteredProductList.toReversed().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsList
