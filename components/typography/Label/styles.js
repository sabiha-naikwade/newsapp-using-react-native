import {StyleSheet} from 'react-native';
import {themeStyle} from '../../../styles';

const labelStyles = StyleSheet.create({
  label: {
    color: themeStyle.colors.LIGHT_GRAY,
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
    paddingBottom: themeStyle.spacing.SPACING_5,
  },
});

export default labelStyles;
