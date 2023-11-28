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
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import style from './style';

const MapScreen = ({route, navigation}) => {
  const {orderDetails} = route.params;
  const [state, setState] = useState({
    pickUpCord: {
      latitude: 31.6211,
      longitude: 74.2824,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    DropOffCord: {
      latitude:
        orderDetails?.bussinessId?.[0]?.location?.coordinates[0] || 24.8607,
      longitude: 74.2385,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
  });
  const {pickUpCord, DropOffCord} = state;
  const [fullSheet, setFullSheet] = useState(false);
  const [button, setButton] = useState(false);
  const [deliver, setDeliver] = useState(false);
  const MapRef = useRef();
  return (
    <View style={style.body}>
      <View style={style.container1}>
        <MapView style={style.body} initialRegion={pickUpCord} ref={MapRef}>
          <Marker
            coordinate={pickUpCord}
            image={Images.bike2}
            title="Rider Location"
          />
          <Marker
            coordinate={DropOffCord}
            image={Images.loc}
            title="Pick-up Location"
          />
          <MapViewDirections
            origin={pickUpCord}
            destination={DropOffCord}
            apikey="AIzaSyDDoKCiWeOUZIPT5lVNaUU33YlaZYy3VMw"
            strokeWidth={4}
            strokeColor="red"
            optimizeWaypoints={true}
            onReady={result => {
              MapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  left: 30,
                  bottom: 200,
                  top: 200,
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
              title={'Order Picked'}
              justifyContent={'center'}
              buttonStyle={style.orderbtn}
              btnColor="#1C7584"
              textColor={'#fff'}
              textStyle={style.mh}
              onPress={() => {
                setDeliver(true);
                setButton(false);
                setState({
                  pickUpCord: {
                    latitude:
                      orderDetails?.bussinessId?.[0]?.location
                        ?.coordinates[0] || 24.8607,
                    longitude: 74.2385,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  },
                  DropOffCord: {
                    latitude: orderDetails?.location?.coordinates[0] || 24.8607,
                    longitude:
                      orderDetails?.location?.coordinates[1] || 67.0011,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  },
                });
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
              buttonStyle={style.orderbtn}
              btnColor="#1C7584"
              textColor={'#fff'}
              textStyle={style.mh}
              onPress={() => {
                navigation.navigate('OrderDelivered', {orderDetails});
              }}
            />
          ) : null}
          <View style={style.orderView}>
            <View style={style.container}>
              <MapView style={style.flex} initialRegion={pickUpCord} />
            </View>
            <View style={style.dragline} />
            <View style={style.row}>
              <Image style={style.dp} source={Images.dp} />
              <Text style={style.text1}>
                {orderDetails?.bussinessId?.[0]?.bussiness_name}
              </Text>
            </View>
            <View style={style.addview}>
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
                <MapView
                  style={style.flex}
                  initialRegion={pickUpCord}></MapView>
              </View>
              <View style={style.dragline} />
              <View style={style.Ldragline} />
              <View style={style.row}>
                <Image style={style.dp} source={Images.dp} />
                <Text style={style.text1}>
                  {orderDetails?.bussinessId?.[0]?.bussiness_name}
                </Text>
              </View>
              <View style={style.addview}>
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
                  <TouchableOpacity
                    onPress={() => {
                      setFullSheet(!true);
                      setButton(true);
                    }}
                    style={style.orderDetail}>
                    <View>
                      <Text style={style.text3}>{item.item}</Text>
                      <Text style={style.redText}>AED {item.price}</Text>
                    </View>
                    <View>
                      <Image style={style.mlistimg} source={Images.salan} />
                    </View>
                  </TouchableOpacity>
                )}
              />
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
          </Pressable>
        </Modal>
      ) : null}
    </View>
  );
};

export default MapScreen;
