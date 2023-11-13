import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import Button from '../../../Components/Button';
import CustomTextField from '../../../Components/TextField';
import Header from '../../../Components/Header';
import { fontRef, heightRef } from '../../../config/screenSize';
import CustomCheckbox from '../../../Components/Checkbox';
import Assets from '../../../Assets';
import { REGITER } from '../../../Redux/Reducers/Auth/actions';

const CreateAccount = ({ navigation }: any) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Registered');
        console.log(name, phone, email,password);
        const data = {name, phone, email,password}
        REGITER(data,(res:any)=>{
            if(res.success)
            {
                console.log({res})
                navigation.navigate('EmailLogin');
            }
        })
    }
    return (
        <View style={styles.cont}>
            <Header title='Login' />
            <View style={styles.main}>
                <Text style={styles.text}>Continue with email</Text>
                <CustomTextField style={styles.field} title='First name'
                    placeholder='Younas' placeholderColor={'#B7B7B7'}
                    value={name} onChangeText={setName} />
                <CustomTextField style={styles.field} title='Phone Number'
                    placeholder='+923123456789'  placeholderColor={'#B7B7B7'} 
                    value={phone} onChangeText={setPhone}/>
                <CustomTextField style={styles.field} title='Email'
                    placeholder='ABCD@GMAIL.COM' placeholderColor={'#B7B7B7'} 
                    value={email} onChangeText={setEmail}/>
                <CustomTextField style={styles.field} title='Password' placeholder='Password'
                    placeholderColor={'#B7B7B7'} secureText={true} iconVisible={true} 
                    value={password} onChangeText={setPassword}/>
                <Text style={{ fontSize: 12 * fontRef, fontWeight: '500', marginBottom: 60 * heightRef, }}>
                    Your Password must be at least 6 characters</Text>
                <CustomCheckbox
                    activeColor="#E0281C"
                    inactiveColor="white"
                    icon={Assets.Check}
                    label='Yes, I Want To Receive Offers And Discounts' />
                <Button title='Create account' TouchableStyle={styles.btn1}  onPressButton={handleRegister}/>
                <Text style={styles.t2}>By creating an account  you agree to the
                    <Text style={{ color: '#E0281C' }}> privacy policy </Text>
                    and to the <Text style={{ color: '#E0281C' }}>terms of use</Text></Text>

            </View>
        </View>
    );
};



export default CreateAccount;
