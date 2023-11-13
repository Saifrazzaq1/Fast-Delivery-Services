import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from 'src/Components/Header';

const Help = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
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
          {'\n'}
          {'\n'}
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500sLorem Ipsum standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          {'\n'}
          {'\n'}
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500sLorem Ipsum standard dummy text ever
          since the 1500s
        </Text>
      </View>
    </View>
  );
};

export default Help;

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
  btnsdec: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 10,
  },
  btnsname: {
    color: '#000',
    fontSize: 25,
    fontWeight: '500',
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
