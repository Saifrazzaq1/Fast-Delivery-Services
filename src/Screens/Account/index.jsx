import {TouchableOpacity, Image, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import React from 'react';
import Images from '../../Assets';
import style from './style';
import {useSelector} from 'react-redux';

const Account = ({navigation}) => {
  const user = useSelector(s => s.auth.user);
  return (
    <View style={style.body}>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginTitle="Account"
        logoutIcon
        logoutSize={20}
      />
      <View style={style.mainview}>
        <View style={style.mainbody}>
          <Image style={style.dpview} source={Images.dp} />
          <View style={style.center}>
            <Text style={style.username}>{user.first_name}</Text>

            <View style={style.profile}>
              <Image style={style.countryImg} source={Images.palestine} />
              <Text style={style.useraddress}>{user.email}</Text>
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
