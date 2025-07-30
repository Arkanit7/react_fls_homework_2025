import {POSTS_STATUS} from '@/lib/constants'
import {addPost, getPagePosts, removePost} from './postsThunk'

function getPagePostsReducer(builder) {
  return builder
    .addCase(getPagePosts.pending, (state) => {
      state.status = POSTS_STATUS.LOADING
    })
    .addCase(getPagePosts.rejected, (state) => {
      state.status = POSTS_STATUS.ERROR
    })
    .addCase(getPagePosts.fulfilled, (state, {payload}) => {
      state.status = POSTS_STATUS.IDLE
      state.totalPages = payload.pagination.totalPages
      state.totalPosts = payload.pagination.totalItems

      const shouldAppendPosts = state.loadedPagesNumbers.length > 1

      state.posts = shouldAppendPosts
        ? state.posts.concat(payload.items)
        : payload.items
    })
}

function removePostReducer(builder) {
  builder
    .addCase(removePost.pending, (state, {meta}) => {
      const postToRemove = state.posts.find((post) => post.id === meta.arg)
      postToRemove.isPending = true
    })
    .addCase(removePost.rejected, (state, {meta}) => {
      const postToRemove = state.posts.find((post) => post.id === meta.arg)
      postToRemove.isPending = false
    })
    .addCase(removePost.fulfilled, (state, {meta}) => {
      const removedPostIndex = state.posts.findIndex(
        (post) => post.id === meta.arg,
      )
      state.posts.splice(removedPostIndex, 1)
      state.totalPosts--

      // In case of an empty page, automatically switch to a first no-empty page
      const firstLoadedPage = state.loadedPagesNumbers[0]

      if (
        state.posts.length === 0 &&
        firstLoadedPage > 1 &&
        state.totalPages > 1
      )
        state.loadedPagesNumbers = [firstLoadedPage - 1]
    })
}

function addPostReducer(builder) {
  return builder
    .addCase(addPost.pending, (state, {meta}) => {
      const creationDate = new Date()
      const id = creationDate.getTime().toString()
      const createdAt = creationDate.toISOString()

      const optimisticPost = {
        id,
        createdAt,
        likesNumber: 0,
        dislikesNumber: 0,
        isOptimistic: true,
        ...meta.arg,
      }

      state.posts.push(optimisticPost)
    })
    .addCase(addPost.rejected, (state) => {
      const optimisticPostIndex = state.posts.findIndex(
        (post) => post.isOptimistic,
      )

      state.posts.splice(optimisticPostIndex, 1)
    })
    .addCase(addPost.fulfilled, (state, {payload}) => {
      const optimisticPostIndex = state.posts.findIndex(
        (post) => post.isOptimistic,
      )

      state.posts.splice(optimisticPostIndex, 1, payload)
      state.totalPosts++
    })
}

export {getPagePostsReducer, removePostReducer, addPostReducer}
