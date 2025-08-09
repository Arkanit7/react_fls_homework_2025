import MainLayout from '@/layouts/MainLayout'
import DashboardPage from '@/pages/DashboardPage'
import NotFoundPage from '@/pages/NotFoundPage'
import PatientDetailsPage from '@/pages/patients/PatientDetailsPage'
import PatientFormPage from '@/pages/patients/PatientFormPage'
import PatientsPage from '@/pages/patients/PatientsPage'
import {ROUTES} from './navigation'
import TypographyPage from '@/pages/TypographyPage'
// import DoctorsPage from '@/pages/doctors/DoctorsPage'

/** @type {import('react-router').RouteObject[]} */
export default [
  {
    Component: MainLayout,
    children: [
      {
        Component: DashboardPage,
        path: ROUTES.DASHBOARD,
        handle: {title: 'Головна'},
      },
      {
        path: ROUTES.PATIENTS.INDEX,
        children: [
          {Component: PatientsPage, index: true, handle: {title: 'Пацієнти'}},
          {
            Component: PatientFormPage,
            path: ROUTES.PATIENTS.NEW,
          },
          {
            path: ROUTES.PATIENTS.DETAILS.INDEX,
            children: [
              {
                Component: PatientDetailsPage,
                index: true,
              },
              {
                Component: PatientFormPage,
                path: ROUTES.PATIENTS.DETAILS.EDIT,
              },
            ],
          },
        ],
      },
      {
        path: ROUTES.DOCTORS.INDEX,
        children: [
          // {Component: DoctorsPage, index: true, handle: {title: 'Лікарі'}},
          // {
          //   Component: PatientFormPage,
          //   path: ROUTES.DOCTORS.NEW,
          // },
          // {
          //   path: ROUTES.DOCTORS.DETAILS.INDEX,
          //   children: [
          //     {
          //       Component: PatientDetailsPage,
          //       index: true,
          //     },
          //     {
          //       Component: PatientFormPage,
          //       path: ROUTES.DOCTORS.DETAILS.EDIT,
          //     },
          //   ],
          // },
        ],
      },
      {Component: TypographyPage, path: ROUTES.TYPOGRAPHY},
      {Component: NotFoundPage, path: '*'},
    ],
  },
]
