import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginRight: 13,
    marginBottom: 15,
    borderColor: 'gray',
    borderRadius: 10,
    width: 290,
    elevation: 2,
    shadowOpacity: 0.5,
    shadowColor: 'gray',
    shadowRadius: 5,
    shadowOffset: {height: 0, width: 0},
  },
  image: {
    width: 290,
    height: 180,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.7,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 12,
    position: 'absolute',
    color: 'white',
    paddingBottom: 5,
    bottom: 2,
  },
  titleBackground: {
    width: 290,
    height: 73,
    bottom: 0,
    backgroundColor: 'black',
    marginLeft: 7,
    marginTop: -74,
    position: 'relative',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    opacity: 0.2,
  },
  gradient: {
    width: 290,
    height: 180,
    borderRadius: 10,
    marginLeft: 7,
    backgroundColor: 'black',
    opacity: 1,
  },
});

export default styles;
