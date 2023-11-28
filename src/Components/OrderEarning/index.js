import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../Assets';
import React, {useEffect, useState} from 'react';
import style from './style';
import {CompletedOrders} from 'src/Redux/Reducers/Auth/actions';
const OrderEarning = () => {
  const [total, setTotal] = useState([]);

  useEffect(() => {
    CompletedOrders(res => {
      if (res.success) {
        setTotal(res.orders.length);
        console.log(res.orders.length);
      }
    });
  }, []);
  return (
    <View style={style.main}>
      <View style={style.secondmain}>
        <View style={style.thirdmain}>
          <Image style={style.img1} source={Images.donut} />
          <Text style={style.amountText}>{total}</Text>
          <Text>Total Order</Text>
        </View>
        <View style={style.innerView}>
          <Image style={style.img2} source={Images.Dollar} />
          <Text style={style.amountText}>0</Text>
          <Text>Total Earning</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderEarning;
