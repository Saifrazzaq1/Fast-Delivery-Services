import {StyleSheet, TouchableOpacity, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import Header from 'src/Components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import {heightRef} from 'src/config/screenSize';

const Setting = () => {
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
      <View style={styles.btnsview}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            marginBottom: 30,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.btnsname}>Notification</Text>
          <ToggleSwitch
            isOn={true}
            onColor="#E0281C"
            offColor="grey"
            size="medium"
            onToggle={isOn => !false}
          />
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            marginBottom: 30,
          }}>
          <Text style={styles.btnsname}>Language</Text>
          <Text style={styles.btnsnames}>English</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            marginBottom: 30,
          }}>
          <Text style={styles.btnsname}>Country</Text>
          <Text style={styles.btnsnames}>United Arab Emirates</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  btnsview: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  btnsimg: {
    height: 28,
    marginLeft: 10,
    width: 28,
  },

  btnsname: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
  btnsnames: {
    color: '#1C7584',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
  },
  line: {
    marginHorizontal: 10,
    marginTop: -10,
    marginBottom: 15,
    height: 0.4,
    backgroundColor: 'grey',
    zIndex: 1000,
  },
});
