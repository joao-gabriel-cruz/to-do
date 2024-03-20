import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'

export interface InputProps extends TextInputProps {
  label: string
}

export const Input = (props: InputProps) => {
  const { label } = props

  return (
    <ContainerInput>
      <Label>{label}</Label>
      <InputStyle {...props} />
    </ContainerInput>
  )
}

const ContainerInput = styled.View`
  width: 100%;
`

const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sm}px;
  color: ${({ theme }) => theme.gray[100]};
`

const InputStyle = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.primary.main,
  placeholderTextColor: theme.gray[100],
}))`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray[300]};
  margin-top: 5px;
  margin-bottom: 10px;
`
