import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Text, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Button from 'src/Components/Button';
import Textfield from 'src/Components/Textfield';
import style from './style';

const SelectLocation = ({navigation, route}) => {
  console.log('🚀 ~ file: index.jsx:11 ~ SelectLocation ~ route:', route);
  const [index, setIndex] = useState(2);
  const [value, setValue] = useState(false);
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  // const {total,item,itemPrice,count}=route.params;
  return (
    <View style={[style.main]}>
      <View style={style.container}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          region={region}
          onRegionChangeComplete={region => setRegion(region)}>
          <Marker coordinate={region}>
            <Callout>
              <Text>I'm here </Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
      <View style={style.downView1}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          textInputProps={{
            placeholderTextColor: 'grey',
          }}
          styles={{
            textInputContainer: {
              backgroundColor: '#fff',
              borderRadius: 40,
              width: '100%',
              height: 55,
              paddingTop: 10,
              marginTop: 10,
              paddingHorizontal: 10,
            },
            textInput: {
              height: 38,
              color: 'grey',
              fontSize: 16,
            },
          }}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
        <FontAwesome5
          onPress={() => setEnabled(!Enabled)}
          style={style.eyeBtn1}
          size={18}
          name="search"
          color="#E0281C"
        />
      </View>
      <View style={style.buttonView}>
        <Button
          onPress={() => {
            navigation.navigate('LocationFields', {
              total,
              itemPrice,
              item: route?.params?.item,
              count,
            });
          }}
          buttonStyle={{position: 'absolute', marginTop: 90, width: '100%'}}
          btnheight={55}
          btnColor="#1C7584"
          textColor="#fff"
          unseen={index}
          justifyContent="center"
          textStyle={{fontSize: 16}}
          title={'Set Location'}
        />
      </View>
    </View>
  );
};

export default SelectLocation;
