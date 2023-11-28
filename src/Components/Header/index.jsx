import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LOGOUT} from 'src/Redux/Reducers/Auth/actions';
import Images from '../../Assets';
import style from './style';

const Header = ({
  guestbtn,
  menu,
  loginbtn,
  backIcon,
  heartIcon,
  iconBg,
  loginTitle,
  guestTitle,
  searchmarginRight,
  marginright,
  marginLeft,
  headerShadow,
  loginmarginleft,
  searchIcon,
  locationIcon,
  logoutIcon, //share Icon
  locationText,
  alignItems,
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
          <Text
            style={[
              style.text1,
              {marginLeft: loginmarginleft, color: logintextcolor},
            ]}>
            {loginTitle}
          </Text>
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
          style={[style.signoutView, , {backgroundColor: iconBg}]}>
          <FontAwesome5 name="share-alt" size={logoutSize} color="black" />
        </TouchableOpacity>
      ) : null}
      {heartIcon ? (
        <TouchableOpacity style={[style.heartView, {backgroundColor: iconBg}]}>
          <FontAwesome5 name="heart" size={20} color="black" />
        </TouchableOpacity>
      ) : null}
      {locationIcon && (
        <FontAwesome5
          style={{marginRight: 10}}
          name="map-marker-alt"
          size={18}
          color="#1C7584"
        />
      )}

      {locationText ? (
        <View
          style={{
            alignItems: alignItems,
            width: '100%',
            marginRight: marginright,
          }}>
          <Text
            style={[
              style.delivtext,
              {textAlign: locationtextPosition, marginLeft: marginLeft},
            ]}>
            Delivering to
          </Text>
          <Text
            style={[
              style.joharText,
              {textAlign: locationtextPosition, marginLeft: marginLeft},
            ]}>
            Johar Town, Lahore
          </Text>
        </View>
      ) : null}
      {menu && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{position: 'absolute', right: 30}}>
          <Image
            style={{height: 23, width: 23, tintColor: 'red'}}
            source={Images.menuLines}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
