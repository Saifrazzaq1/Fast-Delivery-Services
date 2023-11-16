import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import style from './style';
import Button from 'src/Components/Button';
import MapViewDirections from 'react-native-maps-directions';

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
const MapScreen = () => {
  const [state, setState] = useState({
    pickUpCord: {
      latitude: 31.4914,
      longitude: 74.2385,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    DropOffCord: {
      latitude: 31.4691,
      longitude: 74.23851,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
  });
  const {pickUpCord, DropOffCord} = state;
  const navigation = useNavigation();
  const [fullSheet, setFullSheet] = useState(false);
  const [button, setButton] = useState(false);
  const [deliver, setDeliver] = useState(false);
  const MapRef = useRef();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={style.container1}>
        <MapView style={{flex: 1}} initialRegion={pickUpCord} ref={MapRef}>
          <Marker coordinate={pickUpCord} image={Images.bike2} />
          <Marker coordinate={DropOffCord} image={Images.loc} />
          <MapViewDirections
            origin={pickUpCord}
            destination={DropOffCord}
            apikey="AIzaSyDDoKCiWeOUZIPT5lVNaUU33YlaZYy3VMw"
            strokeWidth={3}
            strokeColor="red"
            optimizeWaypoints={true}
            onReady={result => {
              MapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  left: 30,
                  bottom: 300,
                  top: 100,
                },
              });
            }}
          />
        </MapView>
      </View>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginbtn
        loginTitle={`Map`}
        loginmarginleft={'55%'}
        logintextcolor={'#000'}
        marginright={'900'}
        headerShadow
        alignItems={'left'}
      />

      {fullSheet === false ? (
        <TouchableOpacity
          onPress={() => setFullSheet(true)}
          style={[
            style.scroleView1,
            {marginTop: button === false && deliver === false ? 550 : 450},
          ]}>
          {button === true ? (
            <Button
              btnheight={55}
              unseen={2}
              showtitle2={false}
              title={'Place Order'}
              justifyContent={'center'}
              buttonStyle={{
                margin: 20,
                alignItems: 'center',
              }}
              btnColor="#1C7584"
              textColor={'#fff'}
              textStyle={{marginHorizontal: 20}}
              onPress={() => {
                setDeliver(true);
                setButton(false);
              }}
            />
          ) : null}
          {deliver === true ? (
            <Button
              btnheight={55}
              unseen={2}
              showtitle2={false}
              title={'Order Delivered'}
              justifyContent={'center'}
              buttonStyle={{
                margin: 20,
                alignItems: 'center',
              }}
              btnColor="#1C7584"
              textColor={'#fff'}
              textStyle={{marginHorizontal: 20}}
              onPress={() => {
                navigation.navigate('OrderDelivered');
              }}
            />
          ) : null}
          <View style={style.orderView}>
            <View style={style.container}>
              <MapView style={{flex: 1}} initialRegion={pickUpCord} />
            </View>
            <View
              style={{
                height: 5,
                width: 60,
                borderRadius: 30,
                marginTop: 5,
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: '#B1B1B1',
              }}
            />
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
          </View>
        </TouchableOpacity>
      ) : fullSheet === true ? (
        <Modal style={{}} animationType="slide" transparent={true}>
          <Pressable
            style={style.scroleView}
            onPress={() => {
              setFullSheet(!true);
            }}>
            <View style={style.orderView1}>
              <View style={style.container}>
                <MapView style={{flex: 1}} initialRegion={pickUpCord}></MapView>
              </View>
              <View
                style={{
                  height: 5,
                  width: 60,
                  borderRadius: 30,
                  marginTop: 5,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: '#B1B1B1',
                }}
              />
              <View
                style={{
                  height: 0.5,
                  marginTop: -10,
                  marginBottom: 10,
                  borderRadius: 30,
                  backgroundColor: '#AFAFAF80',
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Image style={style.dp} source={Images.dp} />
                <Text style={style.text1}>Foodie Hoodie</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image style={style.mapImg} source={Images.loc} />
                <Text style={style.text2}>
                  Sweihan Road, 4th Floor 17th ABD
                </Text>
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
                  <TouchableOpacity
                    onPress={() => {
                      setFullSheet(!true);
                      setButton(true);
                    }}
                    style={style.orderDetail}>
                    <View>
                      <Text style={style.text3}>Saloona Marga (1)</Text>
                      <Text style={style.redText}>AED 28.50</Text>
                    </View>
                    <View>
                      <Image style={style.mlistimg} source={Images.salan} />
                    </View>
                  </TouchableOpacity>
                )}
              />
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
          </Pressable>
        </Modal>
      ) : null}
    </View>
  );
};

export default MapScreen;
