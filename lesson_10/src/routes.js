import Layout from '@/layout/Layout'
import Booking from '@/pages/Booking'
import Buses from '@/pages/Buses'
import Home from '@/pages/Home'
import Hotels from '@/pages/Hotels'
import NotFound from '@/pages/NotFound'
import {createBrowserRouter} from 'react-router'

/** @type {import('react-router').RouteObject[]} */
export const routes = [
  {
    Component: Layout,
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
      {Component: NotFound, path: '*'},
    ],
  },
]

export const router = createBrowserRouter(routes)
