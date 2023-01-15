import {StyleSheet} from 'react-native';
import themeStyle from './theme.style';

const screenStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    alignContent: 'center',
  },
  inputsContainer: {
    marginTop: themeStyle.spacing.SPACING_20,
  },
  labelsContainer: {
    color: themeStyle.colors.BLACK,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
    paddingBottom: themeStyle.spacing.SPACING_15,
  },
  // Terms agreement
  termsAgreementText: {
    marginTop: themeStyle.spacing.SPACING_20,
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
    color: themeStyle.colors.DARK_GRAY,
    textAlign: 'left',
    fontWeight: '500',
  },
  // App guide
  pageContainer: {
    alignItems: 'center',
    padding: themeStyle.spacing.SPACING_20,
    backgroundColor: themeStyle.colors.WHITE,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: themeStyle.borders.WIDTH,
    borderRadius: themeStyle.borders.RADIUS_20,
  },
  pageTitle: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: themeStyle.colors.BLACK,
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_LARGE,
    paddingVertical: themeStyle.spacing.SPACING_20,
  },
  pageContent: {
    textAlign: 'center',
    color: themeStyle.colors.GRAY40,
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
    paddingBottom: themeStyle.spacing.SPACING_20,
  },
  // User information
  userInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: themeStyle.spacing.SPACING_20,
  },
  // Credit card
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: themeStyle.spacing.SPACING_20,
  },
  // Transaction verification
  verificationContainer: {
    padding: themeStyle.spacing.SPACING_20,
    alignContent: 'center',
  },
  // PIN Code
  pinCodeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: themeStyle.spacing.SPACING_20,
  },
  pinCodeHeader: {
    zIndex: 1,
    width: '100%',
    paddingVertical: themeStyle.spacing.SPACING_10,
    borderRadius: themeStyle.borders.RADIUS_5,
    shadowColor: themeStyle.colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  pinCodeContent: {
    flex: 1,
    marginHorizontal: themeStyle.spacing.SPACING_20,
    padding: themeStyle.spacing.SPACING_20,
    backgroundColor: themeStyle.colors.WHITE,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: themeStyle.borders.WIDTH,
    borderBottomLeftRadius: themeStyle.borders.RADIUS_20,
    borderBottomRightRadius: themeStyle.borders.RADIUS_20,
  },
  pinCodeInputStyle: {
    color: themeStyle.colors.WHITE,
  },
  pinCodeInputFieldStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: themeStyle.colors.MEDIUM_LIGHT_GRAY,
  },
  pinContainer: {
    marginBottom: themeStyle.spacing.SPACING_20,
    alignItems: 'center',
  },
  pinCodeTextStyle: {
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_LARGE,
    color: themeStyle.colors.WHITE,
  },
  pinCodeContainerStyle: {
    justifyContent: 'center',
    margin: themeStyle.spacing.SPACING_20,
  },
  pinCodeCellStyle: {
    borderBottomColor: themeStyle.colors.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pinCodeFocusedCellStyle: {
    borderColor: 'transparent',
  },
  loginContainer: {
    marginTop: themeStyle.spacing.SPACING_20,
  },
  loginHeader: {
    zIndex: 1,
    backgroundColor: themeStyle.colors.PRIMARY,
    paddingVertical: themeStyle.spacing.SPACING_10,
    borderRadius: themeStyle.borders.RADIUS_5,
    shadowColor: themeStyle.colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  loginButtonsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: themeStyle.spacing.SPACING_20,
    padding: themeStyle.spacing.SPACING_20,
    backgroundColor: themeStyle.colors.WHITE,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: themeStyle.borders.WIDTH,
    borderBottomLeftRadius: themeStyle.borders.RADIUS_20,
    borderBottomRightRadius: themeStyle.borders.RADIUS_20,
  },
  fingerprintButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: themeStyle.spacing.SPACING_20,
    padding: themeStyle.spacing.SPACING_20,
    backgroundColor: themeStyle.colors.WHITE,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: themeStyle.borders.WIDTH,
    borderRadius: themeStyle.borders.RADIUS_20,
  },
  // ClicID
  clicidContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  clicIdCode: {
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
    fontSize: themeStyle.fontSizes.FONT_SIZE_LARGE,
    color: themeStyle.colors.PRIMARY,
    paddingVertical: themeStyle.spacing.SPACING_10,
  },
  // Notifications list
  notificationHeader: {
    paddingHorizontal: themeStyle.spacing.SPACING_20,
  },
  notificationContainer: {
    marginTop: themeStyle.spacing.SPACING_20,
  },
  notificationTabBar: {
    backgroundColor: themeStyle.colors.TABS.BASE,
    elevation: 0,
  },
  notificationTabLabel: {
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
    color: themeStyle.colors.TABS.GRAY40,
  },
  notificationTabIndicatorStyle: {
    height: 4,
  },
  activityIndicator: {
    margin: 20,
  },
  notificationListItemContainer: {
    height: 77,
    width: '100%',
    borderBottomColor: themeStyle.colors.TABS.BASE,
    borderBottomWidth: 1,
    padding: 22,
  },
  notificationListItemLabel: {
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
  },
  notificationListItemText: {
    fontSize: themeStyle.fontSizes.FONT_SIZE_XSMALL,
    color: themeStyle.colors.GRAY40,
  },
  notificationListEmptyText: {
    margin: 22,
  },
  notificationListItemSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    lineHeight: themeStyle.fontSizes.FONT_SIZE_SMALL,
  },
  iconLabel: {
    flexDirection: 'row',
    lineHeight: themeStyle.fontSizes.FONT_SIZE_SMALL,
  },
  // Document Info, VerificationInfo
  infoTitle: {
    fontSize: themeStyle.fontSizes.FONT_SIZE_LARGE,
    color: themeStyle.colors.BLACK,
  },
});

export default screenStyle;
