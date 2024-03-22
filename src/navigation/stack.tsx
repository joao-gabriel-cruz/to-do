import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PurchaseList } from '../pages/purchase-list'
import { AppDispatch, RootState } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncList } from '../features/purchase-list/purchase-list-slice'
import { useEffect } from 'react'
import { Purchase } from '../pages/purchase'

export const Stack = createNativeStackNavigator()

export const StackNavigator = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { status } = useSelector((state: RootState) => state.purchaseListSlice)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getAsyncList())
    }
  }, [status])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="purchase-list" component={PurchaseList} />
      <Stack.Screen name="purchase" component={Purchase} />
    </Stack.Navigator>
  )
}
