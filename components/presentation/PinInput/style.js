import {StyleSheet} from 'react-native';
import {themeStyle} from '../../../styles';

const pinInputStyles = StyleSheet.create({
  pinInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    paddingTop: 15,
    marginLeft: 27,
    marginRight: 27,
  },
  pinBox: {
    borderBottomWidth: 0.3,
    borderBottomColor: themeStyle.colors.WHITE,
    height: 30,
    width: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinSymbol: {
    color: themeStyle.colors.WHITE,
    fontSize: themeStyle.fontSizes.FONT_SIZE_LARGE,
  },
});

export default pinInputStyles;
