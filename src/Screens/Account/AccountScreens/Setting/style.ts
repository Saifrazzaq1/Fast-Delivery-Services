import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btnsview: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  all: {
    alignSelf: 'flex-start',
    marginBottom: 30,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});

export default styles;
