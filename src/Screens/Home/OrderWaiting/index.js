import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import style from './style';
import {FlatList} from 'react-native-gesture-handler';

const OrderWaiting = ({route}) => {
  const [select, setSelect] = useState(null);
  const [ischecked, setIschecked] = useState([]);
  const [radioActive, setradioActive] = useState(1);
  const navigation = useNavigation();
  const [counter, setCounter] = useState(1);
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const {finalBill, item, itemPrice, count, total} = route.params;
  const itemsArray = item;
  return (
    <ScrollView style={{backgroundColor: '#fff'}} stickyHeaderIndices={[0]}>
      <Header
        loginbtn
        loginTitle={'Your order'}
        headerBg
        headerbgcolor={'white'}
        headerShadow
        logintextcolor={'black'}
        loginmarginleft={130}
        backIcon
        marginright={90}
      />
      <View style={{margin: 20, paddingBottom: 50}}>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={style.emitext}>Estimated delivery time</Text>
          <Text style={style.oshatext2}>25 mins</Text>
          <Image style={{width: 250, height: 250}} source={Images.pmake} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#fdf4f4',
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 25, height: 25, marginTop: 5}}
                source={Images.ccard}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={style.oshatext1}>Credit Card</Text>
              <Text style={style.emitext}>Total Amount</Text>
            </View>
          </View>
          <Text style={style.revtext}>AED {total}</Text>
        </View>

        <View style={style.line} />

        <View style={style.view1}>
          <Text style={style.oshatext}>Payment Summary</Text>
          <FlatList
            data={itemsArray}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View style={style.view1}>
                  <Text style={style.oshatext}>{item.name}</Text>
                  <Text style={style.revtext}>AED {itemPrice}</Text>
                </View>
                <Image
                  style={{
                    height: 70,
                    width: 100,
                    borderRadius: 20,
                  }}
                  source={Images.burger}
                />
              </View>
            )}
          />
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
            provider={PROVIDER_GOOGLE}
            region={region}
            onRegionChangeComplete={region => setRegion(region)}>
            <Marker coordinate={region}>
              <Callout>
                <Text>I'm here</Text>
              </Callout>
            </Marker>
          </MapView>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={style.view1}>
            <Image
              style={{width: 35, height: 35, marginTop: 20}}
              source={Images.bike1}
            />
          </View>
          <View>
            <Text style={style.oshatext}>Younus Akram</Text>
            <Text style={style.oshatext1}>zam zam height (Masdar City)</Text>
            <Text style={style.emitext}>
              Sweihan Road, zam zam hieght, 4th, 17
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderWaiting;
