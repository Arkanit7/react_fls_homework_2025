import {createBrowserRouter, RouterProvider} from 'react-router'
import routes from './app/routes'
import store from './app/store'
import {Provider} from 'react-redux'
import {Toaster} from 'sonner'

const router = createBrowserRouter(routes)

function App() {
  return (
    <Provider store={store}>
      <Toaster
        position="top-right"
        offset={{top: '4rem', right: '0.75rem'}}
        theme="dark"
      />
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
