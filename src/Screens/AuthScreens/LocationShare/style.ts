import { StyleSheet } from "react-native";
import { fontRef, heightRef } from "../../../config/screenSize";


const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: 'white'
    },
    main: {
       
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        top: -20
    },
    img: {
        height: 597 * heightRef,
        width: '100%',
    },
    btn: {
        backgroundColor: '#1C7584',
        width: '95%',
        borderRadius: 40,
    },
    btn1: {
        backgroundColor: 'white',
    },
    text:
    {
        fontSize: 24 * fontRef, fontWeight: '600', color: 'black',
        textAlign: 'right', padding: 10, paddingTop: 30 * heightRef
    }

});

export default styles;