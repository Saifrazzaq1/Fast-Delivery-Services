import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  text1: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
  },
  text2: {
    color: 'grey',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 5,
  },
  redText: {
    fontWeight: '500',
    color: '#E0281C',
    fontSize: 16,
    marginBottom: 20,
  },
  orderView: {
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  mapImg: {
    height: 15 * heightRef,
    width: 9.5,
    tintColor: '#1C7584',
  },
  dp: {
    height: 25 * heightRef,
    width: 25,
  },
  card: {
    height: 200 * heightRef,
    width: '100%',
    marginVertical: 20,
    borderRadius: 10,
  },
});
export default styles;
