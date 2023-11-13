import React from 'react';
import { Image, Text, View } from 'react-native';
import Assets from '../../../Assets';
import styles from './style';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import Divider from '../../../Components/Divider';

const LoginScreen = ({ navigation }: any) => {

    return (
        <View style={styles.cont}>
            
            <Header title='Login' shareText='Guest' onPressText={() => { console.log('press') }} />
            <View style={styles.main}>
                <Image source={Assets.Logo} style={styles.img} />
                <Text style={styles.text}>Fastest Delivery service</Text>
                <Text style={styles.t1} >Login or create an account</Text>
                <Text style={styles.t2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha</Text>
                <Button title='Login as a Quest' TouchableStyle={styles.btn1} />
                <Divider text="OR" />
                <Button title='Continue with Google' customBackgroundColor={'#EB4335'} socialIcon={Assets.Google}
                    TouchableStyle={styles.social} />
                <Button title='Continue with Facebook' customBackgroundColor={'#4385F6'} socialIcon={Assets.Facebook}
                    TouchableStyle={styles.social} />
                <Button title='Continue with Email' textColor={'black'} socialIcon={Assets.Email}
                    TouchableStyle={styles.btn} onPress={() => navigation.navigate('EmailLogin')} />
            </View>

        </View>
    );
};



export default LoginScreen;
