import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from 'src/Components/Header';
import style from './style';
import Images from '../../../../../Assets';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const ChooseAccount = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={'50%'}
        headerShadow
        loginTitle={'Account'}
        logintextcolor={'#1C7584'}
        backIcon
      />
      <View style={style.mainview}>
        <TouchableOpacity style={style.btn}>
          <Image source={Images.pay} />
          <Text style={style.text}>Apple Pay</Text>
          <Icon
            type={IconType.MaterialIcons}
            name="arrow-right"
            size={34}
            style={style.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Image source={Images.paypal} />
          <Text style={style.text}>Paypal</Text>
          <Icon
            type={IconType.MaterialIcons}
            name="arrow-right"
            size={34}
            style={style.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate('AddCard')}>
          <Image source={Images.pay2} />
          <Text style={style.text}>Add Card</Text>
          <Icon
            type={IconType.MaterialIcons}
            name="arrow-right"
            size={34}
            style={style.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseAccount;
