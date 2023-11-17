import {StyleSheet, TouchableOpacity, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import Header from 'src/Components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import {heightRef} from 'src/config/screenSize';
import styles from './style';

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
        <TouchableOpacity style={styles.all}>
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
