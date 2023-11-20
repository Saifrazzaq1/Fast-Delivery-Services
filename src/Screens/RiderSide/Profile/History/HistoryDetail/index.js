import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from 'src/Components/Header';
import style from './style';
import Images from '../../../../../Assets';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const Items = [
  {
    id: 0,
    title: 'Saloona Marga (1)',
    price: 'AED 78.16',
    image: Images.salan,
  },
  {
    id: 1,
    title: 'Saloona Marga (1)',
    price: 'AED 78.16',
    image: Images.salan,
  },
];

const HistoryFDetail = ({navigation}) => {
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={'45%'}
        headerShadow
        loginTitle={'Order details'}
        logintextcolor={'black'}
      />
      <View style={style.mainview}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.Card}>
            <Text style={style.text}>Order Details</Text>
            <Text style={style.text1}>Order Number #234</Text>
            <Text style={style.text}>Customer Name</Text>
            <Text style={style.text1}>Haris iramani</Text>
          </View>
          <Text style={style.text3}>Order Number #234</Text>
          <FlatList
            data={Items}
            renderItem={({item}) => (
              <View style={style.items}>
                <View>
                  <Text style={style.itemTitle}>{item.title}</Text>
                  <Text style={style.itemPrice}>{item.price}</Text>
                </View>
                <Image source={item.image} style={style.itemImg} />
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
          <View style={style.mapCard}>
            <View style={style.map}>
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
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={style.maptext}>Drop off Location</Text>
                <Text style={style.maptext1}>zam zam height (Masdar City)</Text>
                <Text style={style.maptext2}>
                  Sweihan Road, zam zam hieght, 4th, 17
                </Text>
              </View>
              <Image
                source={Images.bike1}
                style={{height: 37, width: 37, alignSelf: 'center'}}
              />
            </View>
          </View>

          <TouchableOpacity style={style.pay} onPress={() => {}}>
            <Icon
              type={IconType.Ionicons}
              name="card-outline"
              size={24}
              color="black"
              style={{marginRight: 5}}
            />
            <Text style={style.text1}>Paid Online</Text>
            <Text style={style.text2}>AED 78.16</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default HistoryFDetail;
