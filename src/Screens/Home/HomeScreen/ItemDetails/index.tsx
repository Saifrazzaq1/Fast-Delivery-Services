import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CustomHeader from '../../../../Components/CustomHeader';
import RestaurantDetails from '../RestaurantDetails';
import styles from './style';
import CustomTabNavigator from '../../../../Components/CustomTopNavBar';
import { connect, useDispatch } from 'react-redux';
import { SET_FINAL_PRICE } from '../../../../Redux/Reducers/Auth/actions';

const ItemsDetails = ({ cartItems, cartItemCount, finalPrice, navigation }: any) => {
  const dispatch = useDispatch();
  const [press, setPress] = useState(false);
  const [totalPrice, setTotalPrice] = useState(finalPrice);
  
  useEffect(() => {
    console.log(cartItemCount);
    if (cartItemCount === 0) {
      setTotalPrice(0);
      dispatch({ type: SET_FINAL_PRICE, payload: 0 });
    } else if (finalPrice !== undefined && finalPrice !== null) {
      setTotalPrice(finalPrice * cartItemCount);
    }
  }, [cartItemCount, finalPrice]);

  useEffect(() => {
    // Log the details of all items in the cart to the console
    console.log('Items in the cart:', cartItems);
  }, [cartItems, ]);

  const handlePress = () => {
    setPress(!press);
  };

    
  return (
    <View style={styles.cont}>
      {press ? (
        <CustomHeader
          title=""
          showTitle1={false}
          titleAlignment="center"
          isShowBackIcon={true}
          onPressSearch={() => { }}
          onPressShare={() => { }}
          title1={''}
        />
      ) : (
        <RestaurantDetails />
      )}
      <View style={{ flex: 1 }}>
        <CustomTabNavigator handlePress={handlePress} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => {
        navigation.navigate('Checkoutorders');
        dispatch({ type: SET_FINAL_PRICE, payload: totalPrice });
      }}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.t1}>{cartItemCount}</Text>
        </TouchableOpacity>
        <Text style={styles.t1}>View Basket</Text>
        {finalPrice !== undefined && finalPrice !== null ? (
          <Text style={styles.t2}>AED {totalPrice}</Text>
        ) : (
          <Text style={styles.t2}>AED 0.00</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cartItemCount: state.cart.cartItems.length,
    finalPrice: state.cart.finalPrice,
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(ItemsDetails);
