import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { PurchaseList } from './src/pages/purchase-list'
import { store } from './src/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import { themeDark } from './src/style/styled'
import { useEffect } from 'react'
import { getAsyncList } from './src/features/purchase-list/purchase-list-slice'

export default function App() {
  useEffect(() => {
    store.dispatch(getAsyncList)
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeDark}>
        <StatusBar style="light" />
        <PurchaseList />
      </ThemeProvider>
    </Provider>
  )
}
