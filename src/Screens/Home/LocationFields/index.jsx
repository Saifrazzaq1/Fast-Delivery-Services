import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import style from './style';

const LocationFields = ({route}) => {
  console.log("🚀 ~ file: index.jsx:13 ~ LocationFields ~ route:", route)
  const [isChecked, setisChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const navigation=useNavigation();
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const {total,item,itemPrice,count}=route.params;
  return ( 
    <View style={{backgroundColor:'#fff'}}>
{console.log(total)}
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        headerShadow
        logintextcolor={'black'}
        loginmarginleft={110}
        backIcon
        loginTitle={'Guest CheckOut'}
      />
      <View style={style.mainview}>
        <ScrollView>
        <Text style={style.text}>Contact details</Text>
        <Textfield
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          placeholder={'First Name'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}

        />
               <Textfield
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          placeholder={'Last Name'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
        />
               <Textfield
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          placeholder={'landline number (optional)'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
        />
        <Textfield
          value={phone}
          onChangeText={setPhone}
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Phone Number'}
        />
       <View style={{marginVertical:20,height:180,width:'100%', borderRadius: 20, overflow: 'hidden'}}> 
        <MapView style={{ flex:1}} 
          provider={PROVIDER_GOOGLE}
      region={region} onRegionChangeComplete={region => setRegion(region)}>
  <Marker coordinate={region} >
  <Callout>
    <Text>I'm here</Text>
  </Callout>
  </Marker>
</MapView>
<Button
btnheight={55}
unseen={2}
buttonStyle={{width:'50%',justifyContent:'center',alignSelf:'center',marginTop:'-10%'}}
btnColor='#E0281C'
title={'Change Location'}
textColor={'#fff'}
showtitle2={true}
textStyle={{texlAlign:'center'}}
onPress={()=>{
  navigation.navigate('SelectLocation')
}}
/>
</View>
        <Textfield
          value={email}
          onChangeText={setEmail}
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Email'}
        />
        <Textfield
          value={password}
          onChangeText={setPassword}
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Area'}
        />
                <Textfield
          value={password}
          onChangeText={setPassword}
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Address type'}
        />
                <Textfield
          value={password}
          onChangeText={setPassword}
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Street'}
        />
                <Textfield
          value={password}
          onChangeText={setPassword}
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Building'}
        />
                <Textfield
          value={password}
          onChangeText={setPassword}
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Apartment No'}
        />
                <Textfield
          value={password}
          onChangeText={setPassword}
          borderBottomWidth={1}
          borderColor={'#B7B7B7'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Additional Directions (optional)'}
        />
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            marginTop: 385,
          }}>
        </View>
        <Button
          onPress={()=>{
            navigation.navigate('CheckOutDetails',{total,itemPrice,item:route?.params?.item,count})
          }}
          btnheight={60}
          unseen={2}
          title={'Continue'}
          textColor={'#fff'}
          justifyContent={'center'}
          btnColor="#1C7584"
          buttonStyle={{marginTop: 60}}
        />
        </ScrollView>
      </View>
    </View>
  );
};
export default LocationFields;
const styles = StyleSheet.create({});
