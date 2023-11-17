import {StyleSheet} from 'react-native';



export default  StyleSheet.create({

  Mainview: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  text: {
      fontSize: 20,
      fontWeight: '600',
      color: 'black'
  },
  text1: {
      fontSize: 16,
      fontWeight: '400',
      color: 'black',
      textAlign: 'center',

  },
  btn: {
      width: '90%',
      height: 60,
      alignSelf: 'center',
      marginBottom: 30
  },
  main:{
      flex: 1,
      padding: 20,
      
  },
  card:{
      width:'100%',
      height:80,
      borderRadius:8,
      borderWidth:1,
      borderColor:'#E1E1E1',
      flexDirection:'row',
     alignItems:'center',
     padding:20,
     marginBottom:20
  },
  CardText:{
    fontSize:18,
    fontWeight:'400',
    color:'#454238'
  },
  CardT1:{
    fontSize:14,
    fontWeight:'500',
    color:'#454238'
  },
  CardT2:{
    fontSize:14,
    fontWeight:'500',
    color:'#1C7584'
  },
  seeText:{
    fontSize:14,
    fontWeight:'500',
    color:'red'
  },
  img:{
    width:58,
    height:36,
   marginRight:10
  },
  cardimg:{alignSelf:'center', marginTop:100},
  Received:{
   
      width:'100%',
      height:80,
      borderRadius:8,
      borderBottomWidth:1,
      borderColor:'#E1E1E1',
      flexDirection:'row',
     alignItems:'center',
     paddingVertical:15,
   
  
  },
  Rectext:{
    fontSize:16,
    fontWeight:'600',
    color:'#454238',
    textAlign:'right'
  },
  Rectext1:{
    fontSize:14,
    fontWeight:'400',
    color:'#454238'
  }
  
});
