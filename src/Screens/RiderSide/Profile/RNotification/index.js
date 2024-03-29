import React from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../../../../Assets';
import Header from 'src/Components/Header';
import style from './style';

const RNotification = () => {
  return (
    <View style={style.body}>
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
      <View style={style.btnsview}>
        <View style={style.main}>
          <Image style={style.dpview} source={Images.Profile} />
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <View
              style={style.mainview}>
              <Text style={style.username}>Congratulations </Text>
              <Text style={style.useraddress}>1h </Text>
            </View>

            <Text style={style.useraddress}>
              Your account has been created successfully!
            </Text>
          </View>
        </View>
        <View style={style.line} />
        <View style={style.main}>
          <Image style={style.dpview} source={Images.Profile} />
          <View style={style.pro}>
            <View
              style={style.mainview}>
              <Text style={style.username}>Congratulations </Text>
              <Text style={style.useraddress}>1h </Text>
            </View>

            <Text style={style.useraddress}>
              Your account has been created successfully!
            </Text>
          </View>
        </View>
        <View style={style.line} />

        <View style={style.main}>
          <Image style={style.dpview} source={Images.Profile} />
          <View style={style.pro}>
            <View
              style={style.mainview}>
              <Text style={style.username}>Congratulations </Text>
              <Text style={style.useraddress}>1h </Text>
            </View>

            <Text style={style.useraddress}>
              Your account has been created successfully!
            </Text>
          </View>
        </View>
        <View style={style.line} />
        <View style={style.main}>
          <Image style={style.dpview} source={Images.Profile} />
          <View style={style.pro}>
            <View
              style={style.mainview}>
              <Text style={style.username}>Congratulations </Text>
              <Text style={style.useraddress}>1h </Text>
            </View>

            <Text style={style.useraddress}>
              Your account has been created successfully!
            </Text>
          </View>
        </View>
        <View style={style.line} />
      </View>
    </View>
  );
};

export default RNotification;
