import React from 'react';
import {
  ActivityIndicator,
  ButtonProps,
  Image,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { fontRef, heightRef, widthRef } from '../../config/screenSize';
import Assets from '../../Assets';
import Text from '../Text';
import globalStyles from '../../config/globalStyles';

interface ButtonTypes extends ButtonProps {
  TouchableStyle?: ViewStyle;
  onPressButton?: () => void;
  customBackgroundColor?: any;
  textColor?: any;
  textStyle?: TextStyle;
  iconVisible?: any;
  disabled?: boolean;
  icon?: any;
  iconColor?: string;
  loading?: boolean;
  width?: number | string;
  height?: number | string;
  socialIcon?: any; // New prop for the social icon
}

const Button = ({
  TouchableStyle,
  onPressButton,
  customBackgroundColor = globalStyles.Theme.PrimaryColor,
  textColor = globalStyles.Theme.backgroundColor,
  textStyle,
  title,
  iconVisible = false,
  icon = Assets.ArrowRight,
  iconColor = 'white', // Default icon color is black
  disabled = false,
  loading = false,
  width = '80%',
  height = 55,
  socialIcon, // Include the new prop
  ...rest
}: ButtonTypes) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      disabled={disabled}
      style={[
        {
          width: typeof width === 'string' ? '80%' : width * widthRef,
          height:
            typeof height === 'string'
              ? parseFloat(height) * heightRef
              : height * heightRef,
          backgroundColor: disabled ? '#51300399' : customBackgroundColor,
          marginTop: 10 * heightRef,
          flexDirection: 'row',
          justifyContent: iconVisible ? 'space-between' : 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        },
        TouchableStyle,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <>
          {socialIcon && (
            <Image source={socialIcon} style={{
              height: 30 * heightRef, width: 28 * widthRef, borderColor:'white',
              backgroundColor: 'white', borderRadius: 40, margin: 10, 
            }} />
          )}
          <Text
            style={[
              {
                color: textColor,
                fontSize: 16 * fontRef,
                fontWeight: '600',
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
          {iconVisible && (
            <Image source={icon}  style={{ tintColor: iconColor, height: 20, width: 20 }}  />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
