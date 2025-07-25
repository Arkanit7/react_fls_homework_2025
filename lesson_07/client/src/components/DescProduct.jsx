import {ShoppingCart} from 'lucide-react'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2, // Optional: ensures at least two decimal places
})

function DescProduct({product}) {
  return (
    <div className="desc-product">
      <h1 className="desc-product__title">{product.name}</h1>
      <div className="desc-product__action">
        <button className="button button--accent">
          <ShoppingCart className="icon" /> Add to cart
        </button>
        <div className="desc-product__price">
          {formatter.format(product.price)}
        </div>
      </div>
    </div>
  )
}

export default DescProduct
