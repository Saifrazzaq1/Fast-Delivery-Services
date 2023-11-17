import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../Assets';
import React from 'react';
import style from './style';
const OrderEarning = () => {
  return (
    <View style={style.main}>
      <View style={style.secondmain}>
        <View style={style.thirdmain}>
          <Image style={style.img1} source={Images.donut} />
          <Text style={style.amountText}>98</Text>
          <Text>Total Order</Text>
        </View>
        <View style={style.innerView}>
          <Image style={style.img2} source={Images.Dollar} />
          <Text style={style.amountText}>$1920.92</Text>
          <Text>Total Earning</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderEarning;
