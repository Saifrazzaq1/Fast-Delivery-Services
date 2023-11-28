import {TouchableOpacity, Image, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import React from 'react';
import Images from '../../../Assets';
import {useNavigation} from '@react-navigation/native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import styles from './style';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LOGOUT} from 'src/Redux/Reducers/Auth/actions';
import {useSelector} from 'react-redux';

const Profile = () => {
  const navigation = useNavigation();
  const user = useSelector(s => s.auth.user);

  return (
    <View style={styles.body}>
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={'53%'}
        logintextcolor={'black'}
        headerShadow
        loginTitle={'Profile'}
      />
      <View style={styles.mainview}>
        <View style={styles.mainb}>
          <Image style={styles.dpview} source={Images.dp} />
          <View style={styles.mainc}>
            <Text style={styles.username}>
              {user.first_name} {user.last_name}
            </Text>
            <View style={styles.mainb}>
              <Image style={styles.countryImg} source={Images.palestine} />
              <Text style={styles.useraddress}>United Arab Emirates</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RiderSetting');
            }}>
            <Image style={styles.img} source={Images.setting} />
          </TouchableOpacity>
        </View>
        <View style={styles.btnsview}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}
            style={styles.btn}>
            <Icon
              type={IconType.MaterialIcons}
              name="edit"
              size={28}
              color="black"
              style={styles.ml}
            />
            <Text style={styles.btnsname}> Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('History');
            }}
            style={styles.btn}>
            <Image style={styles.btnsimg} source={Images.tag} />
            <Text style={styles.btnsname}> History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RNotification');
            }}
            style={styles.btn}>
            <Image style={styles.btnsimg} source={Images.Group} />
            <Text style={styles.btnsname}> Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AccountR');
            }}
            style={styles.btn}>
            <Image style={styles.btnsimg} source={Images.walet1} />
            <Text style={styles.btnsname}> Account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HelpR');
            }}
            style={styles.btn}>
            <Image style={styles.btnsimg} source={Images.bulb} />
            <Text style={styles.btnsname}> Get help</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AboutR');
            }}
            style={styles.btn}>
            <Image style={styles.btnsimg} source={Images.clock} />
            <Text style={styles.btnsname}> About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={LOGOUT} style={styles.btn1}>
            <FontAwesome5 name="sign-out-alt" size={20} color="black" />
            <Text style={styles.btnsname}> Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
