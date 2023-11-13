import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { fontRef, heightRef, widthRef } from '../../config/screenSize';

const CustomCheckbox = ({ activeColor, inactiveColor, label, icon, onToggle }: any) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    if (onToggle) {
      onToggle(!isActive);
    }
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={styles.rowContainer}>
        <View style={[styles.checkbox, { backgroundColor: isActive ? activeColor : inactiveColor }]}>
          {icon ? <Image source={icon} style={styles.icon} /> : null}
        </View>
        {label ? <Text style={styles.label}>{label}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:10
  },
  checkbox: {
    width: 18 * widthRef,
    height: 20 * heightRef,
    borderRadius: 4,
    borderWidth: 1 ,
    borderColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 16 * widthRef,
    height: 16 * heightRef,
  },
  label: {
    marginLeft: 5,
    color:'#2C2C2E',
    fontSize:12 * fontRef,
    fontWeight:'500',
  },
});

export default CustomCheckbox;
