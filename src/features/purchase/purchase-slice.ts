import { createSlice } from "@reduxjs/toolkit"
import { Purchase } from "../../@types/purchase"

export type InitialState = {
  purchase: Purchase
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: InitialState = {
  purchase: {
    products: [],
    total: 0,
    date: '',
    title: '',
  },
  status: 'idle',
  error: null
}

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    selectPurchase: (state, action) => {
      state.purchase = action.payload
    }
  },
  extraReducers(builder) {

  }
})

export const { selectPurchase } = purchaseSlice.actions
export default purchaseSlice.reducer
