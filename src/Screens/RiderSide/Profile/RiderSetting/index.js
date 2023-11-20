import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Header from 'src/Components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import style from './style';
const RiderSetting = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header
        backIcon
        loginTitle={'Settings'}
        loginbtn
        logintextcolor={'#1C7584'}
        loginmarginleft={'50%'}
        headerbgcolor={'#fff'}
        headerBg
        headerShadow
      />
      <View style={style.btnsview}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            marginBottom: 30,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={style.btnsname}>Notification</Text>
          <ToggleSwitch
            isOn={true}
            onColor="#E0281C"
            offColor="grey"
            size="medium"
            onToggle={isOn => !false}
          />
        </TouchableOpacity>
        <View style={style.line} />
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            marginBottom: 30,
          }}>
          <Text style={style.btnsname}>Language</Text>
          <Text style={style.btnsnames}>English</Text>
        </TouchableOpacity>
        <View style={style.line} />
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            marginBottom: 30,
          }}>
          <Text style={style.btnsname}>Country</Text>
          <Text style={style.btnsnames}>United Arab Emirates</Text>
        </TouchableOpacity>
        <View style={style.line} />
      </View>
    </View>
  );
};

export default RiderSetting;
