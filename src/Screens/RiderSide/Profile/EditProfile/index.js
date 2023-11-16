import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import style from './style';
import Images from '../../../../Assets'
import Icon, { IconType } from 'react-native-dynamic-vector-icons';

const EditProfile = ({navigation}) => {
  const [reTypepassword, setReTypepassword] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };
  }

  return (
    <View style={{ flex:1,backgroundColor:'white'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={"45%"}
        headerShadow
        backIcon
        loginTitle={'Edit Profile'}
        logintextcolor={"#1C7584"}
      />
      <View style={style.mainview}>
       <View >
       <ImageBackground style={style.dp} source={Images.dp}>
           <TouchableOpacity style={style.btn}>
           <Icon type={IconType.MaterialIcons} name='edit' size={8} color='white'  />
           </TouchableOpacity>
        </ImageBackground>
       </View>
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
          placeholder={'New Password'}
          secureIcon
          secureTextEntry={true}
        />
        <Text style={style.text1}>
          Your Password must be at least 6 characters
        </Text>
        <Textfield
          value={reTypepassword}
          onChangeText={setReTypepassword}
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
          onPress={() => handleSubmit()}
          btnheight={60}
          unseen={2}
          title={'Save Changes'}
          fontSize={16}
          textColor={'#fff'}
          justifyContent={'center'}
          btnColor="#1C7584"
          buttonStyle={{marginTop: 30}}
        />
       
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
