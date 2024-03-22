import { useState } from 'react'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'

export interface InputProps extends TextInputProps {
  label: string
  width?: string
}

export const Input = (props: InputProps) => {
  const { label } = props

  const [isFocused, setIsFocused] = useState(false)

  return (
    <ContainerInput>
      <Label isFocused={isFocused}>{label}</Label>
      <InputStyle
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </ContainerInput>
  )
}

interface InputStyleProps {
  isFocused: boolean
}

interface ContainerInputProps {
  width?: string
}

const ContainerInput = styled.View<ContainerInputProps>`
  width: ${({ width }) => width || '100%'};
`

const Label = styled.Text<InputStyleProps>`
  font-size: ${({ theme }) => theme.fonts.sm}px;
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.primary.main : theme.gray[100]};
`

const InputStyle = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.primary.main,
}))<InputStyleProps>`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray[300]};
  color: ${({ theme }) => theme.gray[100]};
  border: 1px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.primary.main : theme.gray[300]};
  margin-top: 5px;
  margin-bottom: 10px;
`
