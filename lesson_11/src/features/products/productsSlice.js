import {createSlice} from '@reduxjs/toolkit'
import {productsList} from './constants'

const initialState = {
  productsList,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, {payload}) {
      state.productsList.push({...payload, id: crypto.randomUUID()})
    },
    removeProduct(state, {payload}) {
      const productIndex = state.productsList.find(
        (product) => product.id === payload.id,
      )

      if (productIndex === -1)
        throw new Error(`There's no such product with id "${payload.id}".`)

      state.productsList.splice(productIndex, 1)
    },
  },
})

export const {addProduct, removeProduct} = productsSlice.actions
export const productsReducer = productsSlice.reducer
