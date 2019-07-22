import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { color } from '../../../../config/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: color.background,
    paddingTop: Constants.statusBarHeight + 12,
  },
  title: {
    paddingLeft: 12,
    letterSpacing: 0.15,
    fontWeight: '500',
    paddingBottom: 16,
  },
  contentFlatlist: {
    justifyContent: 'space-evenly',
    paddingLeft: 16,
  },
  contentDetailBody: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
    paddingTop: 4,
    paddingHorizontal: 16,
  },
});
