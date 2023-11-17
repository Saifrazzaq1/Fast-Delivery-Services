import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import Images from '../../../../Assets';
import styles from './style';

const Notification = () => {
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
            <View style={styles.all}>
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
            <View style={styles.all}>
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
            <View style={styles.all}>
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
            <View style={styles.all}>
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

export default Notification;
