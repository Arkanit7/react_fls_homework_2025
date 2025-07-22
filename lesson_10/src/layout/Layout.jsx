import {Outlet} from 'react-router'
import Header from '@/components/Header'
import {ThemeProvider} from '@/context/ThemeContext'
import {BusesProvider} from '@/context/BusesContext'
import {HotelsProvider} from '@/context/HotelsContext'

function Layout() {
  return (
    <ThemeProvider>
      <BusesProvider>
        <HotelsProvider>
          <div className="min-h-dvh overflow-clip">
            <Header />
            <main className="pt-4 pb-10">
              <Outlet />
            </main>
          </div>
        </HotelsProvider>
      </BusesProvider>
    </ThemeProvider>
  )
}

export default Layout
