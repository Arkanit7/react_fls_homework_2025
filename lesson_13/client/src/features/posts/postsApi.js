import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {LIST_ID, POST_REACTION, POST_TAG} from './constants'

const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: [POST_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  endpoints: (build) => ({
    getPostById: build.query({
      query: (id) => `posts/${id}`,
      providesTags: (_, __, id) => [{type: POST_TAG, id}],
    }),
    listPosts: build.query({
      query: ({page = 1, limit = 10} = {}) =>
        `posts/?_page=${page}&_limit=${limit}`,
      providesTags: (result) => {
        const tags = result?.items?.map(({id}) => ({type: POST_TAG, id})) ?? []

        return [{type: POST_TAG, id: LIST_ID}].concat(tags)
      },
    }),
    // infiniteQueries
    getInfinitePosts: build.infiniteQuery({
      query: ({pageParam: {page = 1, limit = 10} = {}}) =>
        `posts/?_page=${page}&_limit=${limit}`,
      infiniteQueryOptions: {
        initialPageParam: {page: 1, limit: 3},
        getNextPageParam: (lastPage, _, {page, limit} = {}) => {
          // In case that we've reached the very last page – return undefined to signal the end of the "infinite" query
          if (page > lastPage.totalPages) return
          return {page: page + 1, limit}
        },
      },
      providesTags: (result) => {
        const tags =
          result?.pages.flatMap((page) =>
            page.items.map(({id}) => ({type: POST_TAG, id})),
          ) ?? []

        return [{type: POST_TAG, id: LIST_ID}].concat(tags)
      },
    }),
    // mutations
    reactToPostById: build.mutation({
      query: ({id, reaction}) => {
        const urlEnd = reaction === POST_REACTION.LIKE ? 'like' : 'dislike'
        return {
          url: `/posts/${id}/${urlEnd}`,
          method: 'POST',
        }
      },
      invalidatesTags: (_, __, {id}) => [{type: POST_TAG, id}],

      // TODO: implement optimistic updates
      // async onQueryStarted({id, reaction}, {dispatch, queryFulfilled}) {
      //   // Update single post
      //   const patchSingle = dispatch(
      //     postsApi.util.updateQueryData('getPostById', id, (draft) => {
      //       if (reaction === POST_REACTION.LIKE) draft.likesNumber++
      //       else draft.dislikesNumber++
      //     }),
      //   )
      //   try {
      //     await queryFulfilled
      //   } catch {
      //     patchSingle.undo()
      //   }
      // },
    }),
    deletePostById: build.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      // ? general tag will invalidate any tag with type POST_TAG:
      // * [POST_TAG]
      // * [{type: POST_TAG, id: 1}]
      // in order to avoid unnecessary "getPost" (individual post refetch)
      // general tag [POST_TAG] is replaced with the specific tag
      // it will refetch only bulk queries, such as listPosts and
      // getInfinitePosts
      invalidatesTags: (_, __, id) => [
        {type: POST_TAG, id},
        {type: POST_TAG, id: LIST_ID},
      ],
    }),
    createPost: build.mutation({
      query: (body) => ({
        url: 'posts/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: POST_TAG, id: LIST_ID}],
    }),
    editPost: build.mutation({
      query: ({id, body}) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body,
      }),
      // ? specific tag will invalidate only matching tags:
      // * [{type: POST_TAG, id: 1}]
      // ! not [{type: POST_TAG, id: 2}]
      // ! not [POST_TAG]
      invalidatesTags: (_, __, {id}) => [{type: POST_TAG, id}],
    }),
  }),
})

export {postsApi}
export const {
  useGetPostByIdQuery,
  useListPostsQuery,
  useGetInfinitePostsInfiniteQuery,
  useReactToPostByIdMutation,
  useDeletePostByIdMutation,
  useCreatePostMutation,
  useEditPostMutation,
} = postsApi
