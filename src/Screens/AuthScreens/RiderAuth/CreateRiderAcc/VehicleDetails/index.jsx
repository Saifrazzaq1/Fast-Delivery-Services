import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import style from './style';

const VehicleDetails = ({navigation}) => {

  const [country, setCountry] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [name, setName] = useState('');

//   const handleSubmit = () => {
//     const data = {
//       name: name,
//       email: email,
//       password: password,
//       phone: phone,
//     };

//     SIGNUP(data, ({success}) => {
//       if (success) {
//         showSnackbar({
//           body: 'Signup Successfully',
//           type: 'success',
//           header: 'SUCCESS',
//         });
//         navigation.navigate('Signin');
//       } else {
//         showSnackbar({
//           body: 'Signup error',
//           type: 'error',
//           header: 'ERROR',
//         });
//       }
//     });
//   };

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
                    <View style={style.ProgView} />
                    <TouchableHighlight   style={style.Progbtn}  >
                    <Text style={style.ProbText}>2</Text>
                    </TouchableHighlight>
                    <View style={style.ProgView1} />
                    <TouchableHighlight   style={style.Progbtn1}  >
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
          value={name}
          onChangeText={setName}
          borderBottomWidth={1}
          borderColor={'grey'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
          placeholder={'Last Name as per Emirates ID'}
        />
      
        <Button
          onPress={() => navigation.navigate('Rigistered')}
          btnheight={60}
          unseen={2}
          title={'Sign up'}
          textColor={'#fff'}
          justifyContent={'center'}
          btnColor="#1C7584"
          fontSize={16}
          buttonStyle={{marginTop: 300}}
        />
        
      </View>
    </View>
  );
};

export default VehicleDetails;

const styles = StyleSheet.create({});
