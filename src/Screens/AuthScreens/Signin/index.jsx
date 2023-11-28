import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import {LOGIN} from 'src/Redux/Reducers/Auth/actions';
import style from './style';

const Signin = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignin = () => {
    const data = {
      email: email,
      password: password,
    };
    LOGIN(data);
  };

  return (
    <View>
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={'53.5%'}
        logintextcolor={'#1C7584'}
        headerShadow
        loginTitle={'Login'}
        backIcon
      />
      <View style={style.mainview}>
        <Text style={style.text}>Continue with email</Text>
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
          <Text style={style.text1}>Forgot Password</Text>
        </TouchableOpacity>
        <Button
          onPress={handleSignin}
          btnheight={60}
          unseen={2}
          title={'Login'}
          textColor={'#fff'}
          justifyContent={'center'}
          btnColor="#1C7584"
          buttonStyle={{marginTop: 60}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateAccount');
          }}>
          <Text style={style.text2}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;
