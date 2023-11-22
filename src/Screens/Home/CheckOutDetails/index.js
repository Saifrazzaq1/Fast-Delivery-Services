import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import PayWith from 'src/Components/PayWith';
import Images from '../../../Assets';
import style from './style';

const CheckOutDetails = ({ route }) => {

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
  const { total, item, itemPrice } = route.params;
  let riderTip = 7;
  let serviceFee = 8;
  return (
    <ScrollView style={{ backgroundColor: '#fff' }} stickyHeaderIndices={[0]}>
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
      <View style={style.new}>
        <View style={style.mapview}>
          <MapView
            style={{ flex: 1 }}
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
            <Image style={style.img} source={Images.knife} />
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
        <View style={style.row}>
          <Image style={style.img} source={Images.clock} />
          <Text style={style.oshatextc}>Within 50 mins</Text>
        </View>
        <View style={style.line} />

        <TouchableOpacity
          onPress={() => {
            setIschecked(!ischecked);
            setEnabled(!Enabled);
          }}
          style={style.check}>
          <View style={style.check2}>
            <View style={style.row}>
              <Image
                style={style.img1}
                source={Images.bike}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
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
              style.icon
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
          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity
              onPress={() => {
                setradioActive(1);
                setShowModal(true);
              }}
              style={style.btn1}>
              <View
                style={[
                 style.btn2,
                  {
                    borderColor: radioActive === 1 ? 'black' : 'grey',
                  },
                ]}
              />
              {radioActive === 1 ? (
                <View
                  style={style.btn3}>
                  <View style={style.twoview} />
                </View>
              ) : null}
              <Image
                style={[
                  style.img2,
                  { tintColor: radioActive === 1 ? 'black' : 'grey' },
                ]}
                source={Images.ccard}
              />
              <Text
                style={[
                  style.radioText,
                  { color: radioActive === 1 ? 'black' : 'grey' },
                ]}>
                Credit Card
              </Text>
           
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setradioActive(2);
              }}
              style={style.btnview}>
              <View
                style={[
                style.btn2,
                  {
                    borderColor: radioActive === 2 ? 'black' : 'grey',
                  },
                ]}
              />
              {radioActive === 2 ? (
                <View
                  style={style.btn3}>
                  <View style={style.twoview} />
                </View>
              ) : null}
              <Image
                style={[
                  style.img2,
                  { tintColor: radioActive === 2 ? 'black' : 'grey' },
                ]}
                source={Images.walet}
              />

              <Text
                style={[
                  style.radioText,
                  { color: radioActive === 2 ? 'black' : 'grey' },
                ]}>
                Cash
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.uncheck}>
            <Text style={style.oshatextv}>
              Uncheck contactless delivery to use cash payment
            </Text>
          </View>
        </View>
        <View style={style.line} />
        <View style={style.view1}>
          <Text style={style.oshatext}>Payment Summary</Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textany}>Subtotal</Text>
          <Text style={style.deltextnext}>AED {total}</Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textany}>Service Fee</Text>
          <Text style={style.deltextnext}> AED 20</Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textany}>Delivery fee</Text>
          <Text style={style.deltextnext}>AED 75</Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textany}>Rider Tip</Text>
          <Text style={style.deltextnext}>AED 50</Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textanyT}>Total amount</Text>
          <Text style={style.deltextnextT}>
            AED {total + serviceFee + riderTip}
          </Text>
        </View>
        <View style={style.btn}>
          <Button
            btnheight={55}
            unseen={2}
            showtitle2={false}
            title={'Place Order'}
            justifyContent={'center'}
            buttonStyle={style.orderbtn}
            btnColor="#1C7584"
            textColor={'#fff'}
            textStyle={{ marginHorizontal: 20 }}
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
