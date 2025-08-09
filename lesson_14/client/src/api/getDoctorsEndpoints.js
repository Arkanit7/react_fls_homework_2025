import {LIST_ID, TAGS} from './settings'

/**
 * @param {import('@reduxjs/toolkit/query').EndpointBuilder<any, any, any>} build
 */
export default function (build) {
  return {
    getDoctorById: build.query({
      query: (id) => `admin/doctors/${id}`,
      providesTags: (_, __, id) => [{type: TAGS.DOCTOR, id}],
    }),

    getPaginatedDoctors: build.query({
      query: ({page = 1, size = 10, name} = {}) => {
        const endUrl = `admin/doctors?page=${page}&size=${size}`

        return name == null || name === '' ? endUrl : endUrl + `&name=${name}`
      },

      /** @param {import('@/types').DoctorsPagination} result */
      providesTags: (result) => {
        const tags =
          result.items?.map(({id}) => ({type: TAGS.DOCTOR, id})) ?? []

        return [{type: TAGS.DOCTOR, id: LIST_ID}].concat(tags)
      },
    }),

    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `admin/doctors/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, id) => [
        {type: TAGS.DOCTOR, id},
        {type: TAGS.DOCTOR, id: LIST_ID},
      ],
    }),

    editDoctor: build.mutation({
      query: ({id, body}) => ({
        url: `admin/doctors/${id}/`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_, __, {id}) => [{type: TAGS.DOCTOR, id}],
    }),

    createDoctor: build.mutation({
      query: (body) => ({
        url: 'admin/doctors/',
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [{type: TAGS.DOCTOR, id: LIST_ID}],
    }),
  }
}
