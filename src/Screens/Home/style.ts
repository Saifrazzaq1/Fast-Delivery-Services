import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {flex: 1, backgroundColor: '#fff'},
  storesView: {
    backgroundColor: '#1C7584',
    width: '100%',
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  storesViewText1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  storesViewText2: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'left',
    paddingBottom: 20,
  },
  storeImg: {
    position: 'absolute',
    width: 144,
    height: 146,
    right: 30,
    top: 20,
  },
  heytext: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20,
  },
  heyView: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  catimg: {
    width: 61,
    height: 48,
    alignSelf: 'center',
  },
  cattext: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
  catView: {
    margin: 5,
    width: 96,
    height: 102,
    justifyContent: 'center',
  },
  optnimg: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  optntext: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5,
  },
  optnView: {
    marginTop: 70,
    height: 70,
    width: 80,
    justifyContent: 'center',
  },
  faddimg: {
    width: 99,
    height: 55,
  },
  faddView: {
    marginHorizontal: 20,
    flexDirection: 'row',
    top: 30,
  },
  faddtext1: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
    marginTop: 5,
    marginLeft: 15,
  },
  faddtext2: {color: '#A0A0A0', fontSize: 13, marginLeft: -109, marginTop: 15},
  poputext: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 50,
    marginLeft: 20,
  },
  restrtimg: {
    width: 180,
    height: 140,
    borderRadius: 10,
  },
  restrtclock: {
    width: 16,
    height: 16,
  },
  restrttext: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 5,
  },
  restrtView: {
    marginTop: 20,
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  restrttime: {
    color: 'black',
    fontSize: 12,
    marginLeft: 5,
  },
  offerimg: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  offerView: {
    marginTop: 20,
    marginBottom: 130,
    marginLeft: 10,
    height: 200,
    width: 300,
    justifyContent: 'center',
  },
});

export default styles;
