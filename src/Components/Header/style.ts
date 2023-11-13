import {StyleSheet} from 'react-native';
import {fullWidth} from 'src/config/screenSize';

export default StyleSheet.create({
  headview: {
    height: 60,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
  },
  text1: {
    color: '#1C7584',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  joharText: {
    color: '#1C7584',
    fontSize: 16,
    fontWeight: 'bold',
  },
  delivtext: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  text2: {
    color: '#E0281C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon: {
    textAlign: 'center',
  },
  backIconView: {
    left: 10,
    position: 'absolute',
    zIndex: 1000,
    borderRadius: 20,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signoutView: {
    left: fullWidth * 0.8,
    borderRadius: 20,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchView: {
    position: 'absolute',
    borderRadius: 20,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartView: {
    right: 20,
    position: 'absolute',
    borderRadius: 20,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
