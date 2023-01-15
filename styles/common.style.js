import {StyleSheet} from 'react-native';
import themeStyle from './theme.style';

const commonStyle = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingVertical: themeStyle.spacing.SPACING_20,
    alignContent: 'center',
  },
  whiteBg: {
    backgroundColor: themeStyle.colors.WHITE,
  },
  lightBg: {
    backgroundColor: themeStyle.colors.SECONDARY,
  },
  darkBg: {
    backgroundColor: themeStyle.colors.PRIMARY,
  },
  loginBg: {
    backgroundColor: themeStyle.colors.LOGIN_BG,
  },
  transparentBg: {
    backgroundColor: 'transparent',
  },
  lightText: {
    color: themeStyle.colors.LIGHT_GRAY,
  },
  mediumLightText: {
    color: themeStyle.colors.MEDIUM_LIGHT_GRAY,
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
  },
  darkText: {
    color: themeStyle.colors.DARK_GRAY,
  },
  viewPager: {
    flex: 1,
    color: themeStyle.colors.WHITE,
  },
  imageSize: {
    width: 300,
    height: 200,
  },
  top: {
    marginTop: themeStyle.spacing.SPACING_25,
  },
  topLeft: {
    marginTop: themeStyle.spacing.SPACING_20,
    marginLeft: themeStyle.spacing.SPACING_20,
  },
  topLeftAbsolute: {
    position: 'absolute',
    top: 40,
    left: themeStyle.spacing.SPACING_20,
  },
  alignToBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  paddingBetween: {
    paddingLeft: themeStyle.spacing.SPACING_25,
    paddingRight: themeStyle.spacing.SPACING_25,
  },
  paddingUpDown: {
    paddingTop: themeStyle.spacing.SPACING_15,
    paddingBottom: themeStyle.spacing.SPACING_15,
  },
});

export default commonStyle;
