import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import {Outlet} from 'react-router'

function MainLayout() {
  return (
    <div className="wrap">
      <AppHeader />
      <main className="wrap__main">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
}

export default MainLayout
