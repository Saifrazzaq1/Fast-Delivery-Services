import React, { useState } from 'react';
import { StatusBar, Text, TouchableHighlight, View } from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import style from './style';

const RiderCreateAccount = ({navigation}) => {

  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  return (
    <View style={{backgroundColor:'white', flex:1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={"40%"}
        headerShadow
        backIcon
        loginTitle={'Become a rider'}
        logintextcolor={"#1C7584"}
      />
       <View style={{flexDirection:'row',margin:30 }}>
                 <TouchableHighlight   style={style.Progbtn}  >
                    <Text style={{fontSize:19, fontWeight:'500', color:'white',}}>1</Text>
                    </TouchableHighlight>
                    <View style={style.ProgView1} />
                    <TouchableHighlight   style={style.Progbtn1}  >
                    <Text style={style.ProbText1}>2</Text>
                    </TouchableHighlight>
                    <View style={style.ProgView1} />
                    <TouchableHighlight   style={style.Progbtn1}  >
                    <Text style={style.ProbText1}>3</Text>
                    </TouchableHighlight>
                </View> 
      <View style={style.mainview}>
        <Text style={style.text}>Create Your Account</Text>
        <Textfield
          value={name}
          onChangeText={setName}
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
        <Textfield
          value={password}
          onChangeText={setPassword}
          borderBottomWidth={1}
          borderColor={'grey'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
         
          placeholder={'Re-type Password'}
          secureIcon
          secureTextEntry={true}
        />
        <Text style={style.text1}>
          Your Password must be at least 6 characters
        </Text>
        <Button
          onPress={() => navigation.navigate('VehicleDetails')}
          btnheight={60}
          unseen={2}
          title={'Continue'}
          textColor={'#fff'}
          justifyContent={'center'}
          btnColor="#1C7584"
          fontSize={16}
          buttonStyle={{marginTop: 60}}
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
<Text style={{}}></Text>

export default RiderCreateAccount;


