import { StyleSheet,  } from "react-native";
import { heightRef, widthRef } from "../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white'
    },
    main:{
       flex:1,
       backgroundColor:'white',
       alignItems:'center',
       padding:20,
       
    },
    img: { 
        height:120,
        width:160,
        margin:10
    },
    btn: {
        backgroundColor:'white',
        width:'100%',
        borderRadius:40,
        paddingHorizontal:10 * widthRef,
    },
    btn1: {
        backgroundColor: '#1C7584',
        padding: 15,
        width:'100%',
        alignSelf:'center',
        borderRadius: 40,
        marginTop:60 * heightRef,
        marginBottom:10 * heightRef

    },
    social:{
        width:'100%',
        borderRadius:40,
        paddingHorizontal:30 * widthRef,
        marginVertical:2 * heightRef,
    },
    text:{
        fontSize:20,
        fontWeight:'600',
        color:'black',
        textAlign:'center'
    },
    t1:{
        fontSize:22,
        fontWeight:'600',
        color:'black',
        textAlign:'center',
        marginTop:50
    },
    t2:{
        fontSize:14,
        fontWeight:'400',
        textAlign:'center',
        padding:10,
        color:'dimgray'
    }

   
});

export default styles;