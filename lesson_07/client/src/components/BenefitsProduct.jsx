import {CreditCard, Repeat2, Shirt, Truck} from 'lucide-react'

function BenefitsProduct() {
  return (
    <ul className="benefits-product">
      <li className="benefits-product__item">
        <div className="benefits-product__circle">
          <CreditCard className="icon" />
        </div>
        <div className="benefits-product__title">Secure payment</div>
      </li>
      <li className="benefits-product__item">
        <div className="benefits-product__circle">
          <Shirt className="icon" />
        </div>
        <div className="benefits-product__title">Size & Fit</div>
      </li>
      <li className="benefits-product__item">
        <div className="benefits-product__circle">
          <Truck className="icon" />
        </div>
        <div className="benefits-product__title">Free shipping</div>
      </li>
      <li className="benefits-product__item">
        <div className="benefits-product__circle">
          <Repeat2 className="icon" />
        </div>
        <div className="benefits-product__title">Free Shipping & Returns</div>
      </li>
    </ul>
  )
}

export default BenefitsProduct
