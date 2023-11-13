import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  bgimg: {
    width: '100%',
    height: 220 * heightRef,
  },
  line: {
    backgroundColor: '#A0A0A0',
    height: 0.4,
    width: '100%',
    marginVertical: 25,
  },
  eyeBtn1: {
    // position: 'absolute',
    // textAlign: 'center',
    // textAlignVertical: 'center',
    right: 15,
    top: '10%',
  },
  view1: {flexDirection: 'row', justifyContent: 'space-between'},
  oshatext: {color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 5},
  infotext: {color: 'green', fontSize: 14},
  emitext: {color: '#A0A0A0', marginVertical: 3, fontSize: 14},
  ratingtextview: {flexDirection: 'row', justifyContent: 'space-between'},
  ratingtext: {color: '#A0A0A0', fontSize: 14, marginLeft: 5},
  revtext: {
    color: '#EF5DA8',
    fontWeight: '500',
    fontSize: 14,
    marginVertical: 14,
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
  text50: {color: 'black', fontSize: 16, marginLeft: 5, fontWeight: 'bold'},
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
  deltext2: {color: '#E0281C', fontSize: 14, marginTop: 10},
  deltextnext: {color: '#000', fontSize: 14, marginTop: 10},
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
});

export default styles;
