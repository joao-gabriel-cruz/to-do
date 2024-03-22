import styled from "styled-components/native"

export const ContainerList = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.gray[400]};
  border: 1px solid ${({ theme }) => theme.gray[300]};
  border-radius: 6px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`

export const TextList = styled.Text`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.md}px;
  color: ${({ theme }) => theme.gray[100]};
`

export const TextTotal = styled.Text`
width:  100%;
  font-size: ${({ theme }) => theme.fonts.md}px;
  color: ${({ theme }) => theme.gray[200]};
`

export const TextValue = styled.Text`
  font-size: ${({ theme }) => theme.fonts.md}px;
  color: ${({ theme }) => theme.generic_colors.green};
`

export const BoxText = styled.View`
`

export const BoxButton = styled.View`
  flex-direction: row;
`;

type ButtonProps = {
  type: 'edit' | 'delete'
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props) => {
    if (props.type === 'edit') {
      return props.theme.generic_colors.yellow
    } else {
      return props.theme.generic_colors.red
    }
  }};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  margin-left: 2px;
  margin-right: 2px;
`;

