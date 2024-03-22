import { Text, View } from 'react-native'
import { useAppSelector } from '../../hooks/redux'
import {
  BoxForm,
  BoxInput,
  Button,
  Container,
  ContainerForm,
  List,
  TextEmpty,
  Title,
} from './styled'
import { Input } from '../../components/Input'
import { AntDesign } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { PurchaseListService } from './services/purchase-list.service'
import { useState } from 'react'
import { PurchaseListItem } from './components/purchase-list-item'
import { AppDispatch } from '../../store'
import { savePurchaseList } from '../../features/purchase-list/purchase-list-slice'
import { NavigationStackProps } from '../../@types/navigation'

export const PurchaseList = ({ ...rest }: NavigationStackProps) => {
  const { list } = useAppSelector((state) => state.purchaseListSlice)
  const [title, setTitle] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const { saveNewList } = PurchaseListService({ dispatch })

  console.log(list)

  return (
    <Container>
      <ContainerForm>
        <Title>Listas de Compras</Title>
        <BoxForm>
          <BoxInput>
            <Input
              value={title}
              label="Nome"
              onChangeText={(text) => setTitle(text)}
            />
          </BoxInput>
          <Button
            onPress={() => {
              dispatch(savePurchaseList(title))
              setTitle('')
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
          </Button>
        </BoxForm>
      </ContainerForm>
      <List
        data={list}
        renderItem={({ item, index }) => (
          <PurchaseListItem {...rest} item={item} index={index} />
        )}
        keyExtractor={(item) => item.date}
        ListEmptyComponent={<TextEmpty>Não há itens na lista</TextEmpty>}
      />
    </Container>
  )
}
