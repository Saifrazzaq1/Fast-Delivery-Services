import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainview: {
   flex:1,
    margin: 20,
   
  },
  Card:{
    backgroundColor:'white',
    height:135,
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
  text3: {
    color: 'black',
    fontSize: 16,
    fontWeight:'500',
    marginVertical:20
   
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
    width:"100%",
    height:96,
    borderRadius:12,
    borderWidth:1,
    borderColor:'rgba(175, 175, 175, 0.50)',
    flexDirection:'row',
    marginBottom:20
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
     marginLeft:90
  }, 
  map:{
    marginBottom: 10,
    height: 117,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    
},
mapCard:{
   width:'100%',
   height:225,
   backgroundColor:'white',
   padding:20,
   borderRadius:12,
   marginBottom:20
},
maptext:{
  fontSize:12,
  fontWeight:'400',
  color:'black', marginBottom:5
},
maptext1:{
  fontSize:14,
  fontWeight:'500',
  color:'black',
  marginBottom:5
},

maptext2:{
  fontSize:12,
  fontWeight:'400',
  color:'#A0A0A0'
}
});
