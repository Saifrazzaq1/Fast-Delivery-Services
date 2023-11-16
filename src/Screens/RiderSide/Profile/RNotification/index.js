import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Images from '../../../../Assets';
import Header from 'src/Components/Header';

const RNotification = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        backIcon
        loginTitle={'Notification'}
        loginbtn
        logintextcolor={'#1C7584'}
        loginmarginleft={'45%'}
        headerbgcolor={'#fff'}
        headerBg
        headerShadow
      />
      <View style={styles.btnsview}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.dpview} source={Images.Profile} />
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '76%',
              }}>
              <Text style={styles.username}>Congratulations </Text>
              <Text style={styles.useraddress}>1h </Text>
            </View>

            <Text style={styles.useraddress}>
              Your account has been created successfully!
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.dpview} source={Images.Profile} />
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '76%',
              }}>
              <Text style={styles.username}>Congratulations </Text>
              <Text style={styles.useraddress}>1h </Text>
            </View>

            <Text style={styles.useraddress}>
              Your account has been created successfully!
            </Text>
          </View>
        </View>
        <View style={styles.line} />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.dpview} source={Images.Profile} />
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '76%',
              }}>
              <Text style={styles.username}>Congratulations </Text>
              <Text style={styles.useraddress}>1h </Text>
            </View>

            <Text style={styles.useraddress}>
              Your account has been created successfully!
            </Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.dpview} source={Images.Profile} />
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '76%',
              }}>
              <Text style={styles.username}>Congratulations </Text>
              <Text style={styles.useraddress}>1h </Text>
            </View>

            <Text style={styles.useraddress}>
              Your account has been created successfully!
            </Text>
          </View>
        </View>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default RNotification;

const styles = StyleSheet.create({
  dpview: {
    height: 50,
    width: 50,
    backgroundColor: '#ff1',
    borderRadius: 45,
  },
  username: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  btnsname: {
    color: '#000',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,
  },
  useraddress: {
    color: 'grey',
    fontSize: 11,
    marginLeft: 3,
  },
  btnsview: {
    marginTop: 20,
    marginHorizontal: 40,
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
    marginVertical: 15,
    height: 0.4,
    backgroundColor: 'grey',
    zIndex: 1000,
  },
});
