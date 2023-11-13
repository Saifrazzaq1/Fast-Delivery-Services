import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Images from '../../Assets';
import style from './style';

const Button = ({
  title,
  onPress,
  btnColor = '#51300399',
  textColor,
  textStyle = {},
  borderw,
  btnheight,
  justifyContent,
  paddingHorizontal,
  aligntext,
  alignBtn,
  widt,
  fontSize,
  borderc,
  buttonStyle = {},
  disabled,
  btnImage,
  title2,
  unseen,
  showtitle2 = true,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        style.button,
        {width: widt},
        {
          backgroundColor: btnColor,
          height: btnheight,
          justifyContent: justifyContent,
          paddingHorizontal: paddingHorizontal,
          alignSelf: alignBtn,
        },
        buttonStyle,
        ,
      ]}
      borderWidth={borderw}
      onPress={onPress}
      bordercolor={borderc}>
      {btnImage === 1 ? (
        <Image style={style.btnimg} source={Images.btngoogle} />
      ) : btnImage === 2 ? (
        <Image style={style.btnimg} source={Images.btnfb} />
      ) : btnImage === 3 ? (
        <Image style={style.btnimg} source={Images.btnemail} />
      ) : null}
      <Text
        style={[
          style.btntext,
          {color: textColor, textAlign: aligntext, fontSize: fontSize},
          textStyle,
        ]}>
        {title}
      </Text>
      {showtitle2 && (
        <Text
          style={[
            style.btntext,
            {color: textColor, textAlign: aligntext, fontSize: fontSize},
            textStyle,
          ]}>
          {title2}
        </Text>
      )}
      {unseen === 2 ? null : (
        <FontAwesome5
          style={style.arrowIcon}
          size={15}
          name="chevron-right"
          color="#fff"
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
