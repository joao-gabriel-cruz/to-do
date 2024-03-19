import 'styled-components/native';
import { themeDark } from './src/style/styled'

type CustomTheme = typeof themeDark;

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme { }
}