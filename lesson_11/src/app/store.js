import {configureStore} from '@reduxjs/toolkit'
import {productsReducer} from '../pages/products/productsSlice'
import {postsReducer} from '../pages/posts/postsSlice'

export default configureStore({
  reducer: {
    products: productsReducer,
    posts: postsReducer,
  },
})
