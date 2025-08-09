import Header from '@/components/Header'
import {Outlet} from 'react-router'

function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-linear-100 from-accent/10 via-primary/10 to-secondary/10 font-primary font-[325] text-base-content/75">
      <Header />
      <main className="flex-auto py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
