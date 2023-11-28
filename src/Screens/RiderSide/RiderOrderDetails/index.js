import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import style from './style';
import {GetOrderbyid} from 'src/Redux/Reducers/Auth/actions';

const RiderOrderDetials = ({route, navigation}) => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [region, setRegion] = useState({
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [regionV, setRegionV] = useState({
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  useEffect(() => {
    const orderId = route.params.Id;
    GetOrderbyid(orderId, res => {
      if (res.success) {
        setOrderDetails(res.orders);
        setRegion({
          latitude: res.orders?.location?.coordinates[0] || 24.8607,
          longitude: res.orders?.location?.coordinates[1] || 67.0011,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
        setRegionV({
          latitude:
            res.orders?.bussinessId?.[0]?.location?.coordinates[0] || 24.8607,
          longitude:
            res.orders?.bussinessId?.[0]?.location?.coordinates[1] || 67.0011,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
      }
    });
  }, [route.params.Id]);
  return (
    <View style={style.head}>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginbtn
        loginTitle={`Order #${orderDetails.orderNumber}`}
        loginmarginleft={'47%'}
        logintextcolor={'#000'}
        marginright={'900'}
        alignItems={'left'}
        backIcon
      />

      <ScrollView style={style.body} showsVerticalScrollIndicator={false}>
        <View style={style.orderView}>
          <View style={style.container}>
            <MapView
              style={style.map}
              provider={PROVIDER_GOOGLE}
              region={regionV}
              annotations={regionV}></MapView>
          </View>
          <View style={style.row}>
            <Image style={style.dp} source={Images.dp} />
            <Text style={style.text1}>
              {orderDetails?.bussinessId?.[0]?.bussiness_name}
            </Text>
          </View>
          <View style={style.row}>
            <Image style={style.mapImg} source={Images.loc} />
            <Text style={style.text2}>
              {orderDetails?.bussinessId?.[0]?.address}
            </Text>
          </View>
          <View style={style.row}>
            <View style={style.smallView}>
              <Image style={style.smallViewImg} source={Images.call} />
            </View>
            <View style={style.smallView}>
              <Image style={style.smallViewImg} source={Images.sms} />
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
        <View style={style.orderView}>
          <View style={style.details}>
            <View>
              <Text style={style.text4}>Customer Name</Text>
              <Text style={style.text5}>
                {orderDetails.first_name} {orderDetails.last_name}
              </Text>
            </View>
            <View style={style.row}>
              <Image style={style.bigViewImg} source={Images.sms} />
              <Image style={style.bigViewImg} source={Images.call} />
            </View>
          </View>
          <Text style={style.text6}>Payment Summary</Text>
          <View style={style.pay}>
            <Text style={style.text7}>Subtotal</Text>
            <Text style={style.text7}>
              AED {orderDetails?.paymentSummary?.subTotal}
            </Text>
          </View>
          <View style={style.pay}>
            <Text style={style.text7}>Delivery fee</Text>
            <Text style={style.text7}>
              AED {orderDetails?.paymentSummary?.DeliveryFee}
            </Text>
          </View>
          <View style={style.pay}>
            <Text style={style.text7}>Rider Tip</Text>
            <Text style={style.text7}>
              AED {orderDetails?.paymentSummary?.riderTip}
            </Text>
          </View>
          <View style={style.pay}>
            <Text style={style.text7}>Service Fee</Text>
            <Text style={style.text7}>
              AED {orderDetails?.paymentSummary?.serviceFee}
            </Text>
          </View>
          <View style={style.pay}>
            <Text style={style.text7}>Discount </Text>
            <Text style={style.text7}>
              - AED {orderDetails?.paymentSummary?.Discount}
            </Text>
          </View>
          <View style={style.pay}>
            <Text style={style.text8}>Total Amount</Text>
            <Text style={style.text8}>
              AED {orderDetails?.paymentSummary?.totalBill}
            </Text>
          </View>
          <View style={style.pinkView}>
            <View style={style.bottom}>
              <Image style={style.bigViewImg2} source={Images.ccard} />
              <Text style={style.text9}>{orderDetails.payment_type}</Text>
            </View>
            <View>
              <Text style={style.redText}>
                AED {orderDetails?.paymentSummary?.totalBill}
              </Text>
            </View>
          </View>
          <View style={style.MapView}>
            <MapView
              style={style.MapView1}
              provider={PROVIDER_GOOGLE}
              region={region}>
              <Marker
                coordinate={{
                  latitude: orderDetails?.location?.coordinates[0] || 24.8607,
                  longitude: orderDetails?.location?.coordinates[1] || 67.0011,
                }}>
                <Image source={Images.MapIcon} style={style.mapimg} />
              </Marker>
            </MapView>
          </View>
          <View style={style.locview}>
            <View>
              <Text style={style.text12}>Drop off Location</Text>
              <Text style={style.text8}>{orderDetails.building}</Text>
              <Text style={style.text11}>
                {orderDetails.street}, {orderDetails.appartment},
                {orderDetails.building}, {orderDetails.area}
              </Text>
            </View>
            <View style={style.view1}>
              <Image style={style.img} source={Images.bike1} />
            </View>
          </View>
        </View>
        <Button
          onPress={() => {
            navigation.navigate('MapScreen', {orderDetails});
          }}
          btnheight={45}
          btnColor="#1C7584"
          buttonStyle={style.btn}
          textColor="#fff"
          unseen={2}
          justifyContent="center"
          textStyle={{fontSize: 16}}
          title={'Continue'}
        />
      </ScrollView>
    </View>
  );
};

export default RiderOrderDetials;
