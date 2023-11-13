import { StyleSheet,  } from "react-native";
import { fontRef, heightRef, widthRef } from "../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
    },
    banner:{
        width:'100%',
        height:200 * heightRef,
        backgroundColor:'#1C7584',
        paddingVertical:24 * heightRef,
        paddingHorizontal:20* widthRef,
       justifyContent:'space-between',
        flexDirection:'row'
    },
    img:{
        height:145 * heightRef,
        width:145 * widthRef,
        
    },
    text:{
        fontSize:20 * fontRef,
        fontWeight:'700',
        color:'white',
        paddingTop:10 * heightRef,
        paddingBottom:5 * widthRef
    },
    text1:{
      width:147 * widthRef,
      fontSize:13 * fontRef,
      fontWeight:'400',
      color:'white',
      paddingBottom:10 * heightRef
    },
    btn:{
        width:110 * widthRef,
        borderRadius:40,
        height:45 * heightRef
        
    },
    t1:{
        fontSize:20 * fontRef,
        fontWeight:'600',
        color:'black',
        padding:15
    },
   fds:{
    flex:1,
    flexDirection:'row',
    paddingHorizontal:10 * widthRef,
    marginVertical:20 * heightRef
   },
   
  PopCard:{
    width: 145 * widthRef,
    height: 180 * heightRef,
    backgroundColor: 'white',
    marginLeft: 10 * widthRef,
    marginBottom:10 * heightRef
  },
  poptext:{
   paddingLeft:5 * widthRef,
    fontSize:14 * fontRef,
    width:100 * widthRef,
    color:'black',
    fontWeight:'500', // Add space between image and text
    marginTop:10 * heightRef,
    paddingBottom:5 * widthRef
  },
  popimg:{
        width: 145 * widthRef, // Customize image width as needed
        height: 108 * heightRef, // Customize image height as needed
        borderRadius:20,
        resizeMode:'cover'  
  },
  popt1:{
     fontSize:12 * fontRef ,
     fontWeight:'400',
     color:"black",
     paddingLeft:5 * widthRef,
     textAlign:'center'
  },
  offerImg:{
    width: 300 * widthRef, // Customize image width as needed
    height: 180 * heightRef, // Customize image height as needed
    borderRadius:20,
    resizeMode:'contain' ,
    margin:5,
    marginBottom:70 * heightRef
  }
   
});

export default styles;