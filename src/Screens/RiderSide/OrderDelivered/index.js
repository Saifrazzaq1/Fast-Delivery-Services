import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const Orders = [
  {
    od: '#234',
    payment: 'Paid Online',
    cm: 'Haris iramani',
  },
];
const RiderOrderDetials = ({route}) => {
  // const {itemNo} = route.params;
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginTitle={'Order Delivered'}
        loginbtn
        logintextcolor={'#000'}
        loginmarginleft={'40%'}
        headerShadow
      />
      <ScrollView
        style={{
          marginHorizontal: 20,
        }}>
        <View style={style.pinkView}>
          <Text style={style.redText}>Order Delivered </Text>
        </View>
        <View style={style.orderView}>
          <View style={style.container}>
            <Text style={style.amountText}>Order Details</Text>
            <Text style={style.text1}>Order Number #4354</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={style.amountText}>Payment</Text>
                <Text style={style.text1}>Online</Text>
              </View>
              <View>
                <Text style={style.amountText}>Customer Name</Text>
                <Text style={style.text1}>Hussam</Text>
              </View>
            </View>
          </View>
          <Text style={style.text3}>Order details</Text>

          <FlatList
            data={'fa'}
            renderItem={({item}) => (
              <View style={style.orderDetail}>
                <View>
                  <Text style={style.text3}>Saloona Marga (1)</Text>
                  <Text style={style.redText}>AED 28.50</Text>
                </View>
                <View>
                  <Image style={style.mlistimg} source={Images.salan} />
                </View>
              </View>
            )}
          />
        </View>
        <View style={style.orderView}>
          <Text style={style.text6}>Payment Summary</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={style.text7}>Subtotal</Text>
            <Text style={style.text7}>AED 23</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={style.text7}>Delivery fee</Text>
            <Text style={style.text7}>AED 99</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={style.text8}>Total Amount</Text>
            <Text style={style.text8}>AED 89</Text>
          </View>
          <View style={style.orderView3}>
            <View style={style.details}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image style={style.dp} source={Images.dp} />
                  <Text style={style.text13}>Foodie Hoodie</Text>
                </View>
                <Text style={style.text14}>Hussam Noor</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
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
