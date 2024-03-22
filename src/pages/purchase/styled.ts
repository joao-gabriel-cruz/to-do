import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Product } from "../../@types/purchase";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.gray[400]};
  padding: 0 20px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.lg}px;
  color: ${({ theme }) => theme.gray[100]};
  margin-top: 20px;
  margin-bottom: 20px;
`


export const ContainerForm = styled.View`
  width: 100%;
  padding: 35px 0;
  align-items: center;
  justify-content: center;
`

export const BoxAmount = styled.View`
  width: 100%;
  flex-direction: row;
`

export const ListProduct = styled(FlatList<Product>)`
 flex: 1;
`

export const TextEmpty = styled.Text`
  font-size: ${({ theme }) => theme.fonts.md}px;
  color: ${({ theme }) => theme.gray[100]};
  text-align: center;
`

export const DropdownContainer = styled(Picker)`
  width: 20%;
  height: 40px;
  background-color: aliceblue;
  background-color: ${({ theme }) => theme.gray[300]};
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.gray[100]};
  border: 1px solid ${({ theme }) => theme.gray[300]};
  padding: 0 10px;
`