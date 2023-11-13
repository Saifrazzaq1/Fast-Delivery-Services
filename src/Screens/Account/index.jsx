import {StyleSheet,TouchableOpacity,Image, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import React from 'react';
import {useSelector} from 'react-redux';
import Images from '../../Assets'
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const user = useSelector(s => s.auth.user);
  const navigation = useNavigation();
  
  return (
    <View style={{backgroundColor:'#fff',flex:1}}>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginTitle="Account"
        logoutIcon
        logoutSize={20}
      />
      <View style={styles.mainview}>
       <View style={{flexDirection:'row',alignItems:'center'}}> 
       <Image style={styles.dpview} source={Images.dp}/>
        <View style={{alignSelf:'center', }}><Text style={styles.username}>{user.name}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={styles.countryImg}source={Images.palestine}/>
        <Text style={styles.useraddress}>{user.email}</Text>
        </View>
        </View>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Setting')
        }}>
        <Image style={{height:25,width:25,marginLeft:70}}source={Images.setting}/>
        </TouchableOpacity>
        </View>
      <View style={styles.btnsview}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Order')}} style={{alignSelf:'flex-start',marginBottom:30,flexDirection:'row' ,alignItems:'center'}}>
      <Image style={styles.btnsimg}source={Images.pad}/>
        <Text style={styles.btnsname}>Your orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Offers')}} style={{alignSelf:'flex-start',marginBottom:30,flexDirection:'row' ,alignItems:'center'}}>
      <Image style={styles.btnsimg}source={Images.tag}/>
        <Text style={styles.btnsname}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Notification')}} style={{alignSelf:'flex-start',marginBottom:30,flexDirection:'row' ,alignItems:'center'}}>
      <Image style={styles.btnsimg}source={Images.Group}/>
        <Text style={styles.btnsname}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('FdsPay')}} style={{alignSelf:'flex-start',marginBottom:30,flexDirection:'row' ,alignItems:'center'}}>
      <Image style={styles.btnsimg}source={Images.walet1}/>
        <Text style={styles.btnsname}>FDS Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Favorite')}} style={{alignSelf:'flex-start',marginBottom:30,flexDirection:'row' ,alignItems:'center'}}>
      <Image style={styles.btnsimg}source={Images.heart}/>
        <Text style={styles.btnsname}>Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Help')}} style={{alignSelf:'flex-start',marginBottom:30,flexDirection:'row' ,alignItems:'center'}}>
      <Image style={styles.btnsimg}source={Images.bulb}/>
        <Text style={styles.btnsname}>Get help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('About')}} style={{alignSelf:'flex-start',marginBottom:30,flexDirection:'row' ,alignItems:'center'}}>
      <Image style={styles.btnsimg}source={Images.clock}/>
        <Text style={styles.btnsname}>About</Text>
        </TouchableOpacity>
    
      </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  mainview:{
    marginHorizontal:20,
  },
  btnsview:{
    marginTop:40
  },
  countryImg:{
    height:15,
    marginLeft:10,
    width:15
  },  btnsimg:{
    height:28,
    marginLeft:10,
    width:28
  },
  dpview:{
    height:90,
    width:90,
    backgroundColor:'#ff1',
    borderRadius:45,
  },
  username:{
    color:'#000',
    fontSize:18,
    fontWeight:'500',
    marginLeft:10
    
  },  btnsname:{
    color:'#000',
    fontSize:18,
    fontWeight:'400',
    marginLeft:10
    
  },
  useraddress:{
    color:'grey',
    fontSize:14,
    marginLeft:3
  }
});
