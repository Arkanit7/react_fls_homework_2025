import {Outlet} from 'react-router'
import styles from './MainLayout.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function MainLayout() {
  return (
    <div className={styles.wrap}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
