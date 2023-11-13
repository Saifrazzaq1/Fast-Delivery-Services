import { StyleSheet,  } from "react-native";
import { fontRef, heightRef, widthRef } from "../../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: 'black',
      marginBottom: 5,
      marginTop: 10,
    },
    body: {
      fontSize: 12,
      fontWeight: '400',
      color: 'gray',
      width:230
    },
    price: {
      fontSize: 14,
      fontWeight: '500',
      color: '#EF5DA8',
      marginRight: 30,
      marginTop: 5,
      marginBottom: 10,
    },
    image:{
      width:134,
      height:88,
      borderRadius:10,
      marginLeft:10
    },
    divider: {
      margin:10,
       height: 0.6,
       backgroundColor: 'rgba(175, 175, 175, 0.90)',
     },
     t1:{
      fontSize:14,
      color:'black',
      fontWeight:'500'
     },
     t2:{
      fontSize:12,
      color:'gray',
      fontWeight:'400'
     },
     t3:{
      fontSize:12,
      color:'black',
      fontWeight:'400'
     },

});

export default styles;