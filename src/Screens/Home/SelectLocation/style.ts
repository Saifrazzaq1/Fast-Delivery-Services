import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
    overflow: 'hidden',
  },
  downView: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: '120%',
    width: '100%',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 100,
    borderRadius: 20,
  },
  downView1: {
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 50,
  },
  text: {
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  text2: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 70,
    lineHeight: 17,
    marginTop: 10,
  },
  eyeBtn1: {
    position: 'absolute',
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '10%',
    right: 15,
    top: 18,
  },
  buttonView: {
    marginHorizontal: 20,
    marginTop: 570,
  },
});

export default styles;
