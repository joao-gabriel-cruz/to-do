import { Dispatch, UnknownAction } from "redux"
import { addPurchaseList } from "../../../features/purchase-list/purchase-list-slice"
import { AsyncStorageInterface } from "../../../async-storage"

interface PurchaseListServiceProps {
  dispatch: Dispatch<UnknownAction>
}

export const PurchaseListService = (props: PurchaseListServiceProps) => {
  const { dispatch } = props
  const saveNewList = async (title: string) => {

    if (!title) return

    const newList = {
      title,
      date: new Date().toISOString(),
      products: [],
      total: 0
    }

    dispatch(addPurchaseList(newList))

    await AsyncStorageInterface({
      method: 'setItemWithReplace',
      collectionKey: '@todo:list',
      data: newList
    })
  }
  return {
    saveNewList
  }
}