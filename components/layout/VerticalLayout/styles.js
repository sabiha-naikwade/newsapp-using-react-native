import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    flex: 1,
    borderColor: 'gray',
    borderRadius: 8,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 8,
    width: 200,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginLeft: 5,
    elevation: 4,
    shadowOpacity: 0.5,
    shadowColor: 'gray',
    shadowRadius: 5,
    shadowOffset: {height: 1, width: 0},
  },
  image: {
    width: 200,
    height: 190,
    opacity: 4,
    borderRadius: 8,
    marginRight: 9,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    borderColor: 'blue',
    width: 190,
    marginLeft: 4,
    marginTop: 5,
    flex: 1,
  },
  text: {
    marginLeft: 1,
    fontSize: 10,
    padding: 5,
    bottom: 0,
  },
});

export default styles;
