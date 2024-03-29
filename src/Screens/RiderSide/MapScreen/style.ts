import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  
  body:{
    flex: 1,
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
  text13: {
    color: 'grey',
    fontSize: 12,
    marginLeft: 5,
    marginTop: 2,
  },
  text3: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    marginTop: 20,
  },
  text5: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
  },
  text14: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    marginLeft: 40,
    marginTop: -15,
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
  orderView3: {
    paddingTop: 20,
    marginBottom:100,
   
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  orderView1: {
    marginTop: 260,
    padding: 20,
    paddingTop: 30,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  mapView: {
    marginBottom: 10,
    marginTop: 30,
    height: 160,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
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
  scroleView: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',

  },
  scroleView1: {
    marginTop: 450,
  },
  dp: {
    height: 37 * heightRef,
    width: 35,
  },
mh:{marginHorizontal: 20},
orderbtn:{
  margin: 20,
  alignItems: 'center',
},
flex:{flex: 1},
row:{flexDirection: 'row'},
addview:{flexDirection: 'row', marginTop: 10},
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
    // ...StyleSheet.absoluteFillObject,
    height: 70,
    width: '30%',
    marginTop: 10,

    position: 'absolute',
    borderRadius: 10,
    // marginLeft: 240,
    // marginTop: 20,
    right: 20,
    top: 20,
    overflow: 'hidden',
  },
  container1: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
   
   
    
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
  dragline: {
    height: 5,
    width: 60,
    borderRadius: 30,
    marginTop: 5,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#B1B1B1',
  },
  Ldragline: {
    height: 0.5,
    marginTop: -10,
    marginBottom: 10,
    borderRadius: 30,
    backgroundColor: '#AFAFAF80',
  },
});
export default styles;
