import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LOGOUT} from 'src/Redux/Reducers/Auth/actions';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  guestbtn,
  loginbtn,
  backIcon,
  heartIcon,
  iconBg,
  loginTitle,
  guestTitle,
  searchmarginRight,
  marginright,
  headerShadow,
  loginmarginleft,
  searchIcon,
  logoutIcon,
  locationText,
  locationtextPosition,
  headerBg,
  headerbgcolor,
  alignLogoutbtn,
  logoutSize,
  logintextcolor,
}) => {
  const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  return (
    <View
      style={[
        style.headview,
        {marginTop: inset.top},
        headerShadow
          ? {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }
          : null,
        headerBg ? {backgroundColor: headerbgcolor} : null,
      ]}>
      {backIcon ? (
        <TouchableOpacity
          style={[style.backIconView, {backgroundColor: iconBg}]}
          onPress={() => navigation.goBack()}>
          <FontAwesome5
            style={style.arrowIcon}
            size={18}
            name="chevron-left"
            color="black"
          />
        </TouchableOpacity>
      ) : null}
      {loginbtn && (
        <View>
          <Text style={[style.text1,{marginLeft:loginmarginleft,color:logintextcolor}]}>{loginTitle}</Text>
        </View>
      )}
      {guestbtn && (
        <View>
          <Text style={style.text2}>{guestTitle}</Text>
        </View>
      )}
      {searchIcon ? (
        <TouchableOpacity
          // onPress={
          style={[
            style.searchView,
            {backgroundColor: iconBg, right: searchmarginRight},
          ]}>
          <FontAwesome5 name="search" size={15} color="black" />
        </TouchableOpacity>
      ) : null}
      {logoutIcon ? (
        <TouchableOpacity
          style={[style.signoutView, , {backgroundColor: iconBg}]}
          onPress={LOGOUT}>
          <FontAwesome5 name="sign-out-alt" size={logoutSize} color="black" />
        </TouchableOpacity>
      ) : null}
      {heartIcon ? (
        <TouchableOpacity style={[style.heartView, {backgroundColor: iconBg}]}>
          <FontAwesome5 name="heart" size={20} color="black" />
        </TouchableOpacity>
      ) : null}
      {locationText ? (
        <View style={{alignItems:'center',width:'100%',marginRight:marginright}}>
          <Text
            style={[
              style.delivtext,
              {textAlign: locationtextPosition, marginLeft: 0},
            ]}>
            Delivering to
          </Text>
          <Text
            style={[
              style.joharText,
              {textAlign: locationtextPosition, marginLeft: 0},
            ]}>
            Johar Town, Lahore
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Header;
