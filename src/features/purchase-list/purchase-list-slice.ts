import { createSlice } from '@reduxjs/toolkit'

import { Sale } from '../../@types/sale'
import { Action } from '../../@types'
import { AsyncStorageService } from '../../async-storage'


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

    initialList: (state, action: Action<Sale[]>) => {
      state.list = action.payload
    }
  }
})

export const getAsyncList = async (dispatch: any, getState: any) => {
  const { getItem } = AsyncStorageService()
  const data = await getItem('@todo:list')

  dispatch(listSaleSlice.actions.initialList(data))
}

export const { addPurchaseList } = listSaleSlice.actions
export default listSaleSlice.reducer