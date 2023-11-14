import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import Button from '../../../Components/Button';
import style from './style';

const ChoiceScreen = ({navigation}) => {
  return (
    <View style={style.viewOne}>
      <Header
        headerBg
        headerbgcolor={'white'}
        headerShadow
        guestbtn
        logintextcolor={"#1C7584"}
        loginbtn
        loginTitle={'Choose Account'}
        loginmarginleft={"40%"}
      />
      <View style={{flex:1, justifyContent:'center', paddingHorizontal:20}}>
      <Button 
              onPress={() => {
                navigation.navigate('Login');
              }}
              buttonStyle={{ width: '100%', marginBottom:10 }}
              btnheight={55}
              btnColor="#1C7584"
              textColor="#fff"
              unseen={2}
              justifyContent="center"
              textStyle={{fontSize: 16}}
              title={'Continue as User'}
            />
             <Button
              onPress={() => {
                navigation.navigate('RiderLogin');
              }}
              buttonStyle={{ width: '100%', }}
              btnheight={55}
              btnColor="green"
              textColor="#fff"
              unseen={2}
              justifyContent="center"
              textStyle={{fontSize: 16}}
              title={'Continue as Rider'}
            />
      </View>
     
     
    </View>
  );
};

export default ChoiceScreen;
