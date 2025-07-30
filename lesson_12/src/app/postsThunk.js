import apiClient from '@/api/apiClient'
import initialPosts from '@/lib/initialPosts'
import {createAsyncThunk} from '@reduxjs/toolkit'

const postsApi = apiClient('posts', 500, initialPosts, 0.25)

const getPagePosts = createAsyncThunk(
  'posts/getPagePosts',
  async ({pageNumber, postsPerPage}, {rejectWithValue}) => {
    try {
      return await postsApi.getPaginated(pageNumber, postsPerPage)
    } catch ({message}) {
      return rejectWithValue(message)
    }
  },
)

const removePost = createAsyncThunk(
  'posts/removePost',
  async (postId, {rejectWithValue}) => {
    try {
      return await postsApi.delete(postId)
    } catch ({message}) {
      return rejectWithValue(message)
    }
  },
)

const addPost = createAsyncThunk(
  'posts/addPost',
  async (post, {rejectWithValue}) => {
    try {
      return await postsApi.create(post)
    } catch ({message}) {
      return rejectWithValue(message)
    }
  },
)

export {getPagePosts, removePost, addPost}
