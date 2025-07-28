import {createSlice} from '@reduxjs/toolkit'
import {fetchPosts} from './postsThunk'

const initialState = {
  isLoading: false,
  error: null,
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchPosts.rejected, (state, {payload}) => {
        state.isLoading = false
        state.error = payload
      })
      .addCase(fetchPosts.fulfilled, (state, {payload}) => {
        state.isLoading = false
        state.posts = payload
      })
  },
})

export const postsReducer = postsSlice.reducer
