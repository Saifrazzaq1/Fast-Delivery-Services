import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './style';
import CustomHeader from '../../../../Components/CustomHeader';
import Assets from '../../../../Assets';
import Button from '../../../../Components/Button';
import CategoryItem from '../../../../Components/CategoryItem';
import { fontRef, heightRef, widthRef } from '../../../../config/screenSize';
import CustomIcons from '../../../../Components/IconWithText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantCard from '../../../../Components/RestaurantCard';
import { topData, restaurantData, restaurants, ChefChoice } from './Lists';

const DetailScreen = ({ navigation }: any) => {
    return (
        <View style={styles.cont}>
            <CustomHeader
                title='Johar Town, Lahore'
                title1={'Delivering to'}
                showTitle1={true}
                titleAlignment='center'
                isShowBackIcon={true}
                onPressFav={() => { }}
            />
            <ScrollView>
                <View style={styles.top}>
                    {topData.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.topItem}>
                            <Image source={item.image}
                                style={styles.img} />
                            <Text style={styles.text}>{item.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ height: 130, padding: 20, flexDirection: 'row' }}>
                    <CustomIcons imageSource={Assets.Past} text='Past Order' />
                    <CustomIcons imageSource={Assets.Super} text='Super Savor' />
                    <CustomIcons imageSource={Assets.Game} text='Game day Deals' />
                    <CustomIcons imageSource={Assets.Give} text='Give back' />
                </View>
                <View style={{ paddingLeft: 10, paddingTop: 0 }}>
                    <Text style={styles.text1}> Pick</Text>
                    <FlatList
                        data={restaurantData}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ItemsDetails')}>
                                <View style={styles.topcard}>
                                    <Image source={item.image} style={styles.topCardimg} />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.t1}>{item.name}</Text>
                                        <Icon size={16} name='clock-time-four-outline' color={'black'} />
                                        <Text style={styles.t2}> {item.time}</Text>
                                    </View>
                                    <Text style={styles.t3}>{item.cuisine}</Text>
                                    <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
                                        <Image source={Assets.Star} />
                                        <Text style={styles.t3}>{item.rating}</Text>
                                        <Image source={Assets.Mark} />
                                        <Text style={styles.t3}>{item.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    <Text style={styles.text1}> All Restaurant</Text>
                    <RestaurantCard name="Osha Emirati Gourmet"
                        cuisine="Emirati, Arabic, Grills"
                        rating="4.2 (100+)"
                        deliveryTime="22"
                        price="AED 6.00"
                        discount="25% Off selected item"
                        image={Assets.Allo} />
                    <RestaurantCard name="Osha Emirati Gourmet"
                        cuisine="Emirati, Arabic, Grills"
                        rating="4.2 (100+)"
                        deliveryTime="22"
                        price="AED 6.00"
                        discount="25% Off selected item"
                        image={Assets.Barbar} />
                    <RestaurantCard name="Osha Emirati Gourmet"
                        cuisine="Emirati, Arabic, Grills"
                        rating="4.2 (100+)"
                        deliveryTime="22"
                        price="AED 6.00"
                        discount="25% Off selected item"
                        image={Assets.Sandwich}
                       />
                    <Text style={styles.text1}> Chef’s choices</Text>
                    <FlatList
                        data={ChefChoice}
                        keyExtractor={(item) => item.id}
                        horizontal
                        // Display the list horizontally
                        renderItem={({ item }) => (
                            <View style={styles.chef}>
                                <Image source={item.image} style={styles.chefimg} />
                                <Text style={styles.t1}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon size={16} name='clock-time-four-outline' color={'black'} />
                                    <Text style={styles.t2}>{item.time}</Text>
                                </View>
                                <Text style={styles.t3}>{item.price}</Text>
                                <Text style={styles.t3}>{item.cuisine}</Text>
                            </View>
                        )}
                    />

                    <FlatList
                        data={restaurants}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <RestaurantCard
                                name={item.name}
                                cuisine={item.cuisine}
                                rating={item.rating}
                                deliveryTime={item.deliveryTime}
                                price={item.price}
                                discount={item.discount}
                                image={item.image}
                               
                            />
                        )}
                    />


                </View>
            </ScrollView>
        </View>
    );
};


export default DetailScreen;
