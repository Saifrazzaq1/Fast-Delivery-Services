import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../Assets';
import style from './style';

const AddItems = ({item, count, handleDecrement, handleIncrement}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={{}}>
          <View style={style.view1}>
            <Text style={style.oshatext}>{item.item}</Text>
          </View>
          <Text style={style.emitext}>{item.catagory}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 210,
            }}>
            <View>
              <Text style={style.revtext}>AED {item.price}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 4,
              }}>
              <TouchableOpacity onPress={handleDecrement}>
                <Text style={style.revtextpmm}>-</Text>
              </TouchableOpacity>
              <Text style={style.revtextpmc}>{count}</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={style.revtextpm} onPress={handleIncrement}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Image style={style.mlistimg} source={Images.salan} />
      </View>
    </View>
  );
};

export default AddItems;
