import {StyleSheet} from 'react-native';
import {themeStyle} from '../../styles';

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'flex-end',
    marginVertical: themeStyle.spacing.SPACING_20,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: themeStyle.borders.RADIUS_5,
    padding: themeStyle.spacing.SPACING_20,
    marginBottom: themeStyle.spacing.SPACING_20,
  },
  buttonActive: {
    backgroundColor: themeStyle.colors.PRIMARY,
  },
  buttonInactive: {
    backgroundColor: themeStyle.colors.PRIMARY_50,
  },
  buttonText: {
    alignSelf: 'center',
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
    color: themeStyle.colors.WHITE,
  },
});

export default buttonStyles;
