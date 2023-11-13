import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native';
import styles from './style';
import CustomHeader from '../../../../../Components/CustomHeader';
import Assets from '../../../../../Assets';
import Button from '../../../../../Components/Button';
import CategoryItem from '../../../../../Components/CategoryItem';
import { fontRef, heightRef, widthRef } from '../../../../../config/screenSize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTextField from '../../../../../Components/TextField';



const OrderLocation = ({ navigation }: any) => {
    // const [itemCount, setItemCount] = useState(0);

    // const handleIncrement = () => {
    //     setItemCount(itemCount + 1);
    // };

    // const handleDecrement = () => {
    //     if (itemCount > 0) {
    //         setItemCount(itemCount - 1);
    //     }
    // };
    return (
        <View style={styles.cont}>
            <CustomHeader title='Johar Town, Lahore' title1={'Delivery to'}
                showTitle1={true} titleAlignment='center'  />
                <View style={{flex:1,}}>
                  <ImageBackground source={Assets.Locate} style={styles.img}>
                <CustomTextField placeholder='Search' image={Assets.Search} inputStyle={styles.btn} />
                    <Button title='Deliver here' TouchableStyle={styles.btn1} onPress={() => navigation.navigate('OrderAddress')} />
           </ImageBackground>
           </View>
           
        </View>
    );
};

export default OrderLocation;
