import {StyleSheet} from 'react-native';
import {themeStyle} from '../../styles';

const checkBoxStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: themeStyle.spacing.SPACING_20,
    marginBottom: themeStyle.spacing.SPACING_20,
    height: 40,
  },
  wrapper: {
    borderWidth: 1,
    borderColor: themeStyle.colors.PRIMARY,
    borderRadius: themeStyle.borders.RADIUS_3,
    marginRight: themeStyle.spacing.SPACING_10,
  },
  text: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
    color: themeStyle.colors.BLACK,
    fontWeight: themeStyle.fontWeight.BOLD,
  },
});

export default checkBoxStyles;
