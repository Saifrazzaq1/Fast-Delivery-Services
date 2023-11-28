import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MapView, {Callout, Marker} from 'react-native-maps';
import Header from 'src/Components/Header';
import {useAppSelector} from 'src/Helper/Hooks/reduxHooks';
import Images from '../../../Assets';
import style from './style';

const OrderWaiting = ({route}) => {
  const {
    price,
    latitude,
    longitude,
    firstName,
    lastName,
    address,
    building,
    apartNo,
    phone,
    street,
    area,
  } = route.params;
  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const {cart} = useAppSelector(s => s);
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        headerShadow
        backIcon
        loginTitle={'Your Order'}
        logintextcolor={'black'}
        loginmarginleft={'47%'}
      />
      <ScrollView>
        <View style={style.body}>
          <View style={style.main}>
            <Text style={style.emitext}>Estimated delivery time</Text>
            <Text style={style.oshatext2}>25 mins</Text>
            <Image style={style.mainimg} source={Images.pmake} />
          </View>
          <View style={style.totalView}>
            <View style={style.totalV}>
              <View style={style.row}>
                <Image style={style.img} source={Images.ccard} />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={style.oshatext1}>Credit Card</Text>
                <Text style={style.emitext}>Total Amount</Text>
              </View>
            </View>
            <Text style={style.revtext}>AED {price}</Text>
          </View>
          <View style={style.line} />
          <View style={style.view1}>
            <Text style={style.oshatext}>Payment Summary</Text>
            <FlatList
              data={cart.cart}
              renderItem={({item}) => (
                <View style={style.itemlist}>
                  <View style={style.view1}>
                    <Text style={style.oshatext}>{item.item.item}</Text>
                    <Text style={style.revtext}>AED {item.item.price}</Text>
                  </View>
                  <Image style={style.listimg} source={Images.burger} />
                </View>
              )}
            />
          </View>
          <View style={style.mapv}>
            <MapView style={{flex: 1}} provider="google" region={region}>
              <Marker coordinate={region}>
                <Callout>
                  <Text>I'm here</Text>
                </Callout>
              </Marker>
            </MapView>
          </View>
          <View style={style.row}>
            <View style={style.view1}>
              <Image style={style.img1} source={Images.bike1} />
            </View>
            <View>
              <Text style={style.oshatext}>
                {firstName} {lastName}
              </Text>
              <Text style={style.oshatext1}>{address} </Text>
              <Text style={style.emitext}>
                {area}, {street}, {building}, {apartNo}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderWaiting;
