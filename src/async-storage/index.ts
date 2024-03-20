import AsyncStorage from '@react-native-async-storage/async-storage'

interface IAsyncStorageInterface {
  method: 'getItem' | 'setItem' | 'removeItem' | 'setItemWithReplace' | 'clear'
  collectionKey: '@todo:list'
  data?: any
}

type CollectionKey = '@todo:list'

interface SetItemWithReplaceProps {
  collectionKey: CollectionKey
  data: any
}

export const AsyncStorageService = () => {
  const setItemWithReplace = async (props: SetItemWithReplaceProps) => {
    const { collectionKey, data } = props

    let resultStorage = await AsyncStorage.getItem(collectionKey)

    resultStorage = resultStorage ? JSON.parse(resultStorage) : []

    let dataString = resultStorage
      ? JSON.stringify([data, ...resultStorage!])
      : JSON.stringify([data])

    await AsyncStorage.setItem(collectionKey, dataString!)
  }

  const getItem = async (collectionKey: CollectionKey) => {
    const result = await AsyncStorage.getItem(collectionKey)

    return JSON.parse(result || '[]')
  }

  const removeItem = async (collectionKey: CollectionKey) => {
    await AsyncStorage.removeItem(collectionKey)
  }

  const setItem = async (collectionKey: CollectionKey, data: any) => {
    await AsyncStorage.setItem(collectionKey, JSON.stringify(data))
  }

  const clear = async () => {
    await AsyncStorage.multiRemove([
      '@todo:list',
    ])
  }

  return {
    setItemWithReplace,
    getItem,
    removeItem,
    setItem,
    clear,
  }
}
