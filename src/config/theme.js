import { DefaultTheme } from 'react-native-paper';

import {
  blue, blueDark, blueLight, blueGreyDark, white, red, redLight,
} from './colors';

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    primary: blue,
    accent: blueDark,
    surface: white,
    text: blueGreyDark,
    disabled: blueGreyDark,
    placeholder: blueLight,
    background: white,
    error: red,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: redLight,
  },
};

export default theme;
