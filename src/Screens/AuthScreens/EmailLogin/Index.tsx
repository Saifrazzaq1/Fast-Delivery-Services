import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import Button from '../../../Components/Button';
import CustomTextField from '../../../Components/TextField';
import Header from '../../../Components/Header';
import { LOGIN } from '../../../Redux/Reducers/Auth/actions';
import { useNavigation } from '@react-navigation/native';

const EmailLogin = ({ navigation }: any) => {
      
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login Pressed');
        console.log( email,password);
        const data = { email,password}
        LOGIN(data,(res:any)=>{
            if(res.success)
            {
                console.log({LOGIN});
                navigation.navigate('BottomNavigation');
            } 
        })
    }
    return (
        
        <View style={styles.cont}>
            <Header title='Login' />
            <View style={styles.main}>
                <Text style={styles.text}>Continue with email</Text>
                <CustomTextField style={styles.field} title='Email' 
                    placeholder='ABCD@GMAIL.COM' placeholderColor={'#B7B7B7'} 
                    value={email} onChangeText={setEmail}/>
                <CustomTextField style={styles.field} title='Password'
                    placeholder='Password' placeholderColor={'#B7B7B7'}
                    iconVisible={true} secureText={true} 
                    value={password} onChangeText={setPassword}/>
                <Text style={styles.t1}>Forgot Password</Text>
                <Button title='Login' TouchableStyle={styles.btn1} onPress={handleLogin} />
                <Button title='Create an account' TouchableStyle={styles.btn} textColor={'#E0281C'}
                    onPress={() => navigation.navigate('CreateAccount')} />
            </View>

        </View>
    );
};



export default EmailLogin;
