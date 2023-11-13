import { StyleSheet } from 'react-native';
import globalStyles from '../../config/globalStyles';
import { fontRef, heightRef, widthRef } from '../../config/screenSize';

const styles = StyleSheet.create({
  title: {
    fontSize: 16 * fontRef,
    fontWeight: '500',
    marginBottom: 10,
    color:'#B7B7B7'
  },
  input: {
    paddingHorizontal: 20 * widthRef,
    paddingVertical: 10,
    width: '100%',
    height: 58 * heightRef,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    fontSize: 16,
    fontWeight: '400',
    color: globalStyles.Theme.black,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    height: 24 * widthRef,
    width: 24 * widthRef,
    right: 0,
   
  },
   icon1: {
    position: 'absolute',
    alignSelf: 'flex-end',
    height: 24 * widthRef,
    width: 24 * widthRef,
    right:0
    
  },
});

export default styles;
