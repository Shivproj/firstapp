import { configureStore } from '@reduxjs/toolkit'
import detailsSlice from '../09122022/details'

export default configureStore({
  reducer: {
    details:detailsSlice,
  },
})