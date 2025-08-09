import MainLayout from '@/layouts/MainLayout'
import DashboardPage from '@/pages/DashboardPage'
import NotFoundPage from '@/pages/NotFoundPage'
import PatientDetailsPage from '@/pages/patients/PatientDetailsPage'
import PatientFormPage from '@/pages/patients/PatientFormPage'
import PatientsPage from '@/pages/patients/PatientsPage'
import {ROUTES} from './navigation'
import TypographyPage from '@/pages/TypographyPage'
import DoctorsPage from '@/pages/doctors/DoctorsPage'
import DoctorDetailsPage from '@/pages/doctors/DoctorDetailsPage'
import DoctorFormPage from '@/pages/doctors/DoctorFormPage'
import AppointmentsPage from '@/pages/appointments/AppointmentsPage'
import AppointmentDetailsPage from '@/pages/appointments/AppointmentDetailsPage'
import AppointmentFormPage from '@/pages/appointments/AppointmentFormPage'

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
          {Component: DoctorsPage, index: true, handle: {title: 'Лікарі'}},
          {
            Component: DoctorFormPage,
            path: ROUTES.DOCTORS.NEW,
          },
          {
            path: ROUTES.DOCTORS.DETAILS.INDEX,
            children: [
              {
                Component: DoctorDetailsPage,
                index: true,
              },
              {
                Component: DoctorFormPage,
                path: ROUTES.DOCTORS.DETAILS.EDIT,
              },
            ],
          },
        ],
      },
      {
        path: ROUTES.APPOINTMENTS.INDEX,
        children: [
          {
            Component: AppointmentsPage,
            index: true,
            handle: {title: 'Зустрічі'},
          },
          {
            Component: AppointmentFormPage,
            path: ROUTES.APPOINTMENTS.NEW,
          },
          {
            path: ROUTES.APPOINTMENTS.DETAILS.INDEX,
            children: [
              {
                Component: AppointmentDetailsPage,
                index: true,
              },
              {
                Component: AppointmentFormPage,
                path: ROUTES.APPOINTMENTS.DETAILS.EDIT,
              },
            ],
          },
        ],
      },
      {Component: TypographyPage, path: ROUTES.TYPOGRAPHY},
      {Component: NotFoundPage, path: '*'},
    ],
  },
]
