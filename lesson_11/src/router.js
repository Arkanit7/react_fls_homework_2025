import {createBrowserRouter} from 'react-router'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import Products from './pages/products/Products'
import Posts from './pages/posts/Posts'

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Products,
        handle: {
          isInNavBar: true,
          title: 'Products',
        },
      },
      {
        path: 'posts',
        Component: Posts,
        handle: {
          isInNavBar: true,
          title: 'Posts',
        },
      },
      {path: '*', Component: NotFoundPage},
    ],
  },
])

export default router
