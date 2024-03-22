import { configureStore } from '@reduxjs/toolkit'
import purchaseListSlice from '../features/purchase-list/purchase-list-slice'
import purchaseSlice from '../features/purchase/purchase-slice'

export const store = configureStore({
  reducer: {
    purchaseListSlice,
    purchaseSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

