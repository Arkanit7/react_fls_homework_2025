import {Link} from 'react-router'
import NavBar from './NavBar'
import {Heart, Search, ShoppingCart, UserRound} from 'lucide-react'
import {ROUTES} from '@/routes/frontRoutes'

function AppHeader() {
  return (
    <header className="header">
      <div className="cnt">
        <div className="header__wrap">
          <Link to={ROUTES.HOME} className="header__logo">
            <img src="/images/logo.svg" alt="Euphoria – keep it classy." />
          </Link>

          <div className="header__navbar">
            <NavBar />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="header__search search-header"
          >
            <input
              className="search-header__input"
              type="search"
              name="search"
              placeholder="Search"
              disabled
            />
          </form>

          <div className="header__actions actions-header">
            <div className="actions-header__action actions-header__action--search">
              <button className="icon-button" type="button">
                <Search className="icon" />
              </button>
            </div>

            <div className="actions-header__action">
              <button className="icon-button" type="button">
                <span className="sr-only">Favorites</span>
                <Heart className="icon" />
              </button>
            </div>

            <div className="actions-header__action">
              <button className="icon-button" type="button">
                <span className="sr-only">Account</span>
                <UserRound className="icon" />
              </button>
            </div>

            <div className="actions-header__action">
              <button className="icon-button" type="button">
                <span className="sr-only">Cart</span>
                <ShoppingCart className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
