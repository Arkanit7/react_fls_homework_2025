import {LIST_ID} from './settings'

/**
 * @param {import('@reduxjs/toolkit/query/react').EndpointBuilder} build
 * @param {string} singularEntityName
 * @param {string} tagType
 */
export default function (build, singularEntityName, tagType) {
  const capitalizedSingularEntityName =
    singularEntityName[0].toUpperCase() + singularEntityName.slice(1)

  return {
    [`get${capitalizedSingularEntityName}ById`]: build.query({
      query: (id) => `/${singularEntityName}s/${id}`,
      providesTags: (_, __, id) => [{type: tagType, id}],
    }),

    [`getPaginated${capitalizedSingularEntityName}s`]: build.query({
      query: ({page = 1, size = 10, name} = {}) => {
        const endUrl = `/${singularEntityName}s?page=${page}&size=${size}`

        return name == null || name === '' ? endUrl : endUrl + `&name=${name}`
      },

      /** @param {import('@/types').DoctorsPagination} result */
      providesTags: (result) => {
        const tags = result.items?.map(({id}) => ({type: tagType, id})) ?? []

        return [{type: tagType, id: LIST_ID}].concat(tags)
      },
    }),

    [`delete${capitalizedSingularEntityName}`]: build.mutation({
      query: (id) => ({
        url: `/${singularEntityName}s/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, id) => [
        {type: tagType, id},
        {type: tagType, id: LIST_ID},
      ],
    }),

    [`edit${capitalizedSingularEntityName}`]: build.mutation({
      query: ({id, body}) => ({
        url: `/${singularEntityName}s/${id}/`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_, __, {id}) => [{type: tagType, id}],
    }),

    [`create${capitalizedSingularEntityName}`]: build.mutation({
      query: (body) => ({
        url: `/${singularEntityName}s/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: () => [{type: tagType, id: LIST_ID}],
    }),
  }
}
