import { StyleSheet } from 'react-native';
import globalStyles from '../../config/globalStyles';
import { heightRef, widthRef } from '../../config/screenSize';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 60 * heightRef,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom:10
  },

  main2: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  
  },

  icon: { height: 24 * heightRef, width: 24 * widthRef , },
  icon2: {
    height: 20 * heightRef,
    width: 20 * widthRef,
    marginRight: 0 * widthRef,
   
  },
  iosShadow: {
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});

export default styles;
