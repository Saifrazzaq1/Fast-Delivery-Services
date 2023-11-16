import React from 'react';
import { StatusBar, Text, View, TouchableHighlight } from 'react-native';

import Header from 'src/Components/Header';
import style from './style';
import Image from 'src/Components/Image';
import Assets from 'src/Assets';

const RiderRigistered = () => {


  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        headerShadow
        loginTitle={'Become a rider'}
        logintextcolor={"#1C7584"}
      />
      <View style={{ flexDirection: 'row', margin: 30 }}>
        <TouchableHighlight style={style.Progbtn}  >
          <Text style={{ fontSize: 19, fontWeight: '500', color: 'white', }}>1</Text>
        </TouchableHighlight>
        <View style={style.ProgView} />
        <TouchableHighlight style={style.Progbtn}  >
          <Text style={style.ProbText}>2</Text>
        </TouchableHighlight>
        <View style={style.ProgView} />
        <TouchableHighlight style={style.Progbtn}  >
          <Text style={style.ProbText}>3</Text>
        </TouchableHighlight>
      </View>
      <View style={style.mainview}>
        <Image source={Assets.Comp} size={192} style={{marginBottom:20}}  />
        <Text style={style.text}>Your account information has been sent.
          Please await verification </Text>
        <Text style={style.text1}>Confirmation of your account information has been sent.
          Kindly await the verification process, and once completed,
          you can seamlessly enjoy the benefits of our services.</Text>

      </View>
    </View>
  );
};

export default RiderRigistered;

