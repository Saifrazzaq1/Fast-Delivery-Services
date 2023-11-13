import React from 'react';
import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../../Assets';
import style from './style';

const ChefList = () => {
  const resturants = [
    {
      name: 'Osha Emirati Gourmet',
      time: '22',
      img: Images.pop1,
      des: 'Emirati, Arabic, Grills',
      aedtext: 'AED 6.00',
    },
    {
      name: 'Osha Emirati Gourmet',
      time: '22',
      img: Images.pop2,
      des: 'Emirati, Arabic, Grills',
    },
    {
      name: 'Osha Emirati Gourmet',
      time: '22',
      img: Images.pop3,
      des: 'Emirati, Arabic, Grills',
      aedtext: 'AED 6.00',
    },
  ];
  return (
    <View style={{marginHorizontal: 20}}>
      <FlatList
        horizontal={true}
        style={{flexDirection: 'row'}}
        data={resturants}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.1} style={style.restrtView}>
            <Image style={style.restrtimg} source={item.img} />
            <Text style={style.restrttext}>{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image style={style.restrtclock} source={Images.clock} />
              <Text style={style.restrttime}>within {item.time} mins</Text>
            </View>
            <Text style={style.aedtext}>{item.aedtext}</Text>
            <Text style={style.nameDes}>{item.des}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChefList;
