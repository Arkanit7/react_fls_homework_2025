import {createSlice} from '@reduxjs/toolkit'
import {
  INITIAL_PAGE,
  INITIAL_POSTS_PER_PAGE,
  POSTS_STATUS,
} from '../../lib/constants'
import {
  addPostReducer,
  getPagePostsReducer,
  removePostReducer,
} from './postsExtraReducers'

const initialState = {
  posts: [],
  postsPerPage: INITIAL_POSTS_PER_PAGE,
  chosenPages: [INITIAL_PAGE],
  status: POSTS_STATUS.IDLE,
  totalPages: 0,
  totalPosts: 0,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    resetPostsState() {
      return initialState
    },
    choosePageNumber(state, {payload: pageNumber}) {
      state.chosenPages = [pageNumber]
    },
    chooseMorePages(state, {payload: pageNumber}) {
      state.chosenPages.push(pageNumber)
    },
    chosePostsPerPage(state, {payload: amount}) {
      state.postsPerPage = amount
    },
  },
  extraReducers(builder) {
    getPagePostsReducer(builder)
    removePostReducer(builder)
    addPostReducer(builder)
  },
})

export const {
  resetPostsState,
  chosePostsPerPage,
  choosePageNumber,
  chooseMorePages,
} = postsSlice.actions
export const postsReducer = postsSlice.reducer
