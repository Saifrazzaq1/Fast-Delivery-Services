import { StyleSheet, } from "react-native";
import { fontRef, heightRef, widthRef } from "../../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        
        backgroundColor: 'white',
    },
    headImg:{
        width:'100%',
        height:230 * heightRef,
        paddingTop:30,
        flexDirection:'row'
        
    },
    icon:{
        
        height:20,
        width:20,
        tintColor:'black'
    },
    iconbg:{
        backgroundColor:'white',
        height:35,
        width:35,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
       marginLeft:15,
       marginRight:220
    },
    iconbg1:{
        backgroundColor:'white',
        height:35,
        width:35,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
       marginLeft:15
    },
    text:{
        fontSize:18,
        fontWeight:'500',
        color:'black'
    },
    t1:{
        fontSize:12,
        fontWeight:'400',
        color:'#1C7584'
    },
    t2:{
        fontSize:14,
        fontWeight:'400',
        color:'gray',
        marginTop:10
    },
    divider: {
       margin:10,
        height: 0.6,
        backgroundColor: 'rgba(175, 175, 175, 0.40)',
      },
      image:{
        alignSelf:'center',
        height:24,
        width:24
      },
      btn:{
        height:70,
        width:220,
        paddingLeft:40,
        borderRadius:10,
        margin:10
      }
 
});

export default styles;