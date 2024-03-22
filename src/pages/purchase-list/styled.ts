import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Purchase } from "../../@types/purchase";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.gray[400]};
  padding: 0 20px;
`

export const ContainerForm = styled.View`
  width: 100%;
  padding: 35px 0;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.lg}px;
  font-weight: bold;
  color: ${({ theme }) => theme.gray[100]};
  margin: 20px 0;
`

export const BoxInput = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primary.main};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: ${RFValue(10)}px;
`
export const BoxForm = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const List = styled(FlatList<Purchase>)`
  width: 100%;
  flex: 1;
`

export const TextEmpty = styled.Text`
  font-size: ${({ theme }) => theme.fonts.md}px;
  color: ${({ theme }) => theme.gray[100]};
  text-align: center;
`
