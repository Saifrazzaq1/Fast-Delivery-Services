import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import Header from '../../../../Components/Header';
import ToggleButton from '../../../../Components/CustomToggleBtn';
import { LOGOUT } from '../../../../Redux/Reducers/Auth/actions';
import Button from '../../../../Components/Button';
import Assets from '../../../../Assets';

const data = [
    { 
      title: 'Get 25% Off On All Orders',
      validUntil: '01/05/2023',
      store: 'Osha Emirati Gourmet',
      imageSource: Assets.Offr,
    },
    { 
        title: 'Get 10% off on Selected items',
        validUntil: '01/05/2023',
        store: 'Lris Flowers',
        imageSource: Assets.Offr1,
      },
      { 
        title: 'Get 25% Off On All Orders',
        validUntil: '01/05/2023',
        store: 'Osha Emirati Gourmet',
        imageSource: Assets.Sandwich,
      },
      { 
        title: 'Get 25% Off On All Orders',
        validUntil: '01/05/2023',
        store: 'Osha Emirati Gourmet',
        imageSource: Assets.Offr,
      },
      { 
        title: 'Get 10% off on Selected items',
        validUntil: '01/05/2023',
        store: 'Lris Flowers',
        imageSource: Assets.Offr2,
      },
      { 
        title: 'Get 10% off on Selected items',
        validUntil: '01/05/2023',
        store: 'Lris Flowers',
        imageSource: Assets.Offr1,
      },
      { 
        title: 'Get 10% off on Selected items',
        validUntil: '01/05/2023',
        store: 'Lris Flowers',
        imageSource: Assets.Offr2,
      },
    // add more items as needed
  ];

const Offers = ({ navigation }: any) => {
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
            <Header title={'Offer'}  isShowBackIcon={true} />
            <View style={{ paddingHorizontal: 20, paddingVertical: 30, marginBottom:80 }}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', marginBottom:20 }}>
                            <Image source={item.imageSource} style={styles.img} />
                            <View style={{ justifyContent: 'space-evenly' }}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.t1}>This offer is valid until {item.validUntil}</Text>
                                <Text style={styles.t1}>{item.store}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>

    );
};



export default Offers;
