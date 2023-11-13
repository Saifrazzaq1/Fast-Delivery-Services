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
    img:{
        width:'100%',
        height:180 * heightRef,
        marginBottom:20

    },
    btn1: {
        backgroundColor: '#1C7584',
        padding: 15,
        marginHorizontal:10 * heightRef,
        width:'90%',
        alignSelf:'center',
        borderRadius: 40,
        marginBottom:10 * heightRef
    },
   img1:{
     height:38,
     width:38
   },
   modal:{
      height:612 * heightRef,
      width:'112%',
      backgroundColor:'white',
      padding:20,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      position:'absolute',
      bottom:-30,
      left:-20
   },
    divider: {
      margin:10,
       height: 0.6,
       backgroundColor: 'rgba(175, 175, 175, 0.90)',
     },
     t1:{
      fontSize:14,
      color:'black',
      fontWeight:'500',
      
     },
     t2:{
      fontSize:12,
      color:'gray',
      fontWeight:'400',
     },
     t3:{
      fontSize:16,
      color:'black',
      fontWeight:'500'
     },
     paybtn:{
        paddingHorizontal:10, 
        paddingVertical:10,
        backgroundColor:'rgba(28, 117, 132, 0.05)',
         height:80,
         borderRadius:20,
         alignItems:'center'
        },
        t4:{
            fontSize:12,
            color:'black',
            fontWeight:'400',
           },
           field:{
            width:'100%',
            borderBottomWidth:0.7 * heightRef,
            borderBottomColor:'black',
            fontSize:16,
            fontWeight:'500',
            color:'black'
            
          },
});

export default styles;