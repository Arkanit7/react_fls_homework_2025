import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {Outlet} from 'react-router'

function MainLayout() {
  return (
    <>
      <div className="wrap">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>

      <style jsx>{`
        .wrap {
          display: flex;
          flex-direction: column;
          min-block-size: 100dvh;
        }

        .main {
          flex: auto;
          padding-block-start: 2rem;
        }
      `}</style>
    </>
  )
}

export default MainLayout
