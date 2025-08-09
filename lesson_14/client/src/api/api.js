import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {TAGS} from './settings'
import getEntityEndpoints from './getEntityEndpoints'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: Object.values(TAGS),
  endpoints: (build) => ({
    ...getEntityEndpoints(build, 'patient', TAGS.PATIENT),
    ...getEntityEndpoints(build, 'doctor', TAGS.DOCTOR),
    ...getEntityEndpoints(build, 'appointment', TAGS.APPOINTMENT),
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
