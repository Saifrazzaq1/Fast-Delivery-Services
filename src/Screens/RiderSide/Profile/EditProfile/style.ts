import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body:{flex: 1, backgroundColor: 'white'},
  mainview: {
    marginTop: 40,
    margin: 20,
   
  },
  text: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text1: {
    color: '#A0A0A0',
    fontSize: 12,
    textAlign: 'left',
    marginTop: 10,
  },
  text3: {
    color: '#000',
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 2,
    fontWeight: '500',
    alignSelf: 'center',
  },

  text4: {
    color: '#A0A0A0',
    fontWeight: '600',
    marginTop: 30,
    fontSize: 14,
    textAlign: 'left',
  },
  text5: {
    color: '#E0281C',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'left',
  },
  dp:{
    height:90,
    width:90,
    backgroundColor:'#ff1',
    borderRadius:45,
  },
  btn:{
    width:16,
    height:16,
    borderRadius:10,
    backgroundColor:'#1C7584',
   justifyContent:'center',
   alignItems:'center',
   position:'absolute',
   right:15,
   top:75
  }
});
