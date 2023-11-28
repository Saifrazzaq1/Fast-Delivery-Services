import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import style from './style';

const LocationFields = ({route}) => {
  const {price, latitude, longitude} = route.params;
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lineNumber, setLineNumber] = useState('');
  const [area, setArea] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');
  const [apartNo, setApartNo] = useState('');
  const [additional, setAdditional] = useState('');
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  return (
    <View style={style.body}>
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        headerShadow
        logintextcolor={'black'}
        loginmarginleft={'49%'}
        backIcon
        loginTitle={'Location'}
      />
      <View style={style.mainview}>
        <ScrollView>
          <Text style={style.text}>Contact details</Text>
          <Textfield
            value={firstName}
            onChangeText={setFirstName}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            placeholder={'First Name'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
          />
          <Textfield
            value={lastName}
            onChangeText={setLastName}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            placeholder={'Last Name'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
          />
          <Textfield
            value={lineNumber}
            onChangeText={setLineNumber}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            placeholder={'landline number (optional)'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
          />
          <Textfield
            value={phone}
            onChangeText={setPhone}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            placeholder={'Phone Number +92'}
          />
          <View
            style={{
              marginVertical: 20,
              height: 180,
              width: '100%',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
            <MapView
              style={{flex: 1}}
              provider={PROVIDER_GOOGLE}
              region={region}>
              <Marker coordinate={region}>
                <Callout>
                  <Text>I'm here</Text>
                </Callout>
              </Marker>
            </MapView>
            <Button
              btnheight={55}
              unseen={2}
              buttonStyle={{
                width: '50%',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: '-10%',
              }}
              btnColor="#E0281C"
              title={'Change Location'}
              textColor={'#fff'}
              showtitle2={true}
              textStyle={{texlAlign: 'center'}}
              onPress={() => {
                navigation.navigate('SelectLocation', {price});
              }}
            />
          </View>
          <Textfield
            value={email}
            onChangeText={setEmail}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            placeholder={'Email'}
          />
          <Textfield
            value={area}
            onChangeText={setArea}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            placeholder={'Area'}
          />
          <Textfield
            value={address}
            onChangeText={setAddress}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            placeholder={'Address'}
          />
          <Textfield
            value={street}
            onChangeText={setStreet}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            placeholder={'Street'}
          />
          <Textfield
            value={building}
            onChangeText={setBuilding}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            placeholder={'Building'}
          />
          <Textfield
            value={apartNo}
            onChangeText={setApartNo}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            placeholder={'Apartment No'}
          />
          <Textfield
            value={additional}
            onChangeText={setAdditional}
            borderBottomWidth={1}
            borderColor={'#B7B7B7'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            placeholder={'Additional Directions (optional)'}
          />
          <View style={style.btn}></View>
          <Button
            onPress={() => {
              navigation.navigate('CheckOutDetails', {
                price,
                latitude,
                longitude,
                firstName,
                lastName,
                address,
                phone,
                building,
                apartNo,
                area,
                street,
              });
            }}
            btnheight={60}
            unseen={2}
            title={'Continue'}
            textColor={'#fff'}
            justifyContent={'center'}
            btnColor="#1C7584"
            buttonStyle={{marginTop: 60}}
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default LocationFields;
