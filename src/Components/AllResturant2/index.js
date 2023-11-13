import React from 'react';
import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../../Assets';
import style from './style';

const AllResturant2 = ({horizontal}) => {
  const resturants = [
    {
      name: 'Osha Emirati Gourmet',
      time: '22',
      img: Images.pop1,
      heart: Images.emptyheart,
      des: 'Emirati, Arabic, Grills',
      aedtext: 'AED 6.00',
      starimg: Images.star,
      startext: '4.2 (100+)',
      aedimg: Images.aed,
      offimg: Images.off,
      offtext: '25% Off selected item',
      tcimg: '',
      tctext: '',
    },
    {
      name: 'Osha Emirati Gourmet',
      time: '22',
      img: Images.pop2,
      heart: Images.emptyheart,
      des: 'Emirati, Arabic, Grills',
      starimg: Images.star,
      startext: '4.2 (100+)',
      aedtext: 'AED 6.00',
      aedimg: Images.aed,
      offimg: '',
      offtext: '',
      tcimg: '',
      tctext: '',
    },
    {
      name: 'Osha Emirati Gourmet',
      time: '22',
      img: Images.pop2,
      heart: Images.emptyheart,
      des: 'Emirati, Arabic, Grills',
      starimg: Images.star,
      startext: '4.2 (100+)',
      aedtext: 'AED 6.00',
      aedimg: Images.aed,
      offimg: '',
      offtext: '',
      tcimg: '',
      tctext: '',
    },
  ];
  return (
    <FlatList
      style={{flexDirection: 'row'}}
      horizontal={horizontal}
      data={resturants}
      renderItem={({item}) => (
        <TouchableOpacity activeOpacity={0.1} style={style.restrtView}>
          <Image style={style.restrtimg} source={item.img} />
          <Image style={style.heartimg} source={item.heart} />
          <View style={{marginLeft: 10}}>
            <Text style={style.restrttext}>{item.name}</Text>
            <Text style={style.nameDes}>{item.des}</Text>
            <View style={{flexDirection: 'row'}}>
              <Image style={style.starimg} source={Images.star} />
              <Text style={style.startext}>{item.startext}</Text>

              <Image style={style.tcimg} source={item.tcimg} />
              <Text style={style.tctext}>{item.tctext}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Image style={style.restrtclock} source={Images.clock} />
              <Text style={style.restrttime}>within {item.time} mins</Text>
              <Image style={style.aedimg} source={item.aedimg} />
              <Text style={style.aedtext}>{item.aedtext}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image style={style.offimg} source={item.offimg} />
              <Text style={style.offtext}>{item.offtext}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default AllResturant2;
