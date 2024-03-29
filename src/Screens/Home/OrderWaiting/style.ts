import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  body:{margin: 20, paddingBottom: 50},
  main:{
    alignItems: 'center',
    flex: 1,
  },
  mainimg:{width: 250, height: 250},
  bgimg: {
    width: '100%',
    height: 220 * heightRef,
  },
  line: {
    backgroundColor: '#A0A0A0',
    height: 0.5,
    width: '100%',
    marginVertical: 20,
  },
  view1: {paddingTop: 10},
  oshatext: {color: 'black', fontSize: 16, fontWeight: '500'},
  oshatext2: {color: 'black', fontSize: 18, fontWeight: 'bold'},
  radioText: {color: 'black', fontSize: 18, fontWeight: '500', marginLeft: 10},
  oshatext1: {color: 'black', fontSize: 14, fontWeight: '500'},
  oshatextv: {color: 'black', fontSize: 14, fontWeight: '500'},
  oshatextm: {
    color: 'black',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 5,
  },
  totalV: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  listimg: {
    height: 70,
    width: 100,
    borderRadius: 20,
  },
  mapv: {
    marginBottom: 10,
    marginTop: 30,
    height: 160,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  itemlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fdf4f4',
    borderRadius: 10,
  },
  oshatextc: {color: 'black', fontSize: 16, fontWeight: '500', marginLeft: 5},
  infotext: {color: 'green', fontSize: 14},
  emitext: {color: '#A0A0A0', marginVertical: 3, fontSize: 12},
  ratingtextview: {flexDirection: 'row', justifyContent: 'space-between'},
  ratingtext: {color: '#A0A0A0', fontSize: 14, marginLeft: 5},
  revtext: {
    color: '#E0281C',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 15,
    marginRight: 20,
  },
  revtextpm: {
    color: '#E0281C',
    fontSize: 25,
    textAlign: 'right',
  },
  revtextpmm: {
    color: '#A0A0A0',
    fontSize: 25,
    textAlign: 'center',
  },
  revtextpmc: {
    color: '#000',
    fontSize: 20,
    marginTop: 3,
    paddingHorizontal: 20,
  },
  clockicon: {height: 25, width: 25},
  textplay: {color: 'black', fontSize: 18, fontWeight: '500'},
  textanyT: {color: '#000', fontSize: 14, marginTop: 10, fontWeight: 'bold'},
  textany: {color: '#000', fontSize: 14, marginTop: 10},
  textany2: {color: '#000', fontSize: 16, marginTop: 10},
  emark: {height: 25, width: 25, left: 95, top: 8},
  deltext: {
    color: '#A0A0A0',
    fontSize: 12,
    marginLeft: 40,
    marginTop: -15,
  },
  deltext1: {color: '#A0A0A0', fontSize: 14, marginTop: 0.5},
  deltext2: {color: '#E0281C', fontSize: 14},
  deltextnextT: {color: '#000', fontSize: 14, fontWeight: 'bold'},
  deltextnext: {color: '#000', fontSize: 14},
  deltext3: {
    flexDirection: 'column',
    color: '#000',
    fontSize: 14,
    marginVertical: 10,
  },
  offlist: {
    backgroundColor: '#EF5DA8',
    height: 80,
    width: 250,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  offimg: {tintColor: '#fff', height: 25, width: 25, left: 20, top: 25},
  adtext: {
    fontSize: 12,
    color: '#fff',
    paddingHorizontal: 30,
    marginTop: 25,
  },
  menuicon: {
    height: 15,
    width: 20,
    top: 20,
  },
  ystar: {
    height: 15,
    width: 15,
  },
  gstar: {
    tintColor: '#A0A0A0',
    height: 15,
    width: 15,
  },
  menulist: {
    width: '95%',
    marginLeft: 40,
  },
  menulist2: {
    marginTop: 2,
    marginHorizontal: 10,
  },
  menutext: {
    color: '#1C7584',
    fontWeight: '500',
    fontSize: 14,
    marginRight: 5,
    textAlign: 'center',
    paddingBottom: 5,
  },
  trendheading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  mainlistview: {flexDirection: 'row', marginVertical: 30},
  mlisttext: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  mlistdes: {
    color: 'grey',
    fontSize: 10,
    paddingRight: 125,
  },
  mlistprice: {
    color: '#EF5DA8',
    fontSize: 10,
    top: 20,
  },
  mlistimg: {
    height: 92,
    width: 118,
    borderRadius: 10,
  },
  img:{width: 25, height: 25, marginTop: 5},
  row:{flexDirection: 'row'},
  img1:{width: 35, height: 35, marginTop: 20},
});

export default styles;
