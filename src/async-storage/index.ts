import AsyncStorage from '@react-native-async-storage/async-storage'

interface IAsyncStorageInterface {
  method: 'getItem' | 'setItem' | 'removeItem' | 'setItemWithReplace' | 'clear'
  collectionKey: '@todo:list'
  data?: any
}

const AsyncStorageService = async ({ }: IAsyncStorageInterface) => {
  const setItemWithReplace = () => { }
}

export const AsyncStorageInterface = async ({
  method,
  collectionKey,
  data,
}: IAsyncStorageInterface) => {
  try {
    switch (method) {
      case 'setItemWithReplace':
        let resultStorage = await AsyncStorage.getItem(collectionKey)

        resultStorage = resultStorage ? JSON.parse(resultStorage) : []

        let dataString = resultStorage
          ? JSON.stringify([data, ...resultStorage!])
          : JSON.stringify([data])

        await AsyncStorage.setItem(collectionKey, dataString!)
        break
      case 'getItem':

        const result = await AsyncStorage.getItem(collectionKey)

        return JSON.parse(result || '[]')
      case 'removeItem':

        await AsyncStorage.removeItem(collectionKey)
        break
      case 'setItem':

        await AsyncStorage.setItem(collectionKey, JSON.stringify(data))
        break
      case 'clear':

        await AsyncStorage.multiRemove([
          '@todo:list',
        ])
    }
  } catch (error) {
    throw error
  }
}