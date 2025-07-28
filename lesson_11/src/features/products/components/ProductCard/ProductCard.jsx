import {Link} from 'react-router'
import styles from './ProductCard.module.scss'
import Reference from '@/components/Reference'

const PRODUCT_PLACEHOLDER = 'images/products/product_placeholder.webp'

const priceFormatter = Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})

function handleImageError(e) {
  const imgEl = e.currentTarget

  if (imgEl.dataset.fallback) return

  imgEl.src = PRODUCT_PLACEHOLDER
  imgEl.dataset.fallback = 'true'
}

function ProductCard({product}) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          <Reference to="#">{product.name}</Reference>
        </h2>
        <p className={styles.availability}>Available</p>
      </header>
      <p className={styles.price}>{priceFormatter.format(product.price)}</p>
      <Link className={styles.frame} to="#">
        <img
          className={styles.image}
          src={product.thumbnail}
          alt=""
          onError={handleImageError}
        />
      </Link>
    </article>
  )
}

export default ProductCard
