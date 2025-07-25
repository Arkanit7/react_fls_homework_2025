import {Link} from 'react-router'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2, // Optional: ensures at least two decimal places
})

function Card({name, imageUrl, price, url}) {
  return (
    <article className="card">
      <Link to={url} className="card__link">
        <div className="card__frame">
          <img className="card__img" src={imageUrl} loading="lazy" alt="" />
        </div>
        <header className="card__header">
          <h3 className="card__title">{name}</h3>
          <div className="card__price">{formatter.format(price)}</div>
        </header>
      </Link>
    </article>
  )
}

export default Card
