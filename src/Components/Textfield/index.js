import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './style';

const Textfield = ({
  placeholder,
  secureIcon = false,
  secureText,
  value,
  borderRadius,
  onChangeText,
  backgroundColor,
  borderTopWidth,
  borderRightWidth,
  borderLeftWidth,
  paddingLeft,
  paddingVertical,
  borderColor,
  marginTop,
  marginRight,
  secureTextEntry = false,
}) => {
  const [Enabled, setEnabled] = useState('false');
  const [Visible, setVisible] = useState('false');
  return (
    <View>
      <TextInput
        secureTextEntry={Enabled && secureTextEntry}
        style={[
          style.inputF,
          {
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderLeftWidth: borderLeftWidth,
            borderTopWidth: borderTopWidth,
            borderRightWidth: borderRightWidth,
            paddingLeft: paddingLeft,
            marginTop: marginTop,
            width: '100%',
            marginRight: marginRight
          },
        ]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#B7B7B7"
        placeholdermarginleft
      />
      {secureIcon && (
        <FontAwesome5
          onPress={() => setEnabled(!Enabled)}
          style={style.eyeBtn1}
          size={15}
          name={Enabled ? 'eye-slash' : 'eye'}
          color={Enabled ? '#B7B7B7' : 'green'}
        />
      )}
    </View>
  );
};

export default Textfield;

const styles = StyleSheet.create({});
