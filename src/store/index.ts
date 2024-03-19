import { configureStore } from '@reduxjs/toolkit'
import purchaseListSlice from '../features/purchase-list/purchase-list-slice'

export const store = configureStore({
  reducer: {
    purchaseListSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
