import {StyleSheet} from 'react-native';
import {heightRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  body:{flex: 1, backgroundColor: '#fff'},
  btnsview: {
    marginHorizontal: 20,
    flex: 1,
    paddingVertical: 10,
  },
  btnsimg: {
    height: 190 * heightRef,
    width: '100%',
    alignSelf: 'center',
  },
});

export default styles;
