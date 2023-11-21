import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import Header from 'src/Components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from './style';

const Setting = () => {
  return (
    <View style={styles.body}>
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
          style={styles.btn}>
          <Text style={styles.btnsname}>Language</Text>
          <Text style={styles.btnsnames}>English</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.btn}>
          <Text style={styles.btnsname}>Country</Text>
          <Text style={styles.btnsnames}>United Arab Emirates</Text>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default Setting;
