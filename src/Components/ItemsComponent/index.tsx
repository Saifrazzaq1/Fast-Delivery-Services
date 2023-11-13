import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const ItemsComp = ({ imageSource, title, body, price, isSelected, onSelect }:any) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }, isSelected && styles.selected]}>
      <View style={{marginLeft:5}}>
        <Text style={styles.t1}>{title}</Text>
        <Text style={styles.t2}>{body}</Text>
        <Text style={styles.t3}>{price}</Text>
      </View>
      <Image source={imageSource} style={styles.image} />
    </View>
    </TouchableOpacity>
  );
};

export default ItemsComp;
