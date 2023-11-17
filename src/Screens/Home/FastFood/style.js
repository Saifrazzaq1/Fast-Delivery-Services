import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    marginLeft: 5,
  },
  main1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  main2: {
    flexDirection: 'row',
    marginLeft: 40,
    top: 3,
  },
  img: {
    height: 15,
    width: 15,
    tintColor: 'black',
  },
  pickText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  restrtimg: {
    width: 300,
    height: 160,
    borderRadius: 10,
  },
  restrtclock: {
    width: 16,
    height: 16,
  },
  restrttext: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    color: 'black',
  },
  restrtView: {
    marginLeft: 10,
    alignItems: 'flex-start',
    paddingBottom: 20,
  },
  restrttime: {
    color: 'black',
    fontSize: 12,
    marginLeft: 5,
  },
  nameDes: {
    color: 'grey',
    fontSize: 14,
    marginVertical: 3,
  },
  starimg: {
    height: 15,
    width: 15,
  },
  locimg: {
    height: 15,
    width: 9,
  },
  startext: {
    color: 'grey',
    fontSize: 12,
    marginHorizontal: 5,
  },
  loctext: {
    color: 'grey',
    fontSize: 12,
    marginHorizontal: 5,
  },
});

export default styles;
