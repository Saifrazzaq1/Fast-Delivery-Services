import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  body:{flex: 1, backgroundColor: 'white'},
  scroll:{
    marginHorizontal: 20,
  },
  pay:{flexDirection: 'row', justifyContent: 'space-between'},
  row:{flexDirection:'row'},
  text: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    marginTop: 7,
    marginLeft: 5,
  },
  p:{padding: 20, borderColor:'#E1E1E1', borderWidth:1,flex:1,height:200,width:"100%",
 borderRadius:20},
 mapv:{
  flex:1,height:200,width:"100%",
  
 },
  payv:{flexDirection: 'row', justifyContent: 'space-between'},
  smallMap:{   ...StyleSheet.absoluteFillObject,
    height: 70,
    width: '30%',
    position: 'absolute',
    borderRadius: 10,
    marginLeft: 240,
    marginTop: 20,
    overflow: 'hidden',},
  text1: {
    fontWeight: '500',
    color: 'black',
    fontSize: 14,
    marginBottom: 10,
  },
  amountText: {
    color: 'grey',
    fontSize: 14,
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
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  mapImg: {
    height: 16 * heightRef,
    width: 10.5,
    tintColor: '#1C7584',
    paddingLeft:10
  },
  dp: {
    height: 37 * heightRef,
    width: 35,
  },
  orderView3: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  text13: {
    color: 'grey',
    fontSize: 12,
    marginLeft: 5,
  },
  text14: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    marginLeft: 40,
    marginTop: -20,
  },
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
    borderRadius: 10,
    marginTop: 10,
    marginRight: 50,
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
    borderRadius: 20,
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    marginTop: 20,
    backgroundColor: '#E0281C1A',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default styles;
