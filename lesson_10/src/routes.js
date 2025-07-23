import Layout from '@/layouts/Layout'
import Booking from '@/pages/Booking'
import Buses from '@/pages/Buses'
import Home from '@/pages/Home'
import Hotels from '@/pages/Hotels'
import NotFoundPage from '@/pages/NotFoundPage'
import {createBrowserRouter} from 'react-router'
import ErrorPage from './pages/ErrorPage'

/** @type {import('react-router').RouteObject[]} */
export const routes = [
  {
    Component: Layout,
    children: [
      {
        ErrorBoundary: ErrorPage,
        children: [
          {
            Component: Home,
            index: true,
            handle: {
              isInNavBar: true,
              absolutePath: '/',
              title: 'Головна',
            },
          },
          {
            Component: Buses,
            path: 'buses',
            handle: {
              isInNavBar: true,
              absolutePath: '/buses',
              title: 'Автобуси',
            },
          },
          {
            Component: Hotels,
            path: 'hotels',
            handle: {
              isInNavBar: true,
              absolutePath: '/hotels',
              title: 'Готелі',
            },
          },
          {
            Component: Booking,
            path: 'booking',
            handle: {
              isInNavBar: true,
              absolutePath: '/booking',
              title: 'Бронювання',
            },
          },
          {Component: NotFoundPage, path: '*'},
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
