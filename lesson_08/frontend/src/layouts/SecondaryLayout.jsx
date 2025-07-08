import {Outlet} from 'react-router'

function SecondaryLayout() {
  return (
    <div className="min-h-dvh overflow-x-clip">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default SecondaryLayout
