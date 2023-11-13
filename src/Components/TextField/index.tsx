/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement, useState } from 'react';
import {
  Image,
  ImageURISource,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
// import Image from '../../Components/Image';
// import View from '../../Components/View';
import { heightRef } from '../../config/screenSize';
import styles from './style';
import Text from '../Text';

interface TInput extends TextInputProps {
  title?: string;
  image?: ImageURISource;
  iconVisible?: boolean;
  editable?: boolean;
  placeholder?: string;
  multiline?: boolean;
  isEditDone?: boolean;
  textalign?: 'left';
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  secureText?: boolean;
  value?: any;
  ViewStyle?: ViewStyle;
  onPress?: () => void;
  onChangeText?: any;
  internalButton?: ReactElement;
  inputStyle?: ViewStyle;

  placeholderColor?: any;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
const CustomTextField = ({
  title,
  image,
  iconVisible = true,
  editable = true,
  placeholder,
  placeholderColor = '#100B0066',
  multiline = false,
  textalign = 'left',
  keyboardType = 'default',
  secureText = false,
  value,
  ViewStyle: viewStyle,
  onPress,
  onChangeText,
  internalButton,
  inputStyle,
  textStyle,
  containerStyle,
  ...rest
}: TInput) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View
      style={[
        { width: '100%', alignSelf: 'center', marginVertical: 10,  },
        containerStyle,
      ]}>
      {title && (
        <Text
          typography="h4"
          style={[{ textAlign: 'left', marginBottom: 0 , color:'#B7B7B7',
           fontSize:16, fontWeight:'500'}, textStyle]}>
          {title}
        </Text>
      )}
      <View
        style={[
          {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            // flexDirection: 'row',
            // paddingBottom: 10,
            
          },
          viewStyle,
        ]}>
        <TextInput
          textAlignVertical={multiline ? 'top' : 'center'}
          value={value}
          secureTextEntry={!passwordVisible && secureText}
          keyboardType={keyboardType}
          textAlign={textalign}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onChangeText={onChangeText}
          //   onEndEditing={() => {
          //     setfocus(false);
          //   }}
          //   onFocus={() => {
          //     setfocus(true);
          //   }}
          editable={editable}
          style={[
            {
              height: multiline ? 150 : 56 * heightRef,
            },
            multiline && { paddingTop: 16 },
            styles.input,
            inputStyle,
          ]}
          {...rest}
        />
        {internalButton && internalButton}
        {iconVisible && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              if (secureText) {
                setPasswordVisible(!passwordVisible);
              } else if (onPress) {
                onPress();
              }
            }}>
            {!secureText || passwordVisible ? (
              passwordVisible ? (
                <Icon
                  type={IconType.Ionicons}
                  name={'eye'}
                  color={'#494949'}
                  style={styles.icon}
                />
              ) : image ? (
                <Image style={[styles.icon1, { right: 0, marginRight:30 }]} source={image} />
              ) : null
            ) : (
              <Icon
                type={IconType.Ionicons}
                name={'eye-off'}
                color={'#494949'}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomTextField;
