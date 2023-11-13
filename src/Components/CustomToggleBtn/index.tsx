import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const ToggleButton = ({ activeColor, inactiveColor, onToggle }:any) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onToggle(!isToggled); // Pass the new toggle state to the callback
  };

  const buttonColor = isToggled ? activeColor : inactiveColor;

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View
        style={{
          width: 50,
          height: 25,
          backgroundColor: buttonColor,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: isToggled ? 'flex-end' : 'flex-start',
          padding: 5,
        }}
      >
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ToggleButton;
