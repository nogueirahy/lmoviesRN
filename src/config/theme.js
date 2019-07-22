import { DarkTheme } from 'react-native-paper';

import {
  blueLight, blueGreyDark, red, redLight,
} from './colors';

const theme = {
  ...DarkTheme,
  dark: true,
  roundness: 4,
  colors: {
    primary: '#dbedf3',
    accent: '#00818a',
    surface: '#404b69',
    text: '#dbedf3',
    disabled: blueGreyDark,
    placeholder: blueLight,
    background: '#404b69',
    error: red,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: redLight,
  },
};

export default theme;
