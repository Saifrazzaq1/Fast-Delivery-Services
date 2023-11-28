import React, {useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import {SIGNUP} from 'src/Redux/Reducers/Auth/actions';
import Textfield from 'src/Components/Textfield';
import {showSnackbar} from 'src/Components/Snackbar';
import style from './style';

const CreateAccount = ({navigation}) => {
  const [isChecked, setisChecked] = useState(false);
  const [password, setPassword] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const data = {
      first_name: first_name,
      email: email,
      password: password,
      phone: phone,
    };

    SIGNUP(data, ({success}) => {
      if (success) {
        showSnackbar({
          body: 'Signup Successfully',
          type: 'success',
          header: 'SUCCESS',
        });
        navigation.navigate('Signin');
      } else {
        showSnackbar({
          body: 'Signup error',
          type: 'error',
          header: 'ERROR',
        });
      }
    });
  };
  return (
    <View>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={'53.5%%'}
        headerShadow
        backIcon
        loginTitle={'Login'}
        logintextcolor={'#1C7584'}
      />
      <View style={style.mainview}>
        <Text style={style.text}>Continue with email</Text>
        <Textfield
          value={first_name}
          onChangeText={setfirst_name}
          borderBottomWidth={1}
          borderColor={'grey'}
          placeholder={'First Name'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
        />
        <Textfield
          value={phone}
          onChangeText={setPhone}
          borderBottomWidth={1}
          borderColor={'grey'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Phone Number'}
        />
        <Textfield
          value={email}
          onChangeText={setEmail}
          borderBottomWidth={1}
          borderColor={'grey'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Email'}
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
        <Text style={style.text1}>
          Your Password must be at least 6 characters
        </Text>
        <View style={style.check}>
          <CheckBox
            checkBoxColor={'#000'}
            checkedCheckBoxColor={'#E0281C'}
            isChecked={isChecked}
            onClick={() => setisChecked(!isChecked)}
          />
          <Text style={style.text3}>
            Yes , I want to receive offers and discounts
          </Text>
        </View>
        <Button
          onPress={() => handleSubmit()}
          btnheight={60}
          unseen={2}
          title={'Create account'}
          textColor={'#fff'}
          justifyContent={'center'}
          btnColor="#1C7584"
          buttonStyle={{marginTop: 30}}
        />
        <Text style={style.text4}>
          By creating an account you agree to the{' '}
          <Text style={style.text5}>
            privacy policy <Text style={style.text4}>and to the</Text> terms of
            use
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CreateAccount;
