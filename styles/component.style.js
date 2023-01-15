import {StyleSheet} from 'react-native';
import themeStyle from './theme.style';

const componentStyle = StyleSheet.create({
  // Header
  header: {
    marginBottom: themeStyle.spacing.SPACING_20,
  },
  headerBackground: {
    height: 150,
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 55,
    padding: themeStyle.spacing.SPACING_10,
    backgroundColor: themeStyle.colors.WHITE,
  },
  textHeader: {
    fontSize: themeStyle.fontSizes.FONT_SIZE_LARGE,
    color: themeStyle.colors.WHITE,
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
  },
  backgroundContainer: {
    flex: 1,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  // Logo
  logoContainer: {
    marginTop: themeStyle.spacing.SPACING_20,
    marginBottom: themeStyle.spacing.SPACING_20,
  },
  // Text
  textComponentTitle: {
    fontSize: themeStyle.fontSizes.FONT_SIZE_LARGE,
    textAlign: 'center',
    color: themeStyle.colors.DARK_GRAY,
    paddingVertical: themeStyle.spacing.SPACING_10,
  },
  textComponent: {
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
    color: themeStyle.colors.BLACK,
    paddingVertical: themeStyle.spacing.SPACING_10,
  },
  textComponentSmall: {
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
    color: themeStyle.colors.GRAY40,
    paddingVertical: themeStyle.spacing.SPACING_10,
  },
  nextStep: {
    alignSelf: 'center',
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
    color: themeStyle.colors.PRIMARY,
    paddingVertical: themeStyle.spacing.SPACING_10,
  },
  // Dots
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '100%',
  },
  // No Connectivity Notice
  offlineContainer: {
    backgroundColor: themeStyle.colors.SALMON,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
  },
  offlineText: {
    color: themeStyle.colors.WHITE,
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
  },
  offlineWrapper: {
    backgroundColor: themeStyle.colors.PRIMARY,
  },
});

export default componentStyle;
