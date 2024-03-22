import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Purchase } from '../../@types/purchase'
import { Action } from '../../@types'
import { AsyncStorageService } from '../../async-storage'


export interface ListPurchaseState {
  list: Purchase[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

const initialState: ListPurchaseState = {
  list: [],
  status: 'idle',
  error: null
}

export const purchaseListSlice = createSlice({
  name: 'listPurchase',
  initialState,
  reducers: {
    addPurchaseList: (state, action: Action<Purchase>) => {
      state.list.push(action.payload)
    },

    removePurchase: (state, action: Action<number>) => {
      const newList = state.list.slice(action.payload, 1)
      state.list = newList
    }
  },
  extraReducers(builder) {

    builder.addCase(getAsyncList.fulfilled, (state, action) => {
      state.list = action.payload
    })

    builder.addCase(getAsyncList.pending, (state) => {
      state.status = 'loading'
    })

    builder.addCase(getAsyncList.rejected, (state, action) => {
      console.log(action.error)
      state.error = action.error.message || 'Error'
    })

    builder.addCase(savePurchaseList.fulfilled, (state, action) => {
      console.log(action.payload);

      if (!action.payload) return
      state.list.push(action.payload)
    })


    builder.addCase(savePurchaseList.pending, (state) => {
      state.status = 'loading'
    })

    builder.addCase(savePurchaseList.rejected, (state, action) => {
      console.log(action.error)
      state.error = action.error.message || 'Error'
    })

    builder.addCase(removePurchaseList.fulfilled, (state, action) => {
      state.list = action.payload
    })

  }
})

export const getAsyncList = createAsyncThunk('purchaseList/getAsyncList', async () => {
  const { getItem } = AsyncStorageService()

  const data = await getItem('@todo:list')

  return data
})

export const savePurchaseList = createAsyncThunk('purchaseList/savePurchaseList', async (title: string) => {
  const { setItemWithReplace, getItem } = AsyncStorageService()

  if (!title) return

  const newList = {
    title,
    date: new Date().toISOString(),
    products: [],
    total: 0
  }

  await setItemWithReplace({
    collectionKey: '@todo:list',
    data: newList
  })

  return newList
})

export const removePurchaseList = createAsyncThunk('purchaseList/removePurchaseList', async (index: number) => {
  const { removeItem, getItem } = AsyncStorageService()
  const list = await getItem('@todo:list')

  list.splice(index, 1)

  await removeItem('@todo:list')
  await AsyncStorageService().setItem('@todo:list', list)
  return list
})





//(index: number) => async (dispatch: any, getState: any) => {

// }

export const { addPurchaseList } = purchaseListSlice.actions
export default purchaseListSlice.reducer