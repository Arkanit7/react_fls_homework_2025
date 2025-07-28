import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router'
import store from './store'
import routes from './routes'

const router = createBrowserRouter(routes)

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
