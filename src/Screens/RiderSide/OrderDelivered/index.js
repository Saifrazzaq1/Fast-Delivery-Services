import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import style from './style';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const RiderOrderDetials = ({route}) => {
  const {orderDetails} = route.params;

  const region = {
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  return (
    <View style={style.body}>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginTitle={'Order Delivered'}
        loginbtn
        logintextcolor={'#000'}
        loginmarginleft={'40%'}
        headerShadow
      />
      <ScrollView style={style.scroll} showsVerticalScrollIndicator={false}>
        <View style={style.pinkView}>
          <Text style={style.redText}>Order Delivered </Text>
        </View>
        <View style={style.orderView}>
          <View style={style.container}>
            <Text style={style.amountText}>Order Details</Text>
            <Text style={style.text1}>
              Order Number #{orderDetails.orderNumber}
            </Text>
            <View style={style.pay}>
              <View>
                <Text style={style.amountText}>Payment</Text>
                <Text style={style.text1}>{orderDetails.payment_type}</Text>
              </View>
              <View>
                <Text style={style.amountText}>Customer Name</Text>
                <Text style={style.text1}>
                  {orderDetails.first_name} {orderDetails.last_name}
                </Text>
              </View>
            </View>
          </View>
          <Text style={style.text3}>Order details</Text>

          <FlatList
            data={orderDetails.productId}
            renderItem={({item}) => (
              <View style={style.orderDetail}>
                <View>
                  <Text style={style.text3}>{item.item}</Text>
                  <Text style={style.redText}>AED {item.price}</Text>
                </View>
                <View>
                  <Image style={style.mlistimg} source={Images.salan} />
                </View>
              </View>
            )}
          />
        </View>
        <View style={style.p}>
          <MapView style={style.mapv} provider="google" region={region} />

          <View style={style.row}>
            <Image style={style.dp} source={Images.dp} />
            <Text style={style.text}>
              {orderDetails?.bussinessId?.[0]?.bussiness_name}
            </Text>
          </View>
          <View style={style.row}>
            <Image style={style.mapImg} source={Images.loc} />
            <Text style={style.text2}>
              {orderDetails?.bussinessId?.[0]?.address}
            </Text>
          </View>
        </View>
        <View style={style.orderView}>
          <Text style={style.text6}>Payment Summary</Text>
          <View style={style.payv}>
            <Text style={style.text7}>Subtotal</Text>
            <Text style={style.text7}>
              AED {orderDetails.paymentSummary.subTotal}
            </Text>
          </View>
          <View style={style.payv}>
            <Text style={style.text7}>Delivery fee</Text>
            <Text style={style.text7}>
              AED {orderDetails.paymentSummary.DeliveryFee}
            </Text>
          </View>
          <View style={style.payv}>
            <Text style={style.text8}>Total Amount</Text>
            <Text style={style.text8}>AED {orderDetails.total_bill}</Text>
          </View>
          <View style={style.orderView3}>
            <View style={style.details}>
              <View>
                <View style={style.row}>
                  <Image style={style.dp} source={Images.dp} />
                  <Text style={style.text13}>Customer Name</Text>
                </View>
                <Text style={style.text14}>
                  {orderDetails.first_name} {orderDetails.last_name}
                </Text>
              </View>
              <View style={style.row}>
                <Image style={style.bigViewImg} source={Images.sms} />
                <Image style={style.bigViewImg} source={Images.call} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RiderOrderDetials;
