import {StyleSheet} from 'react-native';
import {themeStyle} from '../../../styles';

const textInputStyles = StyleSheet.create({
  textInputStyle: {
    flex: 1,
    color: themeStyle.colors.GRAY40,
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
    padding: 0,
    margin: 0,
  },
  textInputWrapper: {
    flex: 1,
    marginBottom: themeStyle.spacing.SPACING_10,
    paddingVertical: themeStyle.spacing.SPACING_15,
    paddingHorizontal: themeStyle.spacing.SPACING_20,
    backgroundColor: themeStyle.colors.WHITE,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: themeStyle.borders.WIDTH,
    borderRadius: themeStyle.borders.RADIUS_20,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputIcon: {
    marginLeft: themeStyle.spacing.SPACING_10,
  },
});

export default textInputStyles;
