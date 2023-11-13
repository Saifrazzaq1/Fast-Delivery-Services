import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { fontRef, heightRef } from '../../../../../config/screenSize';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomCheckbox from '../../../../../Components/Checkbox';
import Assets from '../../../../../Assets';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { SET_FINAL_PRICE, decrementCount, incrementCount } from '../../../../../Redux/Reducers/Auth/actions'; // Update the import path

const data = [
  {
    id: '0',
    itemName: 'Garlic Sauce  ',
    price: '(+AED 2.00)',
  },
  {
    id: '1',
    itemName: 'Chili Sauce     ',
    price: '(+AED 2.00)',
  },
  {
    id: '2',
    itemName: 'Mayo Sauce   ',
    price: '(+AED 2.00)',
  },
  {
    id: '3',
    itemName: 'Cheze Sauce  ',
    price: '(+AED 2.00)',
  },
  {
    id: '4',
    itemName: 'Hoty Sauce     ',
    price: '(+AED 2.00)',
  },
  // Add more data objects for additional items
];

const ItemDetailModal = ({ isVisible, onClose, itemData,   }:any) => {
  const dispatch = useDispatch();

  // Calculate the final price based on count
  const [finalPrice , setFinalPrice] =useState(28.50)
  const ItemCount = useSelector((state: any) => state.countReducer.count);
  useEffect(() => {
    // Update final price whenever the item count changes
    const newFinalPrice = ItemCount * 28.50;
    setFinalPrice(newFinalPrice)
    // dispatch({ type: SET_FINAL_PRICE, payload: finalPrice });
  }, [ItemCount]);

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  const updateFinalPrice = (isActive:any) => {
    const newFinalPrice = isActive ? finalPrice + 2 : finalPrice - 2;
    setFinalPrice(newFinalPrice)
   
  };

 const handleclose = () => {
  onClose(); // Invoke onClose as a function to close the modal
  setFinalPrice(28.5)
  dispatch({ type: SET_FINAL_PRICE, payload: finalPrice });
};

  return (
    <Modal isVisible={isVisible} backdropOpacity={0.5}>
      <View style={styles.modalContent}>
        <Image source={itemData.imageSource} style={styles.image} />
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>{itemData.title}</Text>
          <Text style={styles.body}>{itemData.body}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.price}>AED 28.50</Text>
            <Icon name="minus" size={20} color="gray" onPress={handleDecrement} />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: 'black',
                textAlign: 'center',
                marginHorizontal: 10,
              }}
            >
              {ItemCount}
            </Text>
            <Icon name="plus" size={20} color="red" onPress={handleIncrement} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'gray', marginBottom: 5 }}>
              Any Special Requests
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'red' }}>Add note</Text>
          </View>

          <Text style={styles.title}>
            Add-Ons <Text style={{ fontSize: 14, color: 'gray' }}>(optional)</Text>
          </Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: 'gray', marginBottom: 5 }}>
            Choose up to 8 items
          </Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <ItemView itemName={item.itemName} price={item.price} onCheckboxPress={updateFinalPrice} />
            )}
          />
          <TouchableOpacity style={styles.btn} onPress={handleclose}>
            <Text style={styles.t1}>Add to Basket</Text>
            <Text style={styles.t2}>AED {finalPrice}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const ItemView = ({ itemName, price, onCheckboxPress }:any) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 14, fontWeight: '400', color: 'black', marginRight: 150 }}>
        {itemName}
      </Text>
      <Text style={{ fontSize: 12, fontWeight: '400', color: 'black', marginRight: 5 }}>
        {price}
      </Text>
      <CustomCheckbox onToggle={onCheckboxPress} activeColor="#1C7584" icon={Assets.Check} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: 700,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
    marginTop: 10,
  },
  body: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#EF5DA8',
    marginRight: 180,
    marginTop: 5,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '30%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  btn: {
    width: '100%',
    borderRadius: 40,
    height: 55 * heightRef,
    backgroundColor: '#1C7584',
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    marginVertical: 30,
  },
  t1: {
    fontSize: 16 * fontRef,
    fontWeight: '500',
    color: 'white',
  },
  t2: {
    fontSize: 16 * fontRef,
    fontWeight: '500',
    color: 'white',
    marginLeft: 100,
  },
});

export default ItemDetailModal;
