import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import style from './style';
import {FlatList} from 'react-native-gesture-handler';

const OrderWaiting = ({route}) => {

  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const {item, itemPrice, total} = route.params;
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
      <View style={style.body}>
        <View
          style={style.main}>
          <Text style={style.emitext}>Estimated delivery time</Text>
          <Text style={style.oshatext2}>25 mins</Text>
          <Image style={style.mainimg} source={Images.pmake} />
        </View>
        <View style={style.totalView}>
          <View style={style.totalV}>
            <View style={style.row}>
              <Image
                style={style.img}
                source={Images.ccard}
              />
            </View>
            <View >
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
              <View style={style.itemlist}>
                <View style={style.view1}>
                  <Text style={style.oshatext}>{item.name}</Text>
                  <Text style={style.revtext}>AED {itemPrice}</Text>
                </View>
                <Image style={listimg} source={Images.burger} />
              </View>
            )}
          />
        </View>
        <View style={mapv}>
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
        <View style={style.row}>
          <View style={style.view1}>
            <Image
              style={style.img1}
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
