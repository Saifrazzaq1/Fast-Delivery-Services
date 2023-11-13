import { StyleSheet,  } from "react-native";
import { heightRef, widthRef } from "../../../../config/screenSize";


const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
       
    },
    card:{
        width:'80%',
        height:207 * heightRef,
        backgroundColor:'#1C7584',
        borderRadius:12,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        paddingLeft:38
    },
    cardr:{
        width:70* widthRef,
        height:207 * heightRef,
        backgroundColor:'#E0281C',
        borderRadius:12,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        alignSelf:'flex-end',
        paddingHorizontal:18.11,
        paddingTop:27.16,
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:35
    },
    logo:{
         marginTop:25,
         width:58,
         height:33
    },
    star:{
       marginLeft:200,
       position:'absolute',
       marginTop:7
    },
    star1:{
        marginLeft:190,
        position:'absolute',
        top:50,
         
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
      fontSize:20.5,
      color:'white',
      fontWeight:'400',
      marginTop:34,
      marginBottom:13
     },
     t2:{
      fontSize:20.5,
      color:'white',
      fontWeight:'700',
      
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