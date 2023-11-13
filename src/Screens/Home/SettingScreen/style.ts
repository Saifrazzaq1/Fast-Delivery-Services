import { StyleSheet,  } from "react-native";
import { heightRef } from "../../../config/screenSize";


const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
    },
    btn: {
        backgroundColor:'white',
        width:'100%',
        height:65,
        flexDirection:'row',
        paddingVertical:20
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
   
    title: {
      fontSize: 18,
      fontWeight: '500',
      color: 'black',
     
    },
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
     t1:{
      fontSize:14,
      color:'#A0A0A0',
      fontWeight:'400'
     },
     t2:{
      fontSize:16,
      color:'black',
      fontWeight:'500',
      marginLeft:10
     },
    //  t3:{
    //   fontSize:12,
    //   color:'black',
    //   fontWeight:'400'
    //  },

});

export default styles;