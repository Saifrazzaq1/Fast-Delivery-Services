import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddItems from 'src/Components/AddItems';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import {useAppSelector} from 'src/Helper/Hooks/reduxHooks';
import {DISCOUNT} from 'src/Redux/Reducers/Auth/actions';
import Images from '../../../Assets';
import style from './style';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_ON_INDEX,
} from 'src/Redux/Reducers/Cart/action';

const CheckOut = ({route}) => {
  const navigation = useNavigation();
  const [Enabled, setEnabled] = useState(true);
  const [note, setNote] = useState(false);
  const [discount, setDiscount] = useState(null);
  const {cart} = useAppSelector(s => s.cart);
  const {data} = route.params;
  const price = useMemo(
    () =>
      cart.reduce(
        (acc, currentVal) =>
          acc +
          Number(currentVal.item.price * currentVal.count) +
          (currentVal.addOns.length > 0
            ? currentVal.addOns.reduce(
                (acc2, currentVal2) =>
                  acc2 + Number(currentVal2.price * currentVal.count),
                0,
              )
            : 0),
        0,
      ),
    [cart],
  );
  const discountedPrice = price - (price * discount?.price) / 100;
  useEffect(() => {
    DISCOUNT(data?._id, res => {
      if (res.success) {
        const discountFilter = res.discount?.filter(d => d.status === true)[0];
        setDiscount(discountFilter);
      }
    });
  }, []);
  const handleIncrement = (index, item) => {
    UPDATE_ITEM_ON_INDEX({
      index,
      item: {
        ...item,
        count: item.count + 1,
      },
    });
  };
  const handleDecrement = (index, item) => {
    if (item.count <= 1) {
      REMOVE_ITEM_FROM_CART(index);
    } else {
      UPDATE_ITEM_ON_INDEX({
        index,
        item: {
          ...item,
          count: item.count - 1,
        },
      });
    }
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header
        headerBg
        headerbgcolor={'white'}
        headerShadow
        locationText
        backIcon
        locationtextPosition={'center'}
      />
      <ScrollView>
        <View style={style.img}>
          <FlatList
            data={cart}
            renderItem={({item, index}) => (
              <AddItems
                item={item.item}
                count={item.count}
                handleIncrement={() => handleIncrement(index, item)}
                handleDecrement={() => handleDecrement(index, item)}
              />
            )}
          />
          <View style={style.checkView}></View>
          <View style={style.line} />
          <TouchableOpacity
            onPress={() => setEnabled(prevNote => !prevNote)}
            style={style.noview}>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image style={style.img1} source={Images.knife} />
                <Text style={style.text50}>No Cutlery{}</Text>
              </View>
              <Text style={style.deltext}>
                Less Plastic is the best plastic
              </Text>
            </View>
            <View style={{zIndex: 1000}}>
              <FontAwesome5
                onPress={() => setEnabled(!Enabled)}
                style={style.eyeBtn1}
                size={25}
                name={Enabled ? 'square' : 'check-square'}
                color={Enabled ? '#B7B7B7' : 'green'}
              />
            </View>
          </TouchableOpacity>
          <View style={style.line} />
          <TouchableOpacity
            onPress={() => setNote(prevNote => !prevNote)}
            style={style.noteview}>
            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <Image style={style.img1} source={Images.check} />
                <Text style={style.text50}>Add a note</Text>
              </View>
              <Text style={style.deltext}>Anything else we need to know ?</Text>
            </View>
            <View>
              <Image style={style.img2} source={Images.emark} />
            </View>
          </TouchableOpacity>
          {note === true ? (
            <Textfield borderRadius={20} borderColor={'grey'} marginTop={20} />
          ) : null}
          <View style={style.line} />
          <View style={style.view1}>
            <Text style={style.oshatext}>Payment Summary</Text>
          </View>
          <View style={style.pay}>
            <Text style={style.textany}>Subtotal</Text>
            <Text style={style.deltextnext}>AED {price}</Text>
          </View>
          <View style={style.pay}>
            <Text style={style.textany}>Discount</Text>
            <Text style={style.deltext2}>- AED {discount?.price}% off</Text>
          </View>
          <View style={style.pay}>
            <Text style={style.textany}>Delivery fee</Text>
            <Text style={style.deltextnext}>AED 75 </Text>
          </View>
          <View style={style.pay}>
            <Text style={style.textany}>Total amount</Text>
            <Text style={style.deltextnext}>AED {discountedPrice + 75}</Text>
          </View>
          <View style={style.btnView}>
            <Button
              btnheight={55}
              unseen={2}
              title={'Add Items'}
              showtitle2={false}
              buttonStyle={style.button}
              btnColor="#fff"
              textColor={'#fff'}
              textStyle={{marginHorizontal: 20, color: '#1C7584'}}
              onPress={() => {
                navigation.navigate('Details');
              }}
            />
            <Button
              btnheight={55}
              unseen={2}
              showtitle2={false}
              title={'Check Out'}
              justifyContent={'center'}
              buttonStyle={style.button1}
              btnColor="#1C7584"
              textColor={'#fff'}
              textStyle={{marginHorizontal: 20}}
              onPress={() => {
                navigation.navigate('SelectLocation', {
                  item: route?.params?.item,
                  price: discountedPrice + 75,
                });
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckOut;
