import MainLayout from '../layouts/MainLayout'
import NotFoundPage from '../pages/NotFoundPage'
import Products from '../pages/ProductsPage'
import Posts from '../pages/PostsPage'

const routes = [
  {
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Products,
        handle: {
          isInNavBar: true,
          title: 'Products',
          absolutePath: '/',
        },
      },
      {
        path: 'posts',
        Component: Posts,
        handle: {
          isInNavBar: true,
          title: 'Posts',
          absolutePath: '/posts',
        },
      },
      {path: '*', Component: NotFoundPage},
    ],
  },
]

export default routes
