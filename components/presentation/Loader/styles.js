import {StyleSheet} from 'react-native';

const loaderStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  headerContainer: {
    padding: 20,
  },
  activityIndicatorWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    marginVertical: 20,
  },
});

export default loaderStyles;
