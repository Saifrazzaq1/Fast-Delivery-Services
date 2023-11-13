import { StyleSheet,  } from "react-native";
import { fontRef, heightRef, widthRef } from "../../../../../config/screenSize";

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
        position:'absolute',
        bottom:-16,
         left:100,
         width:'45%',
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
    img:{
        width:'100%',
        height:180 * heightRef,
        marginBottom:20

    }
    // title: {
    //   fontSize: 16,
    //   fontWeight: '500',
    //   color: 'black',
    //   marginBottom: 5,
    //   marginTop: 10,
    // },
    // body: {
    //   fontSize: 12,
    //   fontWeight: '400',
    //   color: 'gray',
    // },
    // price: {
    //   fontSize: 14,
    //   fontWeight: '500',
    //   color: '#EF5DA8',
    //   marginRight: 90,
    //   marginTop: 5,
    //   marginBottom: 10,
    // },
    // image:{
    //   width:134,
    //   height:88,
    //   borderRadius:10,
    //   marginLeft:10
    // },
    // divider: {
    //   margin:10,
    //    height: 0.6,
    //    backgroundColor: 'rgba(175, 175, 175, 0.90)',
    //  },
    //  t1:{
    //   fontSize:14,
    //   color:'black',
    //   fontWeight:'500'
    //  },
    //  t2:{
    //   fontSize:12,
    //   color:'gray',
    //   fontWeight:'400'
    //  },
    //  t3:{
    //   fontSize:12,
    //   color:'black',
    //   fontWeight:'400'
    //  },

});

export default styles;