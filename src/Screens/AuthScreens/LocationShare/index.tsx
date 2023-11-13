import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Assets from '../../../Assets';
import styles from './style';
import Button from '../../../Components/Button';
import { fontRef } from '../../../config/screenSize';
const LocationShare = ({ navigation }: any) => {

    return (
        <View style={styles.cont}>
            <ImageBackground source={Assets.location} style={styles.img} />
            <View style={styles.main}>
                <Text style={styles.text}>Share your location</Text>
                <Text style={{ fontSize: 14 * fontRef, fontWeight: '400', textAlign: 'center' , marginBottom:30}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Text>
                <Button title='Yes, share my location' TouchableStyle={styles.btn} onPress={() => navigation.navigate('LocationShare')} />
                <Button title='No, choose location manually' customBackgroundColor={'white'} TouchableStyle={styles.btn1}
                    textStyle={{ color: '#1C7584', }} onPress={() => navigation.navigate('LocationScreen')}  />
              
            </View>
        </View>
    );
};



export default LocationShare;
