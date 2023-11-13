import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ScrollView, ImageBackground } from 'react-native';
import styles from './style';
import CustomHeader from '../../../../../Components/CustomHeader';
import Assets from '../../../../../Assets';
import Button from '../../../../../Components/Button';
import CategoryItem from '../../../../../Components/CategoryItem';
import { fontRef, heightRef, widthRef } from '../../../../../config/screenSize';
import Modal from 'react-native-modal';
import CustomTextField from '../../../../../Components/TextField';
import CustomCheckbox from '../../../../../Components/Checkbox';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';

const Payments = [
    {
        id: '1',
        title: 'Subtotal',
        price: 'AED 78.00',
    },
    {
        id: '2',
        title: 'Delivery fee ',
        price: '-AED 8.00',
    },
    {
        id: '3',
        title: 'Service fee',
        price: '-AED 7.50',
    },
    {
        id: '4',
        title: 'Rider tip',
        price: 'AED 78.16',
    },
    {
        id: '5',
        title: 'Total amount ',
        price: 'AED 78.16',
    },
    // Add more items here
];



const CheckDetails = ({ navigation }: any) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };


    return (
        <View style={styles.cont}>
            <CustomHeader title='Shwarma Street' title1={'Checkout'}
                showTitle1={true} titleAlignment='center' isShowBackIcon />
            <ScrollView>
                <View style={{ padding: 20 }}>
                    <ImageBackground source={Assets.Locate2} style={styles.img} borderRadius={20} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={Assets.Cutlery} style={styles.img1} />
                        <View style={{ paddingLeft: 10, justifyContent: 'space-between' }}>
                            <Text style={styles.t1}>Younus Akram</Text>
                            <Text style={styles.t1}>zam zam height (Masdar City)</Text>
                            <Text style={styles.t2}>Sweihan Road, zam zam hieght, 4th, 17</Text>
                            <Text style={styles.t2}>Mobile +9712345678</Text>
                        </View>
                    </View>
                    <View style={styles.divider} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                        <Icon type={IconType.Feather} name='clock' size={25} color={'black'} style={{ marginRight: 10 }} />
                        <Text style={styles.t1}>Within 50 mins</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={{
                        width: '100%', height: 110 * heightRef,
                        paddingVertical: 10, paddingHorizontal: 5, marginVertical: 10,
                        backgroundColor: "rgba(224, 40, 28, 0.05)", flexDirection: 'row'
                    }}>
                        <Image source={Assets.Bike} style={styles.img1} />
                        <View style={{ paddingHorizontal: 10, justifyContent: 'space-evenly' }}>
                            <Text style={styles.t3}>Contactless Delivery</Text>
                            <Text style={styles.t1}>Leave order at doorstep and inform me</Text>
                            <Text style={styles.t2}>Not Applicable with cash payment</Text>
                        </View>
                        <CustomCheckbox activeColor={'red'} icon={Assets.Check} />
                    </View>
                    <View style={styles.divider} />
                    <Text style={styles.t1}>Pay With</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <CustomCheckbox activeColor='#1C7584' />
                        <Icon type={IconType.Ionicons} name='card-outline' color='black' size={25} style={{ marginHorizontal: 10 }} />
                        <Text style={styles.t1}>Crdit Card</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <CustomCheckbox activeColor='#1C7584' />
                        <Icon type={IconType.MaterialCommunityIcons} name='cash' size={25} style={{ marginHorizontal: 10 }} />
                        <Text style={styles.t1}>Cash</Text>
                    </View>
                    <TouchableOpacity style={styles.paybtn}>
                        <Text style={styles.t3}>Uncheck contactless delivery to                    use cash payment</Text>
                    </TouchableOpacity>
                    <View style={styles.divider} />
                    <Text style={{
                        fontSize: 18, fontWeight: '500',
                        color: 'black',
                    }}>Payment Summary</Text>
                    <FlatList
                        data={Payments} // Put your itemData or an array of items here
                        keyExtractor={(item, index) => index.toString()} // You can provide a unique key as needed
                        renderItem={({ item }) => (
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between', paddingVertical: 6,
                            }}>
                                <Text style={styles.t4}>{item.title}</Text>
                                <Text style={styles.t4}>{item.price}</Text>
                            </View>

                        )} />
                    <Button title={'Place Order'} TouchableStyle={styles.btn1} onPress={openModal} />

                </View>
            </ScrollView>
            <Modal
                isVisible={isModalVisible}
                backdropOpacity={0.5}
               
            >
                <View style={styles.modal}>
                    <Text style={styles.t1}>Pay With</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <CustomCheckbox activeColor='#1C7584' />
                        <Icon type={IconType.Ionicons} name='card-outline' color='black' size={25} style={{ marginHorizontal: 10 }} />
                        <Text style={styles.t1}>Crdit Card</Text>
                    </View>
                    <CustomTextField style={styles.field} title='Name on card'
                        placeholder='Younas' placeholderColor={'#B7B7B7'} />
                    <CustomTextField style={styles.field} title='Card No'
                        placeholder='0000 0000 0000 ' placeholderColor={'#B7B7B7'} />
                    <View style={styles.divider} />
                    <Text style={{
                        fontSize: 18, fontWeight: '500',
                        color: 'black',
                    }}>Payment Summary</Text>
                    <FlatList
                        data={Payments} // Put your itemData or an array of items here
                        keyExtractor={(item, index) => index.toString()} // You can provide a unique key as needed
                        renderItem={({ item }) => (
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between', paddingVertical: 6,
                            }}>
                                <Text style={styles.t4}>{item.title}</Text>
                                <Text style={styles.t4}>{item.price}</Text>
                            </View>

                        )} />
                    <Button title={'Place Order'} TouchableStyle={styles.btn1}
                        onPress={() => {
                            closeModal(); // Close the modal
                            navigation.navigate('TrackOrder'); // Navigate to the 'TrackOrder' screen
                        }} />
                </View>
            </Modal>
        </View>
    );
};

export default CheckDetails;
