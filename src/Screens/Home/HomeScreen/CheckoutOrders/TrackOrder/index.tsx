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
import CustomCheckbox from '../../../../../Components/Checkbox';
import { connect } from 'react-redux';

const lineData = [
    { id: '1', color: '#1C7584' },
    { id: '2', color: '#A0A0A0' },
    { id: '3', color: '#A0A0A0' },
    { id: '4', color: '#A0A0A0' },
];

// const orderdata = [
//     {
//         id: '1',
//         title: 'Saloona Marga',
//         price: 'AED 28.50',
//         imageSource: Assets.Item1,
//     },
//     {
//         id: '2',
//         title: 'Saloona Marga',
//         price: 'AED 28.50',
//         imageSource: Assets.Item2,
//     },

// ];

const TrackOrder = ({ navigation, cartItems, finalPrice }: any) => {
    useEffect(() => {
        // Log the details of all items in the cart to the console
        console.log('Items in the cart:', cartItems);
      }, [cartItems, ]);
    
    return (
        <View style={styles.cont}>
            <CustomHeader title='Your Order' title1={''}
                showTitle1={false} titleAlignment='center' isShowBackIcon />
            <ScrollView>
                <View style={{ flex: 1, }}>
                    <View style={{ alignItems: 'center', marginTop: 50, }}>
                        <Text style={styles.t1}>Estimated delivery time</Text>
                        <Text style={styles.t2}>25 mins</Text>
                        <Image source={Assets.Pizza} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <FlatList
                            data={lineData}
                            horizontal
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (

                                <View style={[styles.line, { backgroundColor: item.color }]}>

                                </View>

                            )}
                        />
                    </View>
                    <View style={{
                        width: '90%', height: 80 * heightRef, alignSelf: 'center',
                        alignItems: 'center', borderRadius: 10,
                        paddingVertical: 10, paddingHorizontal: 10, marginVertical: 15,
                        backgroundColor: "rgba(224, 40, 28, 0.05)", flexDirection: 'row'
                    }}>
                        <Icon name='credit-card-outline' size={30} color={'black'} />

                        <View style={{ paddingHorizontal: 10, justifyContent: 'space-evenly', marginRight: 120 }}>
                            <Text style={styles.t5}>Cradit Card</Text>
                            <Text style={styles.t1}>Total amount</Text>

                        </View>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: 'red', alignSelf: 'flex-end' }}>
                            AED {finalPrice.toFixed(2)}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={{ paddingHorizontal: 20, }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: 'black', }}>
                            Order details</Text>

                        <FlatList
                            data={cartItems}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                    <View>
                                        <Text style={styles.t5}>{item.title}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '500', color: 'red', marginTop: 10 }}> {item.price}</Text>
                                    </View>
                                    <Image source={item.imageSource}
                                        style={{ width: 100, height: 65, borderRadius: 10 }} />
                                </View>
                            )}
                        />
                        <ImageBackground source={Assets.Locate2} style={styles.img2} borderRadius={20} />
                        <View style={{ flexDirection: 'row', marginBottom: 50 }}>
                            <Image source={Assets.Bike} style={styles.img1} />
                            <View style={{ paddingLeft: 10, justifyContent: 'space-between' }}>
                                <Text style={styles.t3}>Younus Akram</Text>
                                <Text style={styles.t3}>zam zam height (Masdar City)</Text>
                                <Text style={styles.t4}>Sweihan Road, zam zam hieght, 4th, 17</Text>

                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};
const mapStateToProps = (state: any) => {
    return {
      cartItems: state.cart.cartItems,
      finalPrice: state.cart.finalPrice,
    };
  };
export default connect(mapStateToProps)(TrackOrder);