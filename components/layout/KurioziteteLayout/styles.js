import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flex: 1,
    backgroundColor: '#FFF',
    width: 373,
    height: 150,
    elevation: 3,
    borderRadius: 10,
    padding: 15,
    marginLeft: 20,
    marginBottom: 5,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  titleStyle: {
    // borderColor: 'red',
    // borderWidth: 2,
    marginTop: -110,
    marginLeft: 114,
    width: 200,
    fontWeight: 'bold',
  },

  dateStyle: {
    marginTop: -13,
    marginLeft: 270,
    fontSize: 10,
    bottom: 0,
    color: '#4f4a4a',
    // backgroundColor: 'yellow',
    // borderWidth: 3,
    width: 90,
  },
  postContentStyle: {
    marginTop: -75,
    fontSize: 12,
    borderColor: 'red',
    borderWidth: 2,
    width: 200,
    marginLeft: 111,
    bottom: -4,
    marginBottom: 4,
    color: '#4f4a4a',
    left: 3,
    top: 4,
    // top: -3
  },
});
export default styles;
