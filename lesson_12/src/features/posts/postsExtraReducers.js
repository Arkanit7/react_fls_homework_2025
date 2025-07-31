import {POSTS_STATUS} from '@/lib/constants'
import {addPost, getPagePosts, removePost} from './postsThunks'

function getPagePostsReducer(builder) {
  return builder
    .addCase(getPagePosts.pending, (state) => {
      state.status = POSTS_STATUS.LOADING
    })
    .addCase(getPagePosts.rejected, (state) => {
      state.status = POSTS_STATUS.ERROR
    })
    .addCase(getPagePosts.fulfilled, (state, {payload}) => {
      state.status = POSTS_STATUS.SUCCESS
      state.totalPages = payload.pagination.totalPages
      state.totalPosts = payload.pagination.totalItems

      const shouldAppendPosts = state.chosenPages.length > 1

      state.posts = shouldAppendPosts
        ? state.posts.concat(payload.items)
        : payload.items
    })
}

function removePostReducer(builder) {
  return builder
    .addCase(removePost.pending, (state, {meta}) => {
      const postToRemove = state.posts.find((post) => post.id === meta.arg)

      if (!postToRemove) return

      postToRemove.isPending = true
    })
    .addCase(removePost.rejected, (state, {meta}) => {
      const postToRemove = state.posts.find((post) => post.id === meta.arg)

      if (!postToRemove) return

      postToRemove.isPending = false
    })
    .addCase(removePost.fulfilled, (state, {meta}) => {
      const removedPostIndex = state.posts.findIndex(
        (post) => post.id === meta.arg,
      )
      if (removedPostIndex !== -1) state.posts.splice(removedPostIndex, 1)
      state.totalPosts--

      // In case of an empty page, automatically switch to a first no-empty page
      const firstChosenPage = state.chosenPages[0]

      if (
        state.posts.length === 0 &&
        firstChosenPage > 1 &&
        state.totalPages > 1
      )
        state.chosenPages = [firstChosenPage - 1]
    })
}

function addPostReducer(builder) {
  return builder
    .addCase(addPost.pending, (state) => {
      state.status = POSTS_STATUS.LOADING
    })
    .addCase(addPost.rejected, (state) => {
      state.status = POSTS_STATUS.ERROR
    })
    .addCase(addPost.fulfilled, (state) => {
      state.status = POSTS_STATUS.SUCCESS
      state.totalPosts++
    })
}

export {getPagePostsReducer, removePostReducer, addPostReducer}
