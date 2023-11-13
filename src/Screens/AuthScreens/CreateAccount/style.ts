import { StyleSheet,  } from "react-native";
import { fontRef, heightRef, widthRef } from "../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
       
    },
    main:{
       flex:1,
       backgroundColor:'white',
       padding:20,
       
    },
  
    btn: {
        backgroundColor:'white',
        width:'100%',
        borderRadius:40,
    },
    btn1: {
        backgroundColor: '#1C7584',
        padding: 15,
        width:'100%',
        alignSelf:'center',
        borderRadius: 40,
        marginTop:10 * heightRef,
        marginBottom:0 * heightRef

    },
    
    text:{
        fontSize:22 * fontRef,
        fontWeight:'600',
        color:'black',
        marginBottom:10 * heightRef
    },
   field:{
     width:'100%',
     borderBottomWidth:0.7 * heightRef,
     borderBottomColor:'black',
     fontSize:16,
     fontWeight:'500',
     color:'black'
     
   },
   t1:{
    fontSize:16 * fontRef,
        fontWeight:'600',
        color:'#A0A0A0',
        textAlign:'right'
   },
   t2:{
    fontSize:14 * fontRef,
        fontWeight:'500',
        color:'#A0A0A0',
       padding:5,
       
   },
   
});

export default styles;