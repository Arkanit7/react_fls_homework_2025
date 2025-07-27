function ProductCard({product}) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt="" />
    </div>
  )
}

export default ProductCard
