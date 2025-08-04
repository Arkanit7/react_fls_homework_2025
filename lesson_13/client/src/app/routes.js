import MainLayout from '@/layouts/MainLayout'
import ContactsPage from '@/pages/ContactsPage'
import HomePage from '@/pages/HomePage'
import InfiniteScrollingPage from '@/pages/InfiniteScrollingPage'
import NotFoundPage from '@/pages/NotFoundPage'
import PaginationPage from '@/pages/PaginationPage'
import PostAdjustPage from '@/pages/PostAdjustPage'

/** @type {import('react-router').RouteObject[]} */
const routes = [
  {
    Component: MainLayout,
    children: [
      {
        Component: HomePage,
        index: true,
        handle: {
          isInNavBar: true,
          absolutePath: '/',
          title: 'Головна',
        },
      },
      {
        Component: PaginationPage,
        path: 'pagination',
        handle: {
          isInNavBar: true,
          absolutePath: '/pagination',
          title: 'Пагінація',
        },
      },
      {
        Component: InfiniteScrollingPage,
        path: 'infinite',
        handle: {
          isInNavBar: true,
          absolutePath: '/infinite',
          title: 'Нескінченна прокрутка',
        },
      },
      {
        Component: PostAdjustPage,
        path: 'posts/:id?',
        handle: {
          absolutePath: '/posts',
        },
      },
      {
        Component: ContactsPage,
        path: 'contacts',
        handle: {
          isInNavBar: true,
          absolutePath: '/contacts',
          title: 'Контакти',
        },
      },
      {
        Component: NotFoundPage,
        path: '*',
      },
    ],
  },
]

export default routes
