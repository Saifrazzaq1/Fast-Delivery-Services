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
  {
    od: '#234',
    payment: 'Paid Online',
    cm: 'Haris iramani',
  },
  {
    od: '#234',
    payment: 'Paid Online',
    cm: 'Haris iramani',
  },
];
const RiderOrderDetials = ({route}) => {
  const {itemNo} = route.params;
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const navigation = useNavigation();
  return (
    <View style={{paddingBottom: 45}}>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginbtn
        loginTitle={`Order ${itemNo}`}
        loginmarginleft={'47%'}
        logintextcolor={'#000'}
        marginright={'900'}
        alignItems={'left'}
        backIcon
      />

      <ScrollView
        style={{
          marginHorizontal: 20,
          marginBottom: '10%',
        }}>
        <View style={style.orderView}>
          <View style={style.container}>
            <MapView
              style={{flex: 1}}
              provider={PROVIDER_GOOGLE}
              region={region}
              onRegionChangeComplete={region => setRegion(region)}></MapView>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={style.dp} source={Images.dp} />
            <Text style={style.text1}>Foodie Hoodie</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image style={style.mapImg} source={Images.loc} />
            <Text style={style.text2}>Sweihan Road, 4th Floor 17th ABD</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={style.smallView}>
              <Image style={style.smallViewImg} source={Images.call} />
            </View>
            <View style={style.smallView}>
              <Image style={style.smallViewImg} source={Images.sms} />
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
          <View style={style.details}>
            <View>
              <Text style={style.text4}>Foodie Hoodie</Text>
              <Text style={style.text5}>Hussam Noor</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={style.bigViewImg} source={Images.sms} />
              <Image style={style.bigViewImg} source={Images.call} />
            </View>
          </View>
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
          <View style={style.pinkView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={style.bigViewImg2} source={Images.ccard} />
              <Text style={style.text9}>Paid Online</Text>
            </View>
            <View>
              <Text style={style.redText}>AED 10.00</Text>
            </View>
          </View>
          <View
            style={{
              marginBottom: 10,
              marginTop: 30,
              height: 160,
              width: '100%',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: 31.5204,
                longitude: 74.3587,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}></MapView>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={style.text12}>Drop off Location</Text>
              <Text style={style.text8}>zam zam height (Masdar City)</Text>
              <Text style={style.text11}>
                Sweihan Road, zam zam hieght, 4th, 17
              </Text>
            </View>
            <View style={style.view1}>
              <Image
                style={{width: 35, height: 35, marginTop: 10}}
                source={Images.bike1}
              />
            </View>
          </View>
        </View>
        <Button
          onPress={() => {
            const {itemNo} = route.params;
            navigation.navigate('MapScreen', {itemNo});
          }}
          btnheight={45}
          btnColor="#1C7584"
          buttonStyle={{marginTop: 40, marginBottom: 40}}
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
