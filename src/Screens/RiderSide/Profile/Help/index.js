import React from 'react';
import {Text, View} from 'react-native';
import Header from 'src/Components/Header';
import styles from './style';
const HelpR = () => {
  return (
    <View style={styles.body}>
      <Header
        backIcon
        loginTitle={'Help'}
        loginbtn
        logintextcolor={'#1C7584'}
        loginmarginleft={'55%'}
        headerbgcolor={'#fff'}
        headerBg
        headerShadow
      />
      <View style={styles.btnsview}>
        <Text style={styles.btnsname}>
          You need a FDS account so we can help{' '}
        </Text>
        <Text style={styles.btnsdec}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500sLorem Ipsum standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500sLorem Ipsum standard dummy text ever
          since the 1500s
        </Text>
      </View>
    </View>
  );
};

export default HelpR;
