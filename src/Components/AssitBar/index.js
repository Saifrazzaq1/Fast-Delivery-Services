import React, {useEffect, useState} from 'react';
import {FlatList, View, Image, Text, TouchableOpacity} from 'react-native';
import Images from '../../Assets';
import {SUBCATEGORIES} from 'src/Redux/Reducers/Auth/actions';
import style from './style';
import {useAppSelector} from 'src/Helper/Hooks/reduxHooks';

const AssitBar = ({marginTop, marginHorizontal}) => {
  const [Subcategories, setSubcategories] = useState([]);
  const options = [
    {name: 'Place Order', img: Images.five},
    {name: 'Super Saver', img: Images.one},
    {name: 'Game Day Deals', img: Images.three},
    {name: 'Give Back', img: Images.four},
    {name: 'Past Order', img: Images.two},
  ];
  const Subcategory = useAppSelector(s => s.auth.user);
  useEffect(() => {
    SUBCATEGORIES(sub => {
      sub.Subcategories;
    });
  }, []);
  return (
    <View style={{marginHorizontal: marginHorizontal}}>
      <FlatList
        horizontal={true}
        style={{flexDirection: 'row'}}
        data={options}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.1}
            style={[style.optnView, {marginTop: marginTop, paddingLeft: 25}]}>
            <View
              style={{
                height: 60,
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
