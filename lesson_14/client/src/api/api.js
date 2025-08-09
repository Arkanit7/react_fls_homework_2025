import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {TAGS} from './settings'
import getDoctorsEndpoints from './getDoctorsEndpoints'
import getPatientsEndpoints from './getPatientsEndpoints'
import getAppointmentsEndpoints from './getAppointmentsEndpoints'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: Object.values(TAGS),
  endpoints: (build) => ({
    ...getPatientsEndpoints(build),
    ...getDoctorsEndpoints(build),
    ...getAppointmentsEndpoints(build),
  }),
})

export {api}
export const {
  // patients
  useGetPatientByIdQuery,
  useGetPaginatedPatientsQuery,
  useDeletePatientMutation,
  useEditPatientMutation,
  useCreatePatientMutation,

  // doctors
  useGetDoctorByIdQuery,
  useGetPaginatedDoctorsQuery,
  useDeleteDoctorMutation,
  useEditDoctorMutation,
  useCreateDoctorMutation,

  // appointments
  useGetAppointmentByIdQuery,
  useGetPaginatedAppointmentsQuery,
  useDeleteAppointmentMutation,
  useEditAppointmentMutation,
  useCreateAppointmentMutation,
} = api
