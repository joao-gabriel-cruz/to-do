import { RFValue } from "react-native-responsive-fontsize"

export const themeLight = {
  primary: '#000',
  secondary: '#fff',
  background: '#fff',
  text: '#000',
  border: '#000',
  shadow: 'rgba(0, 0, 0, 0.1)',
  hover: '#f2f2f2',
  active: '#e6e6e6',
  error: '#ff4d4f',
  success: '#52c41a',
  warning: '#faad14',
  info: '#1890ff',
}

export const themeDark = {
  primary: {
    main: '#7450AC',
    light: '#A881E6',
    dark: '#523480',
  },
  gray: {
    100: '#FBF9FE',
    200: '#AFABB6',
    300: '#252529',
    400: '#17171A',
    500: '#111112',
    600: '#0C0C0D'
  },
  feedback: {
    success_light: '#4E995E',
    success: '#2F723D'
  },
  generic_colors: {
    pink: '#DB5BBF',
    pink_dark: '#251622',
    orange: '#E07B67',
    orange_dark: '#261A17',
    yellow: '#BB9F3A',
    yellow_dark: '#211E12',
    green: '#8CAD51',
    green_dark: '#1C2015',
    blue: '#7B94CB',
    blue_dark: '#1A1D23',
  },

  fonts: {
    xs: RFValue(12),
    sm: RFValue(14),
    md: RFValue(16),
    lg: RFValue(18),
    xl: RFValue(20),
  }
}