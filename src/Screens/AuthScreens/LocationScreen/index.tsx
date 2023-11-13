import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Assets from '../../../Assets';
import styles from './style';
import Button from '../../../Components/Button';
import CustomTextField from '../../../Components/TextField';
const LocationScreen = ({ navigation }: any) => {

    return (
        <View style={styles.cont}>
            <ImageBackground source={Assets.locationMap} style={styles.img}>
                <CustomTextField placeholder='Search' image={Assets.Search} inputStyle={styles.btn} />
                    <Button title='Set location' TouchableStyle={styles.btn1} onPress={() => navigation.navigate('LoginScreen')} />
           </ImageBackground>

           
        </View>
    );
};



export default LocationScreen;
