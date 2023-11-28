import React, {useEffect, useMemo, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from 'src/Components/Button';
import {ADD_ITEM_TO_CART} from 'src/Redux/Reducers/Cart/action';
import Images from '../../Assets';
import AddItems from '../AddItems';
import style from './style';
import {ADDONS} from 'src/Redux/Reducers/Auth/actions';
import Textfield from '../Textfield';

const ItemDetail = ({item, onCompleteRequest = () => {}, data}) => {
  const [addOns, setAddOns] = useState([]); // to be added to order
  const [addOn, setAddOn] = useState([]); // api response for addons
  const [note, setNote] = useState(false);
  const [noteItem, setNoteItem] = useState('');
  const [count, setCount] = useState(1);
  const price = useMemo(() => {
    const basePrice = item.price * count;
    const addOnsPrice = addOns.reduce((p, c) => p + c.price * count, 0);
    return addOnsPrice + basePrice;
  }, [item, count, addOns]);
  const handleAddItemToCard = () => {
    ADD_ITEM_TO_CART({item, count, addOns}, onCompleteRequest);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };
  useEffect(() => {
    const id = data?._id;
    ADDONS(id, res => {
      if (res.success) {
        setAddOn(res.addons);
      }
    });
  }, []);
  return (
    <ScrollView style={style.mainbg}>
      <ImageBackground style={style.bgimg} source={Images.burger} />
      <View style={{margin: 20}}>
        <AddItems
          item={item}
          count={count}
          setCount={setCount}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Any special Requests</Text>
          <TouchableOpacity
            onPress={() => setNote(prevNote => !prevNote)}
            style={style.noteview}>
            <Text style={style.deltext2}>Add note</Text>
          </TouchableOpacity>
        </View>
        {note === true ? (
          <Textfield
            borderRadius={10}
            placeholder={'Add note here...'}
            paddingLeft={10}
            value={noteItem}
            onChangeText={setNoteItem}
            borderColor={'grey'}
            marginTop={10}
          />
        ) : null}
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={style.text50}>Adds On</Text>
          <Text style={style.deltext1}> (Optional)</Text>
        </View>
        <Text style={style.deltext}>Choose up to 8 items</Text>
        <FlatList
          data={addOn}
          keyExtractor={(_, i) => i + '-SAAM-KIND'}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setAddOns(prev => {
                  if (prev.includes(item)) {
                    return prev.filter(p => p !== item);
                  } else {
                    return [...prev, item];
                  }
                });
              }}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={style.deltext3}>{item.name} Sauce</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={style.deltext3}>{`(+AED ${item.price.toFixed(
                  1,
                )})`}</Text>
                <FontAwesome5
                  style={style.eyeBtn1}
                  size={25}
                  name={addOns.includes(item) ? 'check-square' : 'square'}
                  color={addOns.includes(item) ? 'green' : '#B7B7B7'}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        <Button
          btnheight={55}
          unseen={2}
          title={'Add to Basket'}
          title2={`${price}`}
          justifyContent={'space-between'}
          buttonStyle={{marginTop: 20}}
          btnColor="#1C7584"
          textColor={'#fff'}
          textStyle={{marginHorizontal: 20}}
          onPress={handleAddItemToCard}
        />
      </View>
    </ScrollView>
  );
};

export default ItemDetail;
