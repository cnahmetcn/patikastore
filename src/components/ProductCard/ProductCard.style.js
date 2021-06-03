/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
  },
  imageArea: {
    flex: 1,
  },
  productImage: {
    height: Dimensions.get('window').height / 4,
  },
  innerContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  price: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stock: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
