import {API, BASE_URL} from '@/api'
import {ROUTES} from '@/routes/frontRoutes'
import useFetch from '@/hooks/useFetch'
import Card from '@/components/Card'

function Shop() {
  const {data: products, error, isLoading} = useFetch(API.productsList)

  if (isLoading)
    return (
      <div className="loading">
        <div className="spinner">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  if (error) return <p className="cnt">Error</p>
  if (!products) return <p className="cnt">Empty...</p>

  return (
    <>
      <section className="shop">
        <div className="cnt">
          <div className="shop__wrap">
            <h2 className="shop__header">Shop</h2>
            <div className="shop__list">
              {products.map((product) => (
                <Card
                  key={product.id}
                  url={`./${ROUTES.SHOP.getDetailedLink(product.id)}`}
                  {...product}
                  imageUrl={BASE_URL + product.imageUrl}
                ></Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="prose">
        <h2>Products Online in Ukraine</h2>
        <p>
          <b>Discover a Wide Range of Products at Euphoria</b>
        </p>
        <p>
          Looking for the best website for online shopping in Ukraine? Your
          search ends here! At Euphoria, you will find the latest and highest
          quality products for any need: from clothing and accessories to
          electronics, home goods, and much more.
        </p>
        <p>
          Our collection helps you stay on trend and choose only the best for
          yourself and your family.
        </p>
        <p>
          <b>
            Everything for Your Comfort and Style — All in One Place: Euphoria
          </b>
        </p>
        <p>
          Online shopping in Ukraine is becoming more and more popular because
          it is convenient, fast, and affordable. At Euphoria, you will find a
          wide selection of quality products at great prices to make your life
          more comfortable and vibrant.
        </p>
        <p>
          We offer only trusted products and modern service to make your
          shopping experience as pleasant as possible. Choose Euphoria — choose
          the best for yourself!
        </p>
      </section>
    </>
  )
}

export default Shop
