import {createAsyncThunk} from '@reduxjs/toolkit'
import services from './services'

const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (limit, {rejectWithValue}) => {
    try {
      return await services.getAllPosts(limit)
    } catch ({message}) {
      return rejectWithValue(message)
    }
  },
)

export {fetchPosts}
