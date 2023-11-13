import { StyleSheet,  } from "react-native";
import { heightRef, widthRef } from "../../../../config/screenSize";


const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
       
    },
   
     btn:{
        width:"90%",
        alignSelf:'center',
        borderRadius:40,

     },
    divider: {
      margin:10,
       height: 0.6,
       backgroundColor: 'rgba(175, 175, 175, 0.90)',
     },
     t1:{
      fontSize:22,
      color:'black',
      fontWeight:'600',
      marginBottom:10
     },
     t2:{
      fontSize:14,
      color:'rgba(41, 41, 41, 1)',
      fontWeight:'400',
      marginBottom:320
     },
     t3:{
        fontSize:12.5,
        color:'rgba(255, 255, 255, 0.8)',
        fontWeight:'400',
       
       
     },
     t4:{
        fontSize:18,
        color:'white',
        fontWeight:'600',
        transform: [{ rotate: '-90deg'}],
        width:50,
       

     },

});

export default styles;