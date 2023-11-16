import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  text1: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
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
    height: 23,
    width: 23,
    tintColor: '#A0A0A0',
    position: 'absolute',
    right: 20,
    top: '53%',
  },
  card: {
    height: 200 * heightRef,
    width: '100%',
    marginVertical: 20,
    borderRadius: 10,
    marginBottom: 140,
  },
});
export default styles;
