import {API, BASE_URL} from '@/api'
import DescProduct from '@/components/DescProduct'
import useFetch from '@/hooks/useFetch'
import {useParams} from 'react-router'
import BenefitsProduct from '@/components/BenefitsProduct'

function Product() {
  const {id} = useParams()
  const {data: product, error, isLoading} = useFetch(API.getProductById(id))

  if (isLoading)
    return (
      <div className="loading">
        <div className="spinner">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  if (error) return <p className="cnt">Error</p>
  if (!product) return <p className="cnt">Empty...</p>

  return (
    <>
      <section className="product">
        <div className="cnt">
          <div className="product__wrap">
            <div className="product__frame">
              <img
                className="product__img"
                src={BASE_URL + product.imageUrl}
                alt=""
              />
            </div>
            <div className="product__col">
              <DescProduct product={product} />

              <BenefitsProduct />
            </div>
          </div>
        </div>
      </section>
      <section className="prose">
        <h2>Product Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, et
          ad perferendis voluptas aliquam facilis magni tenetur nisi. Non
          ducimus fugit mollitia quae harum neque veniam, illum similique natus
          temporibus.
        </p>
        <p>
          <b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci.
          </b>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptatem expedita quos culpa maxime unde itaque blanditiis numquam
          ipsum est?
        </p>
      </section>
    </>
  )
}

export default Product
