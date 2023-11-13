import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native';
import styles from './style';
import CustomHeader from '../../../../Components/CustomHeader';
import Assets from '../../../../Assets';
import Button from '../../../../Components/Button';
import CategoryItem from '../../../../Components/CategoryItem';
import { fontRef, heightRef, widthRef } from '../../../../config/screenSize';
import CustomIcons from '../../../../Components/IconWithText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantCard from '../../../../Components/RestaurantCard';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import Divider from '../../../../Components/Divider';



const RestaurantDetails = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.cont}>
     
            <ImageBackground source={Assets.Pick} style={styles.headImg}>
                <TouchableOpacity style={styles.iconbg} onPress={() => navigation.goBack()} >
                    <Image source={Assets.BackIcon} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconbg1} >
                    <Image source={Assets.search} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconbg1} >
                    <Image source={Assets.Share} style={styles.icon} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={{ paddingHorizontal: 20, paddingVertical: 12, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text}>Osha Emirati Gourmet</Text>
                    <Text style={styles.t1}>Info</Text>
                </View>
                <Text style={styles.t2}>Emirati, Arabic, Grills</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={20}
                        style={{ alignSelf: "flex-start" }}
                        startingValue={4}
                    />
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'gray', marginHorizontal: 10 }}>
                        4.2 (1540+)</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#E0281C', marginLeft: 110 }}>Reviews</Text>
                </View>
                <View style={styles.divider} />

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Icon size={25} name='clock-time-four-outline' color={'black'} />
                    <View style={{ marginRight: 30, marginLeft: 5 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>
                            In 50 mins (Delivery fee: AED 6.00)</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: '#A0A0A0', width: 270 }}>
                            Delivered by the restaurants, delivery time may
                            vary and no live tracking</Text>
                    </View>
                    <Image source={Assets.Info} style={styles.image} />
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Icon size={25} name='clock-time-four-outline' color={'black'} />
                    <View style={{ marginRight: 30, marginLeft: 5 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>
                            In 50 mins (Delivery fee: AED 6.00)</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: '#A0A0A0', width: 270 }}>
                            Delivered by the restaurants, delivery time may
                            vary and no live tracking</Text>
                    </View>
                    <Image source={Assets.Info} style={styles.image} />
                </View>
            </View>
            <View style={styles.divider} />
            <View style={{ flexDirection: 'row' }}>
                <Button title='25% Off ADCB TouchPoints Platinum Lorem ipsum...'
                    customBackgroundColor={'#EF5DA8'} socialIcon={Assets.Discount}
                    TouchableStyle={styles.btn} textStyle={{ fontSize: 12, width: 186 }} />
                <Button title='25% Off ADCB TouchPoints Platinum Lorem ipsum...'
                    customBackgroundColor={'#EF5DA8'} socialIcon={Assets.Discount}
                    TouchableStyle={styles.btn} textStyle={{ fontSize: 12, width: 186 }} />
            </View>
            <View style={styles.divider} />
        </View>
    );
};


export default RestaurantDetails;
