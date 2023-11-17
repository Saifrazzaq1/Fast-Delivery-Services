import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainview: {
   flex:1,
    margin: 20,
   
  },
  Card:{
    backgroundColor:'white',
    height:330,
    width:'100%',
    padding:20,
    borderRadius:12
  },
  text: {
    color: '#919B9B',
    fontSize: 12,
    fontWeight: '500',
    marginBottom:6
  },
  text1: {
    color: 'black',
    fontSize: 16,
    fontWeight:'500',
    marginBottom:12,
    marginRight:90
  },
  text2: {
    color: 'red',
    fontSize: 16,
    fontWeight:'500'
  },
  pay:{
    width:'100%',
    height:64,
    padding:20,
    paddingBottom:10,
    borderRadius:10,
    flexDirection:'row',
    backgroundColor:'rgba(224, 40, 28, 0.05)',
    marginBottom:18
  },
  items:{
    padding:15,
    width:280,
    height:96,
    borderRadius:12,
    borderWidth:1,
    borderColor:'rgba(175, 175, 175, 0.50)',
    flexDirection:'row',
    marginRight:20
  },
  itemTitle:{
    color: 'black',
    fontSize: 16,
    fontWeight:'500',
    marginBottom:5,
  },
  itemPrice:{
      color: 'red',
      fontSize: 14,
      fontWeight:'500'
  },
  itemImg:{
     width:98,
     height:66,
     borderRadius:10,
     marginLeft:15
  }
});
