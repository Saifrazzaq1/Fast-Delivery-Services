import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import Header from '../../../../Components/Header';
import ToggleButton from '../../../../Components/CustomToggleBtn';
import { LOGOUT } from '../../../../Redux/Reducers/Auth/actions';
import Button from '../../../../Components/Button';
import { useSelector } from 'react-redux';


const Settings = ({ navigation }: any) => {
    const user = useSelector((s:any) => s.auth.user);
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
        setIsToggled(false);
    }
    const handleLogout = () => {
        console.log('Logout Successflly');
        LOGOUT();
        navigation.navigate('EmailLogin');
    }
    return (
        <View style={styles.cont}>
            <Header title={'Settings'}  isShowBackIcon={true}   />
            <View style={{ flex: 1, padding: 20 }}>
                <View style={styles.btn}>
                    <Text style={styles.t2}>Notifications</Text>
                    <ToggleButton
                        activeColor="red"
                        inactiveColor="gray"
                        onToggle={handleToggle} />
                </View>
                <View style={styles.divider} />
                <View style={styles.btn1}>
                    <Text style={styles.t2}>Language</Text>
                    <Text style={styles.t1}>English</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.btn1}>
                    <Text style={styles.t2}>Country</Text>
                    <Text style={styles.t1}>United Arab Emirates</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.btn1}>
                <Text style={styles.t2}>User Email </Text>
                    <Text style={styles.t1}>{user.email}</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.btn1}>
                <Text style={styles.t2}>User Number </Text>
                    <Text style={styles.t1}>{user.phone}</Text>
                    </View>
                <View style={styles.divider} />
               <TouchableOpacity onPress={handleLogout} style={{flex:1,justifyContent:'flex-end' ,alignSelf:'center'}} >
                <Text style={styles.t3}>Logout</Text>
               </TouchableOpacity>
            </View>

        </View>
    );
};



export default Settings;
