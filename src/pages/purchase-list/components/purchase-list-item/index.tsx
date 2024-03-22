import { useDispatch } from 'react-redux'
import { Purchase } from '../../../../@types/purchase'
import {
  BoxButton,
  BoxText,
  Button,
  ContainerList,
  TextList,
  TextTotal,
  TextValue,
} from './styled'
import { Feather } from '@expo/vector-icons'
import { AppDispatch } from '../../../../store'
import { removePurchaseList } from '../../../../features/purchase-list/purchase-list-slice'
import { Octicons } from '@expo/vector-icons'
import { selectPurchase } from '../../../../features/purchase/purchase-slice'
import { Link, useNavigation } from '@react-navigation/native'
import { NavigationStackProps } from '../../../../@types/navigation'

export interface PurchaseListItemProps extends NavigationStackProps {
  item: Purchase
  index: number
}

export const PurchaseListItem = (props: PurchaseListItemProps) => {
  const { item, index, navigation } = props
  const dispatch = useDispatch<AppDispatch>()

  const { navigate } = useNavigation()

  return (
    <ContainerList
      onPress={() => {
        dispatch(selectPurchase(item))
        navigation.navigate('purchase')
      }}
    >
      <BoxText>
        <TextList>{item.title}</TextList>
        <TextTotal>
          Total: R$ <TextValue>{item.total}</TextValue>
        </TextTotal>
      </BoxText>
      <BoxButton>
        <Button
          type="edit"
          onPress={() => {
            dispatch(removePurchaseList(index))
          }}
        >
          <Octicons name="paintbrush" size={24} color="white" />
        </Button>
        <Button
          type="delete"
          onPress={() => {
            dispatch(removePurchaseList(index))
          }}
        >
          <Feather name="trash" size={24} color="white" />
        </Button>
      </BoxButton>
    </ContainerList>
  )
}
