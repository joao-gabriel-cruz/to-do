import { StatusBar } from 'expo-status-bar'
import { store } from './src/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import { themeDark } from './src/style/styled'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './src/navigation/stack'

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeDark}>
        <NavigationContainer>
          <StatusBar style="light" />
          <StackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  )
}
