import { StyleSheet } from "react-native";
import { fontRef, heightRef, widthRef } from "../../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor:'white',
    },
    img: {
        height: 497 * heightRef,
        width: '100%',
    },
    btn: {
        backgroundColor: '#1C7584',
        marginBottom: 100 * heightRef,
        borderRadius: 40,
        width:'90%',
        alignSelf:'center',
        
    },
    text:
    {fontSize:16 * fontRef,fontWeight:'400', color:'white', textAlign:'right', padding:30}
   
});

export default styles;