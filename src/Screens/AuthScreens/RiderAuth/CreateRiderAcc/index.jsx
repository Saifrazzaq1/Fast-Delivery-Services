import React, { useState } from 'react';
import { StatusBar, Text, TouchableHighlight, View } from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import style from './style';
import { RiderSIGNUP } from 'src/Redux/Reducers/Rider/actions';
import { showSnackbar } from 'src/Components/Snackbar';



const RiderCreateAccount = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [country, setCountry] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [last_name, setLast_name] = useState('');

  const handlepress = ()=>{
    setIsButtonPressed(true);
  }
  const handleSubmit = () => {
    const data = {
      first_name: first_name,
      email: email,
      password: password,
      phone: phone,
      last_name:last_name,
      country:country,
      vehical: vehicle,
    };

    RiderSIGNUP(data, ({ success }) => {
      if (success) {
        showSnackbar({
          body: 'Signup Successfully',
          type: 'success',
          header: 'SUCCESS',
        });
        navigation.navigate('RiderRigistered')
      } else {
        showSnackbar({
          body: 'Signup error',
          type: 'error',
          header: 'ERROR',
        });
        console.log('error')
      }
      console.log(data,'hkjhlkhlhj')
    });
  };
  
  return (
    <View>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      {isButtonPressed ? (
        <View style={{ backgroundColor: 'white' }}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle="dark-content"
            translucent
          />
          <Header
            loginbtn
            headerBg
            headerbgcolor={'white'}
            loginmarginleft={'40%'}
            headerShadow
            backIcon
            loginTitle={'Become a rider'}
            logintextcolor={'#1C7584'}
          />
          <View style={{ flexDirection: 'row', margin: 30 }}>
            <TouchableHighlight style={style.Progbtn}>
              <Text style={{ fontSize: 19, fontWeight: '500', color: 'white' }}>
                1
              </Text>
            </TouchableHighlight>
            <View style={style.ProgView} />
            <TouchableHighlight style={style.Progbtn}>
              <Text style={style.ProbText}>2</Text>
            </TouchableHighlight>
            <View style={style.ProgView1} />
            <TouchableHighlight style={style.Progbtn1}>
              <Text style={style.ProbText1}>3</Text>
            </TouchableHighlight>
          </View>
          <View style={style.mainview}>
            <Text style={style.text}>Add Vehicle Information</Text>
            <Textfield
              value={country}
              onChangeText={setCountry}
              borderBottomWidth={1}
              borderColor={'grey'}
              placeholder={'Select Country'}
              borderTopWidth={0}
              borderRightWidth={0}
              borderLeftWidth={0}
            />
            <Textfield
              value={vehicle}
              onChangeText={setVehicle}
              borderBottomWidth={1}
              borderColor={'grey'}
              borderTopWidth={0}
              borderRightWidth={0}
              borderLeftWidth={0}
              placeholder={'Choose Vehicle Category'}
            />
            <Textfield
              value={last_name}
              onChangeText={setLast_name}
              borderBottomWidth={1}
              borderColor={'grey'}
              borderTopWidth={0}
              borderRightWidth={0}
              borderLeftWidth={0}
              placeholder={'Last Name as per Emirates ID'}
            />
            <Button
              onPress={() =>handleSubmit()}
              btnheight={60}
              unseen={2}
              title={'Sign up'}
              textColor={'#fff'}
              justifyContent={'center'}
              btnColor="#1C7584"
              fontSize={16}
              buttonStyle={{ marginTop: 300 }}
            />
          </View>
        </View>
      ) : (
        <View style={{ backgroundColor: 'white' }}>
          <Header
            loginbtn
            headerBg
            headerbgcolor={'white'}
            loginmarginleft={'40%'}
            headerShadow
            backIcon
            loginTitle={'Become a rider'}
            logintextcolor={'#1C7584'}
          />
          <View style={{ flexDirection: 'row', margin: 30 }}>
            <TouchableHighlight style={style.Progbtn}>
              <Text style={{ fontSize: 19, fontWeight: '500', color: 'white' }}>
                1
              </Text>
            </TouchableHighlight>
            <View style={style.ProgView1} />
            <TouchableHighlight style={style.Progbtn1}>
              <Text style={style.ProbText1}>2</Text>
            </TouchableHighlight>
            <View style={style.ProgView1} />
            <TouchableHighlight style={style.Progbtn1}>
              <Text style={style.ProbText1}>3</Text>
            </TouchableHighlight>
          </View>
          <View style={style.mainview}>
            <Text style={style.text}>Create Your Account</Text>
            <Textfield
              value={first_name}
              onChangeText={setFirst_name}
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
              // value={password}
              // onChangeText={setPassword}
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
              onPress={() => handlepress()}
              btnheight={60}
              unseen={2}
              title={'Continue'}
              textColor={'#fff'}
              justifyContent={'center'}
              btnColor="#1C7584"
              fontSize={16}
              buttonStyle={{ marginTop: 60 }}
            />
            <Text style={style.text4}>
              By creating an account you agree to the{' '}
              <Text style={style.text5}>
                privacy policy <Text style={style.text4}>and to the</Text> terms
                of use
              </Text>
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default RiderCreateAccount;
