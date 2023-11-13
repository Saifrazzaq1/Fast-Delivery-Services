import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux'; // Remove the connect import
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import styles from './style';
import CustomHeader from '../../../../Components/CustomHeader';
import Assets from '../../../../Assets';
import Button from '../../../../Components/Button';
import CategoryItem from '../../../../Components/CategoryItem';
import { fontRef, heightRef, widthRef } from '../../../../config/screenSize';
import CustomIcons from '../../../../Components/IconWithText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Categories, Items, SET_FINAL_PRICE, decrementCount, incrementCount, subCategory } from '../../../../Redux/Reducers/Auth/actions';
import Divider from '../../../../Components/Divider';
import CustomCheckbox from '../../../../Components/Checkbox';

const notes = [
    {
        id: '1',
        title: 'No Cutlery',
        body: 'Less Plastic is the best plastic',
        imageSource: Assets.Cutlery
    },
    {
        id: '2',
        title: 'Add a note',
        body: 'Less Plastic is the best plastic',
        imageSource: Assets.Note
    },
    // Add more items here
];

const Payments = [
    {
        id: '1',
        title: 'Subtotal',
        price: 'AED 78.00',
    },
    {
        id: '2',
        title: 'Discount ',
        price: '-AED 8.00',
    },
    {
        id: '3',
        title: 'Delivery fee',
        price: '-AED 7.50',
    },
    {
        id: '4',
        title: 'Total amount ',
        price: 'AED 78.16',
    },
    // Add more items here
];

const Checkoutorders = ({ navigation, cartItems , finalPrice }: any) => {
  // Maintain local state for item counts
  const dispatch = useDispatch();
  const [itemCounts, setItemCounts] = useState(cartItems.map(() => 1));

  const handleIncrement = (index: any) => {
    // Create a copy of the itemCounts array and update the count for the specified index
    const updatedItemCounts = [...itemCounts];
    updatedItemCounts[index] += 1;
    setItemCounts(updatedItemCounts);

    // Add 28.50 to the finalPrice when incrementing
    dispatch({ type: SET_FINAL_PRICE, payload: finalPrice + 28.50 });
  };

  const handleDecrement = (index: any) => {
    // Create a copy of the itemCounts array and update the count for the specified index
    if (itemCounts[index] > 1) {
      const updatedItemCounts = [...itemCounts];
      updatedItemCounts[index] -= 1;
      setItemCounts(updatedItemCounts);

      // Subtract 28.50 from the finalPrice when decrementing
      dispatch({ type: SET_FINAL_PRICE, payload: finalPrice - 28.50 });
    }
  };
  return (
    <View style={styles.cont}>
      <CustomHeader
        title='Johar Town, Lahore'
        title1={'Basket'}
        showTitle1={true}
        titleAlignment='center'
        isShowBackIcon
      />
      <ScrollView>
        <View>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 10 }}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.body}>{item.body}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Icon name="minus" size={20} color="gray" onPress={() => handleDecrement(index)} />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '600',
                        color: 'black',
                        textAlign: 'center',
                        marginHorizontal: 10,
                      }}
                    >
                      {itemCounts[index]}
                    </Text>
                    <Icon name="plus" size={20} color="red" onPress={() => handleIncrement(index)} />
                  </View>
                </View>
                <Image source={item.imageSource} style={styles.image} />
              </View>
            )}
          />
        </View>
          
        <View style={styles.divider} />
      <View>
      <Text style={{marginBottom:20, color:'black', fontSize:20}}>Final Price {finalPrice.toFixed(2)}</Text>
        <FlatList
          data={notes} // Use notes data from your Redux store
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
              <Image source={item.imageSource} />
              <View style={{ paddingLeft: 10, paddingRight: 130 }}>
                <Text style={styles.t1}>{item.title}</Text>
                <Text style={styles.t2}>{item.body}</Text>
              </View>
              <CustomCheckbox activeColor={'#1C7584'} icon={Assets.Check} />
            </View>
          )}
        />
        <View style={styles.divider} />
      </View>
      <View style={{ paddingHorizontal: 10, flex: 1 }}>
        
        <Text style={{
          fontSize: 18, fontWeight: '500',
          color: 'black',
        }}>Payment Summary</Text>
        <FlatList
          data={Payments} // Use Payments data from your Redux store
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between', paddingVertical: 4,
            }}>
              <Text style={styles.t3}>{item.title}</Text>
              <Text style={styles.t3}>{item.price}</Text>
            </View>
          )}
        />
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 20 }}>
          <Button title={'Add Items'} textColor={'#1C7584'} customBackgroundColor={'white'}
            TouchableStyle={{
              borderWidth: 1, borderColor: '#1C7584',
              width: 170 * widthRef, borderRadius: 40
            }} onPress={() => navigation.navigate('ItemsDetails')} />
          <Button title='CheckOut'
            TouchableStyle={{ width: 170 * widthRef, borderRadius: 40 }}
            onPress={() => navigation.navigate('OrderLocation')} />
        </View>
    
      </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cart.cartItems,
    finalPrice: state.cart.finalPrice,
  };
};

export default connect(mapStateToProps)(Checkoutorders);
