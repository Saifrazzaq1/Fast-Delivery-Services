import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  head:{paddingBottom: 45},
  body:{
    marginHorizontal: 20,
    marginBottom: '10%',
  },
  map:{flex: 1},
  row:{flexDirection: 'row'},
  pay:{flexDirection: 'row', justifyContent: 'space-between'},
  bottom:{flexDirection: 'row', alignItems: 'center'},
  img:{width: 35, height: 35, marginTop: 10},
  btn:{marginTop: 40, marginBottom: 60},
  locview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    marginTop: 7,
    marginLeft: 5,
  },
  text2: {
    color: 'grey',
    fontSize: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  text11: {
    color: 'grey',
    fontSize: 10,
  },
  text4: {
    color: 'grey',
    fontSize: 12,
  },
  text5: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
  },
  text6: {
    fontWeight: '400',
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  text7: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
  },
  text12: {
    color: 'black',
    fontSize: 12,
  },
  text8: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
  },
  text10: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  text9: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  redText: {
    fontWeight: '500',
    color: '#E0281C',
    fontSize: 16,
  },
  orderView: {
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapImg: {
    height: 16 * heightRef,
    width: 10.5,
    tintColor: '#1C7584',
  },
  dp: {
    height: 37 * heightRef,
    width: 35,
  },
  MapView: {
    marginBottom: 10,
    marginTop: 30,
    height: 160,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  MapView1:{flex:1},
  mapimg:{width: 20, height: 40},
  smallView: {
    height: 25 * heightRef,
    width: 25,
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#1C75840D',
  },
  smallViewImg: {
    height: 15 * heightRef,
    width: 10,
    tintColor: '#1C7584',
  },
  bigViewImg: {
    height: 25 * heightRef,
    width: 25,
    marginLeft: 10,
    marginTop: 5,
    tintColor: '#1C7584',
  },
  bigViewImg2: {
    height: 25 * heightRef,
    width: 25,
    marginRight: 5,
    tintColor: '#000',
  },
  card: {
    height: 200 * heightRef,
    width: '100%',
    marginVertical: 20,
    borderRadius: 10,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 70,
    width: '30%',
    position: 'absolute',
    borderRadius: 10,
    marginLeft: 240,
    marginTop: 20,
    overflow: 'hidden',
  },
  orderDetail: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#AFAFAF80',
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text3: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
  },
  mlistimg: {
    height: 68,
    width: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  pinkView: {
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#E0281C1A',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
