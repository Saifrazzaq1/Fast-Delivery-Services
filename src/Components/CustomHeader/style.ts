import { StyleSheet } from 'react-native';
import globalStyles from '../../config/globalStyles';
import { heightRef, widthRef } from '../../config/screenSize';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 60 * heightRef,
    justifyContent: 'center',
    
   
  },

  main2: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 20,
  
  },

  icon: { height: 20 * heightRef, width: 20 * widthRef , margin:5 },
  icon1: { height: 30 * heightRef, width: 30 * widthRef , },
  icon2: {
    height: 18 * heightRef,
    width: 18 * widthRef,
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
   titleStyles : {
    color: '#A0A0A0', // Default text color for title1
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 0,
    textAlign: 'center',
  },

   title1Styles : {
    color: '#1C7584', // Default text color for title
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 0,
    textAlign: 'center',
  },
});

export default styles;
