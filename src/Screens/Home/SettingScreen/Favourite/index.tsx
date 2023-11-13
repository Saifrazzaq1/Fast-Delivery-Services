import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import Header from '../../../../Components/CustomHeader';
import ToggleButton from '../../../../Components/CustomToggleBtn';
import { LOGOUT } from '../../../../Redux/Reducers/Auth/actions';
import Button from '../../../../Components/Button';
import Assets from '../../../../Assets';
import RestaurantCard from '../../../../Components/RestaurantCard';


const restaurants = [
  {
    name: "Osha Emirati Gourmet",
    cuisine: "Emirati, Arabic, Grills",
    rating: "4.2 (100+)",
    deliveryTime: "22",
    price: "AED 6.00",
    discount: "",
    image: Assets.Allo,
  },
  {
    name: "Osha Emirati Gourmet",
    cuisine: "Emirati, Arabic, Grills",
    rating: "4.2 (100+)",
    deliveryTime: "22",
    price: "AED 6.00",
    discount: "25% Off selected item",
    image: Assets.Barbar,
  },
  {
    name: "Osha Emirati Gourmet",
    cuisine: "Emirati, Arabic, Grills",
    rating: "4.2 (100+)",
    deliveryTime: "22",
    price: "AED 6.00",
    discount: "",
    image: Assets.Sandwich,
  },

];

const Favourite = ({ navigation }: any) => {

  return (
    <View style={styles.cont}>
      <Header title={'Favourite'} title1={''} isShowBackIcon={true} />
      <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 25, }}>
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
              favImage={Assets.Heartfill}
            />
          )}
        />

      </View>
    </View>

  );
};

{/* <Text style={{fontSize:30,color:'black' , top:-400,left:90 ,transform: [{ rotate: '-90deg'}]}}>12/22</Text> */ }

export default Favourite;
