import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {Outlet} from 'react-router'

function PrimaryLayout() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip">
      <Header />
      <main className="flex-auto py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PrimaryLayout
