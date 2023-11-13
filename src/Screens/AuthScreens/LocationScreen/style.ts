import { StyleSheet,  } from "react-native";
import { heightRef, widthRef } from "../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white'
    },
    
    img: { 
        height: '100%',
        width: '100%',
        justifyContent:'space-between',
        
    },
    btn: {
        backgroundColor:'white',
        width:'90%',
        borderRadius:40,
        marginVertical:20 * heightRef,
      
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
   
});

export default styles;