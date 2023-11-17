import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btnsview: {
    width: '100%',
    marginHorizontal: 20,
  },
  btnsimg: {
    height: 28,
    marginLeft: 10,
    width: 28,
  },

  btnsname: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
  btnsnames: {
    color: '#1C7584',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
  },
  line: {
    marginHorizontal: 10,
    marginTop: -10,
    marginBottom: 15,
    height: 0.4,
    backgroundColor: 'grey',
    zIndex: 1000,
  },

  view1: {paddingTop: 5},
  oshatext: {color: 'black', fontSize: 14, fontWeight: '500'},
  emitext: {
    color: '#A0A0A0',
    fontSize: 12,
    width: 230,
    lineHeight: 20,
  },
  all: {
    height: 90,
    width: 120,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default styles;
