import {ROUTES} from '@/routes/frontRoutes'
import {Link} from 'react-router'

function NotFound() {
  return (
    <section className="not-found">
      <div className="cnt">
        <div className="not-found__wrap">
          <img src="/images/404.webp" alt="404" />
          <div className="not-found__block">
            <h1 className="not-found__title">Oops! Page not found</h1>
            <p className="not-found__desc">
              The page you are looking for might have been removed or
              temporarily unavailable.
            </p>
            <Link
              className="not-found__button button button--accent"
              to={ROUTES.HOME}
            >
              Back to HomePage
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
