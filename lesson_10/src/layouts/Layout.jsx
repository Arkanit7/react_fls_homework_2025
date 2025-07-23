import {Outlet} from 'react-router'
import Header from '@/components/Header'
import {ThemeProvider} from '@/contexts/ThemeContext'
import {BusesProvider} from '@/contexts/BusesContext'
import {HotelsProvider} from '@/contexts/HotelsContext'

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
