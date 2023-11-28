import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../Assets';
import style from './style';

const AssitBar = ({marginTop, marginHorizontal}) => {
  const options = [
    {name: 'Place Order', img: Images.five},
    {name: 'Super Saver', img: Images.one},
    {name: 'Game Day Deals', img: Images.three},
    {name: 'Give Back', img: Images.four},
    {name: 'Past Order', img: Images.two},
  ];

  return (
    <View style={{marginHorizontal: marginHorizontal}}>
      <FlatList
        horizontal={true}
        style={{flexDirection: 'row'}}
        data={options}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.1}
            style={[style.optnView, {marginTop: marginTop, paddingLeft: 15}]}>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Image style={style.optnimg} source={item.img} />
              <Text style={style.optntext}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AssitBar;
