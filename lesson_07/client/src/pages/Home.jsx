import {ROUTES} from '@/routes/frontRoutes'
import {Link} from 'react-router'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__cnt cnt">
          <div className="hero__wrap">
            <div className="hero__block">
              <p className="hero__subtitle">T-shirt / Tops</p>
              <h1 className="hero__title">Summer Value Pack</h1>
              <p className="hero__subtitle">cool / colorful / comfy</p>
              <Link className="button" to={ROUTES.SHOP.INDEX}>
                Shop Now
              </Link>
            </div>
          </div>
          <img
            className="hero__ibg"
            src="/images/hero.webp"
            alt="A young woman shopping."
            loading="lazy"
          />
        </div>
      </section>
      <section className="prose">
        <h2>Big Saving Zone</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia totam
          neque quia vero. Laudantium sunt possimus perspiciatis assumenda,
          nesciunt itaque sed voluptatum perferendis! Nulla incidunt, porro odio
          itaque provident quos!
        </p>
        <ol>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ol>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </>
  )
}

export default Home
