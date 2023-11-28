import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from 'src/Components/Button';
import Textfield from 'src/Components/Textfield';
import style from './style';

const SelectLocation = ({navigation, route}) => {
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const {price} = route.params;
  const [index, setIndex] = useState(2);
  const handleMapTap = event => {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setRegion(prevRegion => ({
      ...prevRegion,
      latitude,
      longitude,
    }));
  };
  return (
    <View style={[style.main]}>
      <View style={style.container}>
        <MapView
          style={{flex: 1}}
          onPress={handleMapTap}
          provider="google"
          region={region}>
          <Marker coordinate={region}>
            <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
      <View style={style.downView1}>
        <Textfield
          placeholder="Search"
          borderRadius={30}
          borderColor={'white'}
          paddingLeft={20}
          backgroundColor={'#fff'}
        />
        <FontAwesome5
          style={style.eyeBtn1}
          size={20}
          name="search"
          color="#E0281C"
        />
      </View>
      <View style={style.buttonView}>
        <Button
          onPress={() => {
            navigation.navigate('LocationFields', {
              price,
              latitude: region.latitude,
              longitude: region.longitude,
              item: route?.params?.item,
            });
          }}
          buttonStyle={{position: 'absolute', marginTop: '10%', width: '100%'}}
          btnheight={55}
          btnColor={'#1C7584'}
          textColor={'#fff'}
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
