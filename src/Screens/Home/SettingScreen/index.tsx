import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import Button from '../../../Components/Button';
import CustomTextField from '../../../Components/TextField';
import Header from '../../../Components/Header';
import Assets from '../../../Assets';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { useSelector } from 'react-redux';


const data = [
    {
        id: '1',
        Title: 'Your Order',
        image: Assets.Order,
        onPress: 'YourOrder',
    },
    {
        id: '2',
        Title: 'Offer',
        image: Assets.Offer,
        onPress: 'Offers',
    },
    {
        id: '3',
        Title: 'Notification',
        image: Assets.Bell,
        onPress: 'Notification',
    },
    {
        id: '4',
        Title: 'FDS Pay',
        image: Assets.pay,
        onPress: 'Fdspay',
    },
    {
        id: '5',
        Title: 'Favourite',
        image: Assets.Heart,
        onPress: 'Favourite',
    },
    {
        id: '6',
        Title: 'Get help',
        image: Assets.Help,
        onPress: 'GetHelp',
    },
    {
        id: '7',
        Title: 'About',
        image: Assets.About,
        onPress: 'AboutScreen',
    },

];

const SettingScreen = ({ navigation }: any) => {

    const user = useSelector((s:any) => s.auth.user);
  
    return (
        <SafeAreaView style={styles.cont}>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={{
                    width: 'auto', height: 85, alignItems: 'center',
                    backgroundColor: 'white', flexDirection: 'row', marginBottom: 20
                }}>
                    <Image source={Assets.Pic} style={{ marginRight: 10 }} />
                    <View >
                        <Text style={styles.title}> {user.name}</Text>
                        {/* <Text style={styles.t1}> {user.email}</Text> */}
                        <View style={{ flexDirection: 'row', marginRight: 80, }}>
                            <Image source={Assets.UAE} />
                            <Text style={styles.t1}>United Arab Emirates</Text>
                        </View>
                    </View>
                    <Icon type={IconType.Ionicons} name='settings' size={30} 
                    onPress={()=> navigation.navigate('Settings')} />
                </View>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                        onPress={() => navigation.navigate(item.onPress)}
                            style={styles.btn}
                        >
                            <Image source={item.image} style={{ height: 25, width: 25 }} />
                            <Text style={styles.t2}>{item.Title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </SafeAreaView>
    );
};



export default SettingScreen;
