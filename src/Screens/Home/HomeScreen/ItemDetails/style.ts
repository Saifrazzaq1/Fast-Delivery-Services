import { StyleSheet,  } from "react-native";
import { fontRef, heightRef, widthRef } from "../../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
       
    },
    // banner:{
    //     width:'100%',
    //     height:200 * heightRef,
    //     backgroundColor:'#1C7584',
    //     paddingVertical:24 * heightRef,
    //     paddingHorizontal:20* widthRef,
    //    justifyContent:'space-between',
    //     flexDirection:'row'
    // },
    // img:{
    //     height:145 * heightRef,
    //     width:145 * widthRef,
        
    // },
    text:{
        fontSize:18 * fontRef,
        fontWeight:'600',
        color:'black',
       
    },
    // text1:{
    //   width:147 * widthRef,
    //   fontSize:13 * fontRef,
    //   fontWeight:'400',
    //   color:'white',
    //   paddingBottom:10 * heightRef
    // },
    btn:{
        width:'90%',
        borderRadius:40,
        height:55 * heightRef,
        backgroundColor:'#1C7584',
        margin:20,
        flexDirection:'row',
        paddingHorizontal:30,
        alignItems:'center'
    },
    t1:{
        fontSize:16 * fontRef,
        fontWeight:'500',
        color:'white',
     
    },
    t2:{
      fontSize:16 * fontRef,
      fontWeight:'500',
      color:'white',
      marginLeft:100
  },
  btn1:{
    height:28,
    width:28,
    backgroundColor:'rgba(255, 255, 255, 0.10)',
    borderRadius:5,
    marginRight:10,
    alignItems:'center'
  }
   
});

export default styles;