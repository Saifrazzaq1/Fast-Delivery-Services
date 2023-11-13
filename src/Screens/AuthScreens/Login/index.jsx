import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import Button from '../../../Components/Button';
import style from './style';

const Login = ({navigation}) => {
  return (
    <View style={style.viewOne}>
      <Header
        headerBg
        headerbgcolor={'white'}
        headerShadow
        backIcon
        guestbtn
        logintextcolor={"#1C7584"}
        guestTitle={'Guest'}
        loginbtn
        loginTitle={'Login'}
        loginmarginleft={"55%"}
      />
      <View style={style.mainView}>
        <Image style={style.imagebike} source={Images.bikelogo} />
        <Text style={style.text3}>Fastest Delivery service</Text>
        <Text style={style.text4}>Login or create an account</Text>
        <Text style={style.text5}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum ha
        </Text>
        <Button
          buttonStyle={{marginVertical: 5, width: '100%', marginTop: 30}}
          title={'Login as a Quest'}
          btnheight={50}
          btnColor="#1C7584"
          textStyle={{fontSize: 16}}
          textColor={'#fff'}
          justifyContent={'center'}
          unseen={2}
        />
        <View style={{flexDirection: 'row', marginVertical: 20}}>
          <View style={style.line} />
          <Text style={style.ortext}>OR</Text>
          <View style={style.line} />
        </View>
        <Button
          buttonStyle={{marginVertical: 5, width: '100%'}}
          textStyle={{fontSize: 16}}
          title={'Continue with Google'}
          btnheight={50}
          btnColor="#F35252"
          textColor={'#fff'}
          justifyContent={'center'}
          unseen={2}
          btnImage={1}
        />
        <Button
          buttonStyle={{marginVertical: 5, width: '100%'}}
          title={'Continue with Facebook'}
          btnheight={50}
          textStyle={{fontSize: 16}}
          btnColor="#4385F6"
          textColor={'#fff'}
          justifyContent={'center'}
          unseen={2}
          btnImage={2}
        />
        <Button
          onPress={() => {
            navigation.navigate('Signin');
          }}
          buttonStyle={{marginVertical: 5, width: '100%'}}
          textStyle={{fontSize: 16}}
          title={'Continue with email'}
          btnheight={50}
          btnColor="#fff"
          textColor={'#000'}
          justifyContent={'center'}
          unseen={2}
          btnImage={3}
        />
      </View>
    </View>
  );
};

export default Login;
