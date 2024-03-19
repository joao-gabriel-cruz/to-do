import { createSlice } from '@reduxjs/toolkit'

import { Sale } from '../../@types/sale'
import { Action } from '../../@types'
import { AsyncStorageInterface } from '../../async-storage'


export interface ListSaleState {
  list: Sale[]
}

const initialState: ListSaleState = {
  list: []
}

export const listSaleSlice = createSlice({
  name: 'listSale',
  initialState,
  reducers: {
    addPurchaseList: (state, action: Action<Sale>) => {
      state.list.push(action.payload)
    },
  }
})

export const getAsyncList = async () => {
  const data = await AsyncStorageInterface({
    method: 'getItem',
    collectionKey: '@todo:list'
  })
}

export const { addPurchaseList } = listSaleSlice.actions
export default listSaleSlice.reducer