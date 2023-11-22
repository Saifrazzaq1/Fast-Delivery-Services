import { StyleSheet } from "react-native";


export default StyleSheet.create({
  body:{flex: 1, backgroundColor: '#fff'},
  main:{flexDirection: 'row', alignItems: 'center'},
  mainview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '76%',
  },
  pro:{alignSelf: 'center', marginLeft: 10},
    dpview: {
      height: 50,
      width: 50,
      backgroundColor: '#ff1',
      borderRadius: 45,
    },
    username: {
      color: '#000',
      fontSize: 14,
      fontWeight: '400',
    },
    btnsname: {
      color: '#000',
      fontSize: 18,
      fontWeight: '400',
      marginLeft: 10,
    },
    useraddress: {
      color: 'grey',
      fontSize: 11,
      marginLeft: 3,
    },
    btnsview: {
      marginTop: 20,
      marginHorizontal: 40,
    },
    btnsimg: {
      height: 28,
      marginLeft: 10,
      width: 28,
    },
  
 
    btnsnames: {
      color: '#1C7584',
      fontSize: 14,
      marginLeft: 10,
      marginTop: 5,
    },
    line: {
      marginVertical: 15,
      height: 0.4,
      backgroundColor: 'grey',
      zIndex: 1000,
    },
  });
  