import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Assets from '../../../Assets';
import styles from './style';
import Button from '../../../Components/Button';
import { fontRef, heightRef } from '../../../config/screenSize';

const OnboardingScreen = ({ navigation }: any) => {
    const onboardingPages = [
        {
            backgroundColor: 'white',
            image: <ImageBackground source={Assets.OnBoard} style={styles.img} resizeMode='stretch' ><Text style={styles.text}>Skip</Text></ImageBackground>,
            title: 'Fast delivery within Abu Dhabi',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',

        },
        {
            backgroundColor: 'white',
            image: <ImageBackground source={Assets.OnBoard1} style={styles.img} resizeMode='stretch' ><Text style={styles.text}>Skip</Text></ImageBackground>,
            title: 'Customized Solutions for all',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        },
        {
            backgroundColor: 'white',
            image: <ImageBackground source={Assets.OnBoard2} style={styles.img} resizeMode='stretch' ><Text style={styles.text}>Skip</Text></ImageBackground>,
            title: 'Dedicated Field Executives',
            subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        },
    ];

    return (
        <View style={styles.cont}>
            
            <Onboarding
                pages={onboardingPages}
                showSkip={false}
                showNext={false}
                showPagination={false}
                containerStyles={{ justifyContent: 'flex-start' }}
                titleStyles={{
                    fontSize: 26 * fontRef,
                    fontWeight: '600',
                    color: 'black',
                    textAlign: 'center',
                    // marginTop: -10 * heightRef, // Remove top margin
                    // marginBottom: 0 * heightRef, // Remove bottom margin
                }}
                subTitleStyles={{
                    fontSize: 14 * fontRef,
                    fontWeight: '400',
                    textAlign: 'center',
                }}
            />

            <Button title='Next' icon={Assets.ArrowRight} onPress={() => navigation.navigate('LocationShare')}
                iconVisible={true} TouchableStyle={styles.btn} />

        </View>
    );
};



export default OnboardingScreen;
