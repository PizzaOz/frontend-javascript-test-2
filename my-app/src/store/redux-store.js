import { configureStore } from '@reduxjs/toolkit'
import repoSlice from './users-reducer'

const store =  configureStore({
  reducer: {
    repos: repoSlice,
  },
})

export default store