import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from 'src/Components/Button';
import Textfield from 'src/Components/Textfield';
import style from './style';

const Location = ({navigation}) => {
  const [index, setIndex] = useState(2);
  const [value, setValue] = useState(false);
  const [region, setRegion] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  return (
    <View style={[style.main]}>
      <View style={style.container}>
      <MapView style={{ flex: 1 }} 
          provider={PROVIDER_GOOGLE}
          region={region} onRegionChangeComplete={region => setRegion(region)}>
  <Marker  coordinate={region} />
</MapView>
      </View>
      {value === true ? (
        <>
          <View style={style.downView1}>
            <Textfield
              placeholder="Search"
              borderRadius={30}
              borderColor={'white'}
              paddingLeft={20}
              backgroundColor={'#fff'}
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
                navigation.navigate('Login');
              }}
              buttonStyle={{position: 'absolute', width: '100%'}}
              btnheight={55}
              btnColor="#1C7584"
              textColor="#fff"
              unseen={index}
              justifyContent="center"
              textStyle={{fontSize: 16}}
              title={'Set Location'}
            />
          </View>
        </>
      ) : (
        <View style={style.downView}>
          <Text style={style.text}>Share your location</Text>
          <Text style={style.text2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
          <Button
            onPress={() => {
              navigation.navigate('Login');
            }}
            btnheight={55}
            btnColor="#1C7584"
            textColor="#fff"
            unseen={index}
            justifyContent="center"
            textStyle={{fontSize: 16}}
            title={'Yes, share my location'}
          />
          <Button
            onPress={() => {
              setValue(true);
            }}
            title={'No, choose location manually'}
            btnheight={55}
            textStyle={{fontSize: 16}}
            btnColor="white"
            justifyContent="center"
            textColor={'#1C7584'}
          />
        </View>
      )}
    </View>
  );
};

export default Location;
