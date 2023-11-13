import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the appropriate icon library
import styles from './style';
import Assets from '../../Assets';

const RestaurantCard = (props: any) => {
  const { name, cuisine, rating, deliveryTime, price, discount, favImage = Assets.Fav, onPress } = props;

  const [isFav, setIsFav] = useState(true);

  const toggleFavorite = () => {
    setIsFav((prevIsFav) => !prevIsFav);
  };

  const handlePress = () => {
    toggleFavorite(); // Toggle the image
    if (onPress) {
      onPress(); // Call the onPress function
    }
  };

  return (
    <View style={styles.resCard}>
      <Image source={props.image} style={styles.resImg} />
      <View style={styles.resMid}>
        <Text style={styles.rest1}>{name}</Text>
        <Text style={styles.t3}>{cuisine}</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
          <Image source={Assets.Star} />
          <Text style={styles.t3}>{rating}</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
          <Icon size={16} name='clock-time-four-outline' color={'black'} />
          <Text style={styles.t2}>{`within ${deliveryTime} mins`}</Text>
          <Image source={Assets.Price} style={{ marginLeft: 5 }} />
          <Text style={styles.t3}>{price}</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingVertical: 3 }}>
          <Image source={Assets.Discount} />
          <Text style={styles.t4}>{discount}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <Image source={isFav ? favImage : Assets.Heartfill} />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantCard;
