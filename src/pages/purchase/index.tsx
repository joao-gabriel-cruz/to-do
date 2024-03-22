import { Text, View } from 'react-native'
import {
  Container,
  ContainerForm,
  DropdownContainer,
  ListProduct,
  TextEmpty,
  Title,
} from './styled'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Input } from '../../components/Input'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'

export const Purchase = () => {
  const { purchase } = useSelector((state: RootState) => state.purchaseSlice)
  const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <Container>
      <Title>{purchase.title}</Title>
      <ContainerForm>
        <Input label="Nome do produto" />
        <Input keyboardType="numeric" label="Quantidade" />
        <DropdownContainer
          style={{ width: '100%', height: 40 }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {}}
        >
          <Picker.Item label="Selecione uma categoria" value="0" />
          <Picker.Item label="Alimento" value="1" />
          <Picker.Item label="Higiene" value="2" />
          <Picker.Item label="Limpeza" value="3" />
        </DropdownContainer>
      </ContainerForm>
      <ListProduct
        data={purchase.products}
        keyExtractor={(item) => item.name + item.quantity}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<TextEmpty>Nenhum produto adicionado</TextEmpty>}
      />
    </Container>
  )
}
