import Container from '@/components/Container'
import ProductsList from '@/features/products/components/ProductsList'
import Typography from '@/components/Typography'
import NewProductDialog from '@/features/products/components/NewProductDialog'

function Products() {
  return (
    <Container className="flow-6">
      <Typography as="h1" variant="h1" className="text-center">
        Products
      </Typography>
      <NewProductDialog />
      <ProductsList />
    </Container>
  )
}

export default Products
