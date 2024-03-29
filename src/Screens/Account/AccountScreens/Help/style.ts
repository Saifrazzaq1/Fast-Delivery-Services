import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body:{backgroundColor: '#fff', flex: 1},
  btnsview: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  btnsimg: {
    height: 28,
    marginLeft: 10,
    width: 28,
  },
  btnsdec: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 10,
  },
  btnsname: {
    color: '#000',
    fontSize: 25,
    fontWeight: '500',
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
});

export default styles;
