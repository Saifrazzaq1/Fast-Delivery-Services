import { StyleSheet,  } from "react-native";
import { fontRef, heightRef, widthRef } from "../../../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
    },
    btn: {
        backgroundColor:'white',
        width:'90%',
        borderRadius:40,
      
    },
    img: { 
        height: '100%',
        width: '100%',
        justifyContent:'space-between',
        resizeMode:'cover'
        
    },
    btn1: {
        backgroundColor: '#1C7584',
        padding: 15,
        marginHorizontal:10 * heightRef,
        width:'90%',
        alignSelf:'center',
        borderRadius: 40,
        marginBottom:50 * heightRef
    },

     t1:{
      fontSize:14,
      color:'gray',
      fontWeight:'500'
     },
     t2:{
      fontSize:22,
      color:'black',
      fontWeight:'600'
     },
     line: {
        width: 58,
        height: 5,
        marginRight: 10, // Adjust the spacing between lines as needed
        borderRadius:10
       
      },
      divider: {
        margin:10,
         height: 0.6,
         backgroundColor: 'rgba(175, 175, 175, 0.90)',
       },
       t3:{
        fontSize:14,
        color:'black',
        fontWeight:'500',
        
       },
       t4:{
        fontSize:12,
        color:'gray',
        fontWeight:'400',
       },
       t5:{
        fontSize:16,
        color:'black',
        fontWeight:'500'
       },
       img1:{
        height:38,
        width:38
      },
      img2:{
        width:'100%',
        height:180 * heightRef,
        marginBottom:20,
        marginTop:20

    },
    //  t3:{
    //   fontSize:12,
    //   color:'black',
    //   fontWeight:'400'
    //  },

});

export default styles;