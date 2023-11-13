import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AddToCart, RemoveFromCart } from '../../../../../../Redux/Reducers/Auth/actions';
import { setFinalPrice } from '../../../../../../Redux/Reducers/Auth/actions'; // Import the new action
import ItemDetailModal from '../../ItemDetailModal';
import Assets from '../../../../../../Assets';
import styles from './style';
import ItemsComp from '../../../../../../Components/ItemsComponent';
import { FlatList, Text, View } from 'react-native';


const data = [
  {
    id: '6',
    title: 'Saloona Marga',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit ..',
    price: 'AED 28.50',
    imageSource: Assets.Item2,
  },
  {
    id: '7',
    title: 'Balaleet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit ..',
    price: 'AED 28.50',
    imageSource: Assets.Item3,
  },
  {
    id: '8',
    title: 'Hummas',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit ..',
    price: 'AED 28.50',
    imageSource: Assets.Item4,
  },
  // Add more data objects for additional items
];

const LightDishScreen = (props:any) => {
  const [selectedItemIndexes, setSelectedItemIndexes] = useState([-1]);
  const [selectedItemData, setSelectedItemData] = useState(''); // Store selected item data
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleSelection = (index:any) => {
    if (selectedItemIndexes.includes(index)) {
      // If the item is already selected, remove it from the selected items and the cart
      setSelectedItemIndexes(selectedItemIndexes.filter((i) => i !== index));
      console.log('remove from cart');

      // Calculate the item's price and subtract it from the final price
      const itemPrice = parseFloat(data[index].price);
      props.removeFromCart(data[index]);
      props.setFinalPrice(props.finalPrice - itemPrice);
    } else {
      console.log('add to cart');
      // If the item is not selected, add it to the selected items and the cart
      setSelectedItemIndexes([...selectedItemIndexes, index]);

      // Call the showItemDetail function to open the modal
      showItemDetail(data[index]);

      // Calculate the item's price and add it to the final price
      const itemPrice = parseFloat(data[index].price);
      props.addToCart(data[index]);
      props.setFinalPrice(props.finalPrice + itemPrice);
    }
  };

  const showItemDetail = (itemData:any) => {
    setSelectedItemData(itemData);
    setIsModalVisible(true);
  };

  const closeItemDetail = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.cont}>
      <Text style={styles.text}>Light Dishes</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ItemsComp
            title={item.title}
            body={item.body}
            price={item.price}
            imageSource={item.imageSource}
            isSelected={selectedItemIndexes.includes(index)}
            onSelect={() => {
              toggleSelection(index);
            }}
          />
        )}
      />
      <ItemDetailModal
        isVisible={isModalVisible}
        onClose={closeItemDetail}
        itemData={selectedItemData}
      />
    </View>
  );
};

const mapStateToProps = (state:any) => {
  return {
    cart: state.cart.cartItems,
    finalPrice: state.cart.finalPrice,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    addToCart: (item:any) => dispatch(AddToCart(item)),
    removeFromCart: (item:any) => dispatch(RemoveFromCart(item)),
    setFinalPrice: (finalPrice:any) => dispatch(setFinalPrice(finalPrice)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LightDishScreen);
