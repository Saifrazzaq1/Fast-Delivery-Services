import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import React from 'react';
import {useSelector} from 'react-redux';
import Images from '../../Assets';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const Account = () => {
  const user = useSelector(s => s.auth.user);
  const navigation = useNavigation();

  return (
    <View style={style.istview}>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginTitle="Account"
        logoutIcon
        logoutSize={20}
      />
      <View style={style.mainview}>
        <View style={style.imgdp}>
          <Image style={style.dpview} source={Images.dp} />
          <View style={{alignSelf: 'center'}}>
            <Text style={style.username}>Hussam</Text>
            {/* {user.name} */}
            <View style={style.palview}>
              <Image style={style.countryImg} source={Images.palestine} />
              <Text style={style.useraddress}>demo@gmail</Text>
              {/* {user.email} */}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <Image style={style.settingimg} source={Images.setting} />
          </TouchableOpacity>
        </View>
        <View style={style.btnsview}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Order');
            }}
            style={style.eemage}>
            <Image style={style.btnsimg} source={Images.pad} />
            <Text style={style.btnsname}>Your orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Offers');
            }}
            style={style.eemage}>
            <Image style={style.btnsimg} source={Images.tag} />
            <Text style={style.btnsname}>Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}
            style={style.eemage}>
            <Image style={style.btnsimg} source={Images.Group} />
            <Text style={style.btnsname}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FdsPay');
            }}
            style={style.eemage}>
            <Image style={style.btnsimg} source={Images.walet1} />
            <Text style={style.btnsname}>FDS Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Favorite');
            }}
            style={style.eemage}>
            <Image style={style.btnsimg} source={Images.heart} />
            <Text style={style.btnsname}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Help');
            }}
            style={style.eemage}>
            <Image style={style.btnsimg} source={Images.bulb} />
            <Text style={style.btnsname}>Get help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About');
            }}
            style={style.eemage}>
            <Image style={style.btnsimg} source={Images.clock} />
            <Text style={style.btnsname}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Account;
