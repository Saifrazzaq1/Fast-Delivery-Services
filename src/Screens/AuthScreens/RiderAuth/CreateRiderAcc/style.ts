import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainview: {
    margin: 20,
  },
  
  text: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  t1:{ fontSize: 19, fontWeight: '500', color: 'white' },
  progressView:{ flexDirection: 'row', margin: 30 },
  Progbtn: {
    height: 34,
    width: 34,
    borderRadius: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Progbtn1: {
    height: 34,
    width: 34,
    borderRadius: 40,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ProgView:{height:5   , width:118 ,backgroundColor:'red', alignSelf:'center'},
  ProgView1:{height:5   , width:118 ,backgroundColor:'#F6F6F6', alignSelf:'center'},

  ProbText:{fontSize:19, fontWeight:'500', color:'white',},
  ProbText1:{fontSize:19, fontWeight:'500', color:'#A0A0A0',}
});
