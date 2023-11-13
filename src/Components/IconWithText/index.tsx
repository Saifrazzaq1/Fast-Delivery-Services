import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fontRef, heightRef, widthRef } from '../../config/screenSize';

interface CustomIconsProps {
  imageSource: any; // Pass the image source as a prop
  text: string; // Pass the text as a prop
  onPress?: () => void;
}

const CustomIcons: React.FC<CustomIconsProps> = ({ imageSource, text, onPress }) => {
  return (
    <TouchableOpacity  onPress={onPress} style={styles.container}>
    
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex:1,
    justifyContent:'space-between',
    alignItems: 'center',
  },
  image: {
    height: 35 * heightRef,
    width: 35 * widthRef,
    margin: 10,
    marginBottom:20 * heightRef
  },
  text: { flex:1,
    fontSize: 12 * fontRef,
    color: 'black',
    fontWeight: '500',
    width:70 * widthRef,
    textAlign:'center'
  },
});

export default CustomIcons;
