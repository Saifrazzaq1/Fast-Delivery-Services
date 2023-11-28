import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import style from './style';
import {LOGIN} from 'src/Redux/Reducers/RiderAuth/actions';

const RiderSignin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleSignin = () => {
    LOGIN({email, password});
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={'55%'}
        logintextcolor={'#1C7584'}
        headerShadow
        loginTitle={'Login'}
        backIcon
      />
      <View style={style.mainview}>
        <Text style={style.text}>Login Now </Text>
        <Textfield
          value={email}
          onChangeText={setEmail}
          borderBottomWidth={1}
          borderColor={'grey'}
          placeholder={'Email'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
        />
        <Textfield
          value={password}
          onChangeText={setPassword}
          borderBottomWidth={1}
          borderColor={'grey'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Password'}
          secureIcon
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={{alignSelf: 'flex-end'}}>Forgot Password</Text>
        </TouchableOpacity>
        <Button
          onPress={handleSignin}
          btnheight={60}
          unseen={2}
          title={'Login'}
          textColor={'#fff'}
          fontSize={16}
          justifyContent={'center'}
          btnColor="#1C7584"
          buttonStyle={{marginTop: 60}}
        />
      </View>
    </View>
  );
};

export default RiderSignin;
