import { StyleSheet, } from "react-native";
import { fontRef, heightRef, widthRef } from "../../config/screenSize";

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal:15,
        paddingVertical:20
    },
  
    image:{
        
        height:88,
        width:135,
        borderRadius:20
    },
    selected: {
        borderLeftWidth: 4, // Add a blue border to the left side
        borderLeftColor: '#1C7584',
       justifyContent:'space-between'
      },
    // iconbg:{
    //     backgroundColor:'white',
    //     height:35,
    //     width:35,
    //     borderRadius:20,
    //     justifyContent:'center',
    //     alignItems:'center',
    //    marginLeft:15,
    //    marginRight:220
    // },
    // iconbg1:{
    //     backgroundColor:'white',
    //     height:35,
    //     width:35,
    //     borderRadius:20,
    //     justifyContent:'center',
    //     alignItems:'center',
    //    marginLeft:15
    // },
    text:{
        fontSize:18,
        fontWeight:'600',
        color:'black'
    },
    t1:{
        fontSize:16,
        fontWeight:'500',
        color:'black'
    },
    t2:{
        fontSize:12,
        fontWeight:'400',
        color:'gray',
        marginTop:5,
        width:220
    },
    t3:{
        fontSize:10,
        fontWeight:'500',
        color:'#EF5DA8',
        marginTop:15
    }
    // divider: {
    //    margin:10,
    //     height: 0.6,
    //     backgroundColor: 'rgba(175, 175, 175, 0.40)',
    //   },
    //   image:{
    //     alignSelf:'center',
    //     height:24,
    //     width:24
    //   },
    //   btn:{
    //     height:70,
    //     width:220,
    //     paddingLeft:40,
    //     borderRadius:10,
    //     margin:10
    //   }
 
});

export default styles;