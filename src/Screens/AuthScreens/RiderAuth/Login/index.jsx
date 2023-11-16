import React from 'react';
import {Image, Text, View} from 'react-native';

import style from './style';
import Button from 'src/Components/Button';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Assets from 'src/Assets';

const RiderLogin = ({navigation}) => {
  return (
    <View style={style.viewOne}>
     
      <View style={{flex:1, justifyContent:'center', paddingHorizontal:20}}>
        <Image source={Assets.Riderlog} style={{ width:'100%'}}/>
        <Text style={style.text3}>Welcome Fastest Delivery Service Rider App</Text>
      <Button 
              onPress={() => {
                navigation.navigate('RiderSignin');
              }}
              buttonStyle={{ width: '100%', marginBottom:10 }}
              btnheight={55}
              btnColor="#1C7584"
              textColor="#fff"
              unseen={2}
              justifyContent="center"
              textStyle={{fontSize: 16}}
              title={'Login'}
            />
             <Button
              onPress={() => {
                navigation.navigate('RiderCreateAccount');
              }}
              buttonStyle={{ width: '100%',borderWidth:1, borderBlockColor:'#1C7584' }}
              btnheight={55}
              btnColor="white"
              textColor="#fff"
              unseen={2}
              justifyContent="center"
              textStyle={{fontSize: 16, color:'#1C7584'}}
              title={'Signup'}
            />
            <TouchableHighlight style={{}}>

            </TouchableHighlight>
      </View>
     
     
    </View>
  );
};

export default RiderLogin;
