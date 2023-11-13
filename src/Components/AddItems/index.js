import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Images from '../../Assets';
import style from './style';
import {useAppSelector} from 'src/Helper/Hooks/reduxHooks';
import {increment, decrement} from 'src/Redux/Reducers/Auth/actions';
import {useSelector, useDispatch} from 'react-redux';

const AddItems = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {cart} = useAppSelector(s => s.cart);

  const data = useSelector(state => state.ItemCount.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  let itemPrice = item.price;
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={{}}>
          <View style={style.view1}>
            <Text style={style.oshatext}>{item.name}</Text>
          </View>
          <Text style={style.emitext}>Emirati, Arabic, Grills</Text>
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
              <Text style={style.revtextpmc}>{data}</Text>
              <TouchableOpacity onPress={handleIncrement}>
                <Text style={style.revtextpm}>+</Text>
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
