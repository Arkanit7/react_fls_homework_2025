import {LIST_ID, TAGS} from './settings'

/**
 * @param {import('@reduxjs/toolkit/query').EndpointBuilder<any, any, any>} build
 */
export default function (build) {
  return {
    getPatientById: build.query({
      query: (id) => `/patients/${id}`,
      providesTags: (_, __, id) => [{type: TAGS.PATIENT, id}],
    }),

    getAllPatients: build.query({
      query: () => '/patients?all=true',

      /** @param {import('@/types').Patient[]} result */
      providesTags: (result) =>
        result.map(({id}) => ({type: TAGS.PATIENT, id})),
    }),

    getPaginatedPatients: build.query({
      query: ({page = 1, size = 10, all, name} = {}) => {
        let endUrl = `/patients?page=${page}&size=${size}`

        if (name != null) endUrl += `&name=${name}`
        if (all != null) endUrl += `&all=${all}`

        return endUrl
      },

      /** @param {import('@/types').PatientsPagination} result */
      providesTags: (result) => {
        const tags =
          result.items?.map(({id}) => ({type: TAGS.PATIENT, id})) ?? []

        return [{type: TAGS.PATIENT, id: LIST_ID}].concat(tags)
      },
    }),

    deletePatient: build.mutation({
      query: (id) => ({
        url: `/patients/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, id) => [
        {type: TAGS.PATIENT, id},
        {type: TAGS.PATIENT, id: LIST_ID},
      ],
    }),

    editPatient: build.mutation({
      query: ({id, body}) => ({
        url: `/patients/${id}/`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_, __, {id}) => [{type: TAGS.PATIENT, id}],
    }),

    createPatient: build.mutation({
      query: (body) => ({
        url: '/patients/',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [{type: TAGS.PATIENT, id: LIST_ID}],
    }),
  }
}
