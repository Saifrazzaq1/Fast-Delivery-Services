import { StyleSheet, } from "react-native";
import { fontRef, heightRef, widthRef } from "../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: 'white',
    },
    top: {
        backgroundColor: 'white',
        width: "100%",
        height: 50,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    topItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    img: { tintColor: 'black', height: 25 * heightRef, width: 25 * widthRef },
    text: {
        fontSize: 14 * fontRef,
        fontWeight: '500',
        color: 'black',

    },
    text1: {
        fontSize: 18 * fontRef, fontWeight: '500',
        color: 'black', paddingVertical: 10,
    },
    topcard: {
        width: 310 * widthRef,
        height: 264 * heightRef,
        backgroundColor: 'white',
        marginRight: 10
    },
    topCardimg: {
        width: '100%',
        height: 180 * heightRef,
        borderRadius: 20,
        marginBottom: 10,

    },
    t1: {
        fontSize: 18 * fontRef,
        fontWeight: '500',
        color: 'black',
        paddingRight: 40,
    },
    t2: {
        fontSize: 12, color: 'black',
        fontWeight: '400',
    },
    t3: {
        fontSize: 14,
        color: '#A0A0A0',
        fontWeight: '400',
        paddingHorizontal:5

    },
    resCard: {
        height: 131,
        width: 360,
        backgroundColor: 'white',
        marginHorizontal: 6,
        flexDirection: 'row',
        marginBottom:10
    },
    resImg: {
        height: 131,
        width: 140,
        borderRadius: 20,
    },
    rest1: {

        fontSize: 18 * fontRef,
        fontWeight: '500',
        color: 'black',
        

    },
    resMid:{
        paddingLeft:10,
        justifyContent:'space-around'
    },
    t4:{
        fontSize: 12,
        color: '#EF5DA8',
        fontWeight: '500',

    }
    //     text1:{
    //       width:147 * widthRef,
    //       fontSize:13 * fontRef,
    //       fontWeight:'400',
    //       color:'white',
    //       paddingBottom:10 * heightRef
    //     },
    //     btn:{
    //         width:110 * widthRef,
    //         borderRadius:40,
    //         height:45 * heightRef

    //     },
    //     t1:{
    //         fontSize:20 * fontRef,
    //         fontWeight:'600',
    //         color:'black',
    //         padding:15
    //     },
    //    fds:{
    //     flex:1,
    //     flexDirection:'row',
    //     paddingHorizontal:10 * widthRef,
    //     marginVertical:20 * heightRef
    //    },

    //   PopCard:{
    //     width: 145 * widthRef,
    //     height: 180 * heightRef,
    //     backgroundColor: 'white',
    //     marginLeft: 10 * widthRef,
    //     marginBottom:10 * heightRef
    //   },
    //   poptext:{
    //    paddingLeft:5 * widthRef,
    //     fontSize:14 * fontRef,
    //     width:100 * widthRef,
    //     color:'black',
    //     fontWeight:'500', // Add space between image and text
    //     marginTop:10 * heightRef,
    //     paddingBottom:5 * widthRef
    //   },
    //   popimg:{
    //         width: 145 * widthRef, // Customize image width as needed
    //         height: 108 * heightRef, // Customize image height as needed
    //         borderRadius:20,
    //         resizeMode:'cover'  
    //   },
    //   popt1:{
    //      fontSize:12 * fontRef ,
    //      fontWeight:'400',
    //      color:"black",
    //      paddingLeft:5 * widthRef,
    //      textAlign:'center'
    //   },
    //   offerImg:{
    //     width: 300 * widthRef, // Customize image width as needed
    //     height: 180 * heightRef, // Customize image height as needed
    //     borderRadius:20,
    //     resizeMode:'contain' ,
    //     margin:5,
    //     marginBottom:20 * heightRef
    //   }

});

export default styles;