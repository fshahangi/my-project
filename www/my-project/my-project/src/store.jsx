import { configureStore } from '@reduxjs/toolkit'
import NumberSlice from './components/NumberSlice'
import ProductSlice from './components/ProductSlice'

export default configureStore({
  reducer: {
    counter: NumberSlice,
    allproducts: ProductSlice
  }
})