import {StyleSheet} from 'react-native';
import {themeStyle} from '../../../styles';

const textStyles = StyleSheet.create({
  text: {
    color: themeStyle.colors.BLACK,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
  },
  bold: {
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
  },
  regular: {
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
  },
});

export default textStyles;
