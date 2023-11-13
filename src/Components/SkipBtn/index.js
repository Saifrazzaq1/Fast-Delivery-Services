import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const SkipBtn = ({title, unseen, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={style.button}>
        {unseen >= 2 ? undefined : <Text style={style.btntext}>{title}</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default SkipBtn;
