import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import PayWith from 'src/Components/PayWith';
import Images from '../../../Assets';
import style from './style';

const CheckOutDetails = ({route}) => {
  console.log('🚀 ~ file: index.js:12 ~ CheckOutDetails ~ route:', route);
  const [select, setSelect] = useState(null);
  const [ischecked, setIschecked] = useState([]);
  const [radioActive, setradioActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [Enabled, setEnabled] = useState(false);
  const navigation = useNavigation();
  const [counter, setCounter] = useState(1);
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const {total, item, itemPrice, count} = route.params;
  let riderTip = 7;
  let serviceFee = 8;
  return (
    <ScrollView style={{backgroundColor: '#fff'}} stickyHeaderIndices={[0]}>
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        headerShadow
        logintextcolor={'black'}
        backIcon
        locationText
        marginright={90}
      />
      <View style={{margin: 20}}>
        <View
          style={{
            marginBottom: 10,
            height: 180,
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
            <Image style={{width: 35, height: 35}} source={Images.knife} />
          </View>
          <View>
            <Text style={style.oshatext}>Younus Akram</Text>
            <Text style={style.oshatext1}>zam zam height (Masdar City)</Text>
            <Text style={style.emitext}>
              Sweihan Road, zam zam hieght, 4th, 17
            </Text>
            <Text style={style.emitext}>Mobile +9712345678</Text>
          </View>
        </View>
        <View style={style.line} />
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 25, height: 25}} source={Images.clock} />
          <Text style={style.oshatextc}>Within 50 mins</Text>
        </View>
        <View style={style.line} />

        <TouchableOpacity
          onPress={() => {
            setIschecked(!ischecked);
            setEnabled(!Enabled);
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: '#fdf4f4',
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              paddingHorizontal: 15,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 35, height: 35, marginTop: 5}}
                source={Images.bike}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={style.oshatext1}>Contactless Delivery</Text>
              <Text style={style.oshatextm}>
                Leave order at doorstep and inform me
              </Text>
              <Text style={style.emitext}>
                Not Applicable with cash payment
              </Text>
            </View>
          </View>
          <FontAwesome5
            style={[
              style.eyeBtn1,
              {marginTop: 20, marginLeft: 30, color: 'black'},
            ]}
            size={25}
            name={Enabled ? 'check-square' : 'square'}
            color={Enabled ? 'green' : '#B7B7B7'}
          />
        </TouchableOpacity>
        <View style={style.line} />

        <View
          style={{
            width: '100%',
          }}>
          <Text style={style.textplay}>Pay with</Text>
          <View style={{marginHorizontal: 10}}>
            <TouchableOpacity
              onPress={() => {
                setradioActive(1);
                setShowModal(true);
              }}
              style={{flexDirection: 'row', marginTop: 30}}>
              <View
                style={[
                  {
                    height: 25,
                    width: 25,
                    borderRadius: 15,
                    borderWidth: 1,
                  },
                  {
                    borderColor: radioActive === 1 ? 'black' : 'grey',
                  },
                ]}
              />
              {radioActive === 1 ? (
                <View
                  style={{
                    height: 25,
                    width: 22.5,
                    marginLeft: -22.5,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: 20,
                      width: 20,
                      borderRadius: 15,
                      marginTop: 2.5,
                      borderColor: 'black',
                      borderWidth: 1,
                    }}
                  />
                </View>
              ) : null}
              <Image
                style={[
                  {width: 25, height: 25, marginLeft: 10},
                  {tintColor: radioActive === 1 ? 'black' : 'grey'},
                ]}
                source={Images.ccard}
              />
              <Text
                style={[
                  style.radioText,
                  {color: radioActive === 1 ? 'black' : 'grey'},
                ]}>
                Credit Card
              </Text>
              {/* <Image
                style={{width: 35, height: 35, marginTop: 5}}
                source={Images.check}
              /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setradioActive(2);
              }}
              style={{flexDirection: 'row', marginTop: 50}}>
              <View
                style={[
                  {
                    height: 25,
                    width: 25,
                    borderRadius: 15,
                    borderWidth: 1,
                  },
                  {
                    borderColor: radioActive === 2 ? 'black' : 'grey',
                  },
                ]}
              />
              {radioActive === 2 ? (
                <View
                  style={{
                    height: 25,
                    width: 22.5,
                    marginLeft: -22.5,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'black',
                      height: 20,
                      width: 20,
                      borderRadius: 15,
                      marginTop: 2.5,
                      borderColor: 'black',
                      borderWidth: 1,
                    }}
                  />
                </View>
              ) : null}
              <Image
                style={[
                  {width: 25, height: 25, marginLeft: 10},
                  {tintColor: radioActive === 2 ? 'black' : 'grey'},
                ]}
                source={Images.walet}
              />

              <Text
                style={[
                  style.radioText,
                  {color: radioActive === 2 ? 'black' : 'grey'},
                ]}>
                Cash
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#1C75840D',
              padding: 20,
              borderRadius: 10,
              marginTop: 40,
            }}>
            <Text style={style.oshatextv}>
              Uncheck contactless delivery to use cash payment
            </Text>
          </View>
          {/* <View style={{}}>
            <Image
              style={{
                width: 29,
                height: 29,
                marginRight: 10,
                alignSelf: 'center',
              }}
              source={Images.emark}
            />
          </View> */}
        </View>
        <View style={style.line} />
        <View style={style.view1}>
          <Text style={style.oshatext}>Payment Summary</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Subtotal</Text>
          <Text style={style.deltextnext}>AED {total}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Service Fee</Text>
          <Text style={style.deltextnext}> AED 20</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Delivery fee</Text>
          <Text style={style.deltextnext}>AED 75</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Rider Tip</Text>
          <Text style={style.deltextnext}>AED 50</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textanyT}>Total amount</Text>
          <Text style={style.deltextnextT}>
            AED {total + serviceFee + riderTip}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 130,
          }}>
          <Button
            btnheight={55}
            unseen={2}
            showtitle2={false}
            title={'Place Order'}
            justifyContent={'center'}
            buttonStyle={{marginTop: 20, width: '100%', alignItems: 'center'}}
            btnColor="#1C7584"
            textColor={'#fff'}
            textStyle={{marginHorizontal: 20}}
            onPress={() => {
              navigation.navigate('OrderWaiting', {
                total,
                riderTip,
                serviceFee,
                item: route?.params?.item,
                itemPrice,
              });
            }}
          />
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={[style.centeredView]}>
          <View style={style.modalView}>
            <PayWith
              radio={radioActive}
              item={item}
              total={total}
              riderTip={riderTip}
              serviceFee={serviceFee}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
export default CheckOutDetails;
