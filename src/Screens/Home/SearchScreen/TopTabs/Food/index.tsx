import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Assets from '../../../../../Assets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import RestaurantCard from '../../../../../Components/RestaurantCard';
import Button from '../../../../../Components/Button';
import { LOGOUT } from '../../../../../Redux/Reducers/Auth/actions';

const data = [
    { id: '1', Title: 'Chicken' },
    { id: '2', Title: 'Cake' },
    { id: '3', Title: 'Burger Pizza' },
    { id: '4', Title: '' },
    { id: '5', Title: 'Coffee' },
    { id: '6', Title: 'Desert' },
    { id: '7', Title: 'Shawarma' },
    { id: '8', Title: 'Pasta' },
    { id: '9', Title: 'Pizza' },
    { id: '10', Title: 'Chicken' },
];

const restaurants = [
    {
        id: 1,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.Texes,
    },
    {
        id: 2,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.Barbar,
    },
    {
        id: 3,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.Sandwich,
    },
    {
        id: 4,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.Allo,
    },

    // Add more restaurant data objects here for the other four items
];
const restaurants1 = [

    {
        id: 1,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "0",
        image: Assets.Paracon,
    },
    {
        id: 2,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.Hut,
    },
    {
        id: 3,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.HotGrill,
    },
    // Add more restaurant data objects here for the other four items
];
const FoodScreen = ({ navigation }: any) => {
    const inset = useSafeAreaInsets();
    
    return (

        <View style={styles.cont}>
            <View style={{ paddingHorizontal: 5, }}>
                <Text style={styles.title}>Populer searches</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    numColumns={4}
                    scrollEnabled
                    renderItem={({ item }) => (

                        <View style={styles.btn}>
                            <Text style={styles.t1}>{item.Title}</Text>
                        </View>

                    )}
                />
                <Text style={styles.title}>Featured restaurants</Text>

            </View>
            <View style={{ width: '100%', }}>
                <FlatList
                    data={restaurants}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
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
            <View style={{ width: '100%', height: 'auto' }}>
                <FlatList
                    data={restaurants1}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                  
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
           
        </View>

    );
};



export default FoodScreen;
