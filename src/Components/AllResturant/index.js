import React, {useState} from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Images from '../../Assets';
import style from './style';

const AllResturant = ({horizontal, position, mt}) => {
  const resturants = [
    {
      name: 'Osha Emirati Gourmet',
      time: '22',
      img: Images.pop2,
      heart: Images.emptyheart,
      heart: Images.redheart,
      des: 'Emirati, Arabic, Grills',
      starimg: Images.star,
      startext: '4.2 (100+)',
      aedtext: 'AED 6.00',
      aedimg: Images.aed,
      offimg: Images.off,
      offtext: '25% Off selected item',
      tcimg: Images.redstar,
      tctext: 'Top Choice',
    },
    {
      name: 'Osha Emirati Gourmet',
      time: '22',
      img: Images.pop1,
      heart: Images.redheart,
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
      heart: Images.redheart,
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
  const [heart, setHeart] = useState(true);
  return (
    <View style={{position: position, marginTop: mt}}>
      <FlatList
        style={{flexDirection: 'row'}}
        horizontal={horizontal}
        data={resturants}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.1} style={style.restrtView}>
            <Image style={style.restrtimg} source={item.img} />
            <View style={{marginLeft: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={style.restrttext}>{item.name}</Text>
                </View>
                <TouchableOpacity onPress={heart => !heart}>
                  {heart === true ? (
                    <Image style={style.heartimg} source={item.heart} />
                  ) : (
                    <Image style={style.heartimg} source={item.emptyheart} />
                  )}
                </TouchableOpacity>
              </View>
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
    </View>
  );
};

export default AllResturant;
