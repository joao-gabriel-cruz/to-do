import { Text, View } from 'react-native'
import { useAppSelector } from '../../hooks/redux'
import {
  BoxForm,
  BoxInput,
  Button,
  Container,
  ContainerForm,
  ContainerList,
  List,
  TextEmpty,
  TextList,
  TextTotal,
  TextValue,
  Title,
} from './styled'
import { Input } from '../../components/Input'
import { AntDesign } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { PurchaseListService } from './services/purchase-list.service'
import { useState } from 'react'

export const PurchaseList = () => {
  const { list } = useAppSelector((state) => state.purchaseListSlice)
  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  const { saveNewList } = PurchaseListService({ dispatch })

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
              saveNewList(title)
              setTitle('')
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
          </Button>
        </BoxForm>
      </ContainerForm>
      <List
        data={list}
        renderItem={({ item }) => (
          <ContainerList>
            <TextList>{item.title}</TextList>
            <TextTotal>
              Total: R$ <TextValue>{item.total}</TextValue>
            </TextTotal>
          </ContainerList>
        )}
        keyExtractor={(item) => item.date}
        ListEmptyComponent={<TextEmpty>Não há itens na lista</TextEmpty>}
      />
    </Container>
  )
}
