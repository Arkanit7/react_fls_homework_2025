import {LIST_ID, TAGS} from './settings'

/**
 * @param {import('@reduxjs/toolkit/query').EndpointBuilder<any, any, any>} build
 */
export default function (build) {
  return {
    getAppointmentById: build.query({
      query: (id) => `/appointments/${id}`,
      providesTags: (_, __, id) => [{type: TAGS.APPOINTMENT, id}],
    }),

    getAllAppointments: build.query({
      query: () => '/appointments?all=true',

      /** @param {import('@/types').Appointment[]} result */
      providesTags: (result) =>
        result.map(({id}) => ({type: TAGS.APPOINTMENT, id})),
    }),

    getPaginatedAppointments: build.query({
      query: ({page = 1, size = 10, name} = {}) => {
        const endUrl = `/appointments?page=${page}&size=${size}`

        return name == null || name === ''
          ? endUrl
          : endUrl + `&patientName=${name}`
      },

      /** @param {import('@/types').AppointmentsPagination} result */
      providesTags: (result) => {
        const tags =
          result.items?.map(({id}) => ({type: TAGS.APPOINTMENT, id})) ?? []

        return [{type: TAGS.APPOINTMENT, id: LIST_ID}].concat(tags)
      },
    }),

    deleteAppointment: build.mutation({
      query: (id) => ({
        url: `/appointments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, id) => [
        {type: TAGS.APPOINTMENT, id},
        {type: TAGS.APPOINTMENT, id: LIST_ID},
      ],
    }),

    editAppointment: build.mutation({
      query: ({id, body}) => ({
        url: `/appointments/${id}/`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_, __, {id}) => [{type: TAGS.APPOINTMENT, id}],
    }),

    createAppointment: build.mutation({
      query: (body) => ({
        url: '/appointments/',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [{type: TAGS.APPOINTMENT, id: LIST_ID}],
    }),
  }
}
