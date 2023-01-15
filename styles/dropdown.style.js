import {StyleSheet} from 'react-native';
import themeStyle from './theme.style';

const dropdownStyle = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: themeStyle.spacing.SPACING_10,
  },
  /* Flex direction row */
  flexRow: {
    flexDirection: 'row',
  },
  /* List */
  noResults: {
    textAlign: 'center',
  },
  hide: {
    display: 'none',
  },
  listContainer: {
    backgroundColor: themeStyle.colors.WHITE,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: themeStyle.borders.WIDTH,
    borderRadius: themeStyle.borders.RADIUS_20,
    paddingVertical: themeStyle.spacing.SPACING_10,
    marginTop: themeStyle.spacing.SPACING_10,
    marginBottom: themeStyle.spacing.SPACING_20,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: themeStyle.spacing.SPACING_10,
    paddingHorizontal: themeStyle.spacing.SPACING_20,
  },
  listItemText: {
    flex: 1,
    color: themeStyle.colors.GRAY40,
    fontFamily: themeStyle.fonts.ROBOTO_REGULAR,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
  },
  checkmark: {
    paddingLeft: themeStyle.spacing.SPACING_10,
  },
  flag: {
    marginRight: themeStyle.spacing.SPACING_10,
    alignSelf: 'center',
  },
  listIcon: {
    marginRight: themeStyle.spacing.SPACING_10,
  },
  /* Label */
  label: {
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_SMALL,
    color: themeStyle.colors.PRIMARY,
    paddingHorizontal: themeStyle.spacing.SPACING_10,
    marginBottom: themeStyle.spacing.SPACING_5,
  },
  /* Text bar */
  textBarContainer: {
    backgroundColor: themeStyle.colors.WHITE,
    paddingHorizontal: themeStyle.spacing.SPACING_10,
    paddingVertical: themeStyle.spacing.SPACING_10,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: themeStyle.borders.WIDTH,
    borderRadius: themeStyle.borders.RADIUS_20,
  },
  textBar: {
    flex: 1,
  },
  textBarText: {
    color: themeStyle.colors.GRAY40,
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
    paddingHorizontal: themeStyle.spacing.SPACING_10,
  },
  /* Search bar */
  searchBarContainer: {
    flex: 1,
    paddingVertical: themeStyle.spacing.SPACING_15,
    paddingHorizontal: themeStyle.spacing.SPACING_20,
    backgroundColor: themeStyle.colors.WHITE,
    borderColor: themeStyle.colors.BORDER_COLOR,
    borderWidth: themeStyle.borders.WIDTH,
    borderRadius: themeStyle.borders.RADIUS_20,
  },
  textInput: {
    flex: 1,
    color: themeStyle.colors.GRAY40,
    fontFamily: themeStyle.fonts.ROBOTO_MEDIUM,
    fontSize: themeStyle.fontSizes.FONT_SIZE_MEDIUM,
  },
  dropdownIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearIcon: {
    alignSelf: 'center',
  },
});

export default dropdownStyle;
