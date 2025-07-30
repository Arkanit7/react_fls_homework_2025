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
      if (typeof pageNumber !== 'number')
        throw new TypeError('PageNumber must be a number')
      if (pageNumber < 0)
        throw new RangeError("PageNumber can't be lesser than 0.")

      state.chosenPages = [pageNumber]
    },
    chooseMorePages(state, {payload: pageNumber}) {
      if (typeof pageNumber !== 'number')
        throw new TypeError('PageNumber must be a number')
      if (pageNumber < 0)
        throw new RangeError("PageNumber can't be lesser than 0.")

      state.chosenPages.push(pageNumber)
    },
    setPostsPerPage(state, {payload: amount}) {
      if (typeof amount !== 'number')
        throw new TypeError('Amount must be a number')
      if (amount < 1) throw new RangeError("Amount can't be lesser than 1.")

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
  setPostsPerPage,
  choosePageNumber,
  chooseMorePages,
} = postsSlice.actions
export const postsReducer = postsSlice.reducer
