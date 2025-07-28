import {configureStore} from '@reduxjs/toolkit'
import {productsReducer} from '@/features/products/productsSlice'
import {postsReducer} from '@/features/posts/postsSlice'

export default configureStore({
  reducer: {
    products: productsReducer,
    posts: postsReducer,
  },
})
