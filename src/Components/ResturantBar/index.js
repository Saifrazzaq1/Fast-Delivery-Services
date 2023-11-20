import React from 'react';
import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../../Assets';
import style from './style';
// import {useAppSelector} from 'src/Helper/Hooks/reduxHooks';

const ResturantBar = () => {
  const resturants = [
    {name: 'Osha Emirati\nGourmet', time: '22', img: Images.pop1},
    {name: 'Osha Emirati\nGourmet', time: '22', img: Images.pop2},
    {name: 'Osha Emirati\nGourmet', time: '22', img: Images.pop3},
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ResturantBar;
