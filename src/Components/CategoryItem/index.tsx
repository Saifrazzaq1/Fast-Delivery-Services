import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fontRef, heightRef, widthRef } from '../../config/screenSize';

interface CategoryItemProps {
  imageSource: any; // Pass the image source as a prop
  text: string; // Pass the text as a prop
  backgroundColor: string; 
  onPress?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imageSource, text, backgroundColor, onPress  }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={[styles.cate, { backgroundColor: backgroundColor }]}>
      <Image source={imageSource} style={styles.image}/>
      <Text style={styles.text}>{text}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cate: {
    width: 113 * widthRef,
    height: 117 * heightRef,
    backgroundColor: 'white',
    marginLeft: 10 * widthRef,
    padding:20,
    borderRadius:10
  },
  image: {
    width: 61 * widthRef, // Customize image width as needed
    height: 50 * heightRef, // Customize image height as needed
    alignSelf: 'center', // Center the image horizontally
    marginBottom:10 * heightRef
  },
  text: {
    textAlign: 'center',
    fontSize:16 * fontRef,
    color:'black',
    fontWeight:'500' // Add space between image and text
  },
} )

export default CategoryItem;
