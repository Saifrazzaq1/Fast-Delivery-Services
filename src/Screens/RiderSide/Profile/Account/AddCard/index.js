import React, {useState} from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import Header from 'src/Components/Header';
import style from './style';
import Textfield from 'src/Components/Textfield';
import Button from 'src/Components/Button';
import {useDispatch} from 'react-redux';
import {addCard} from 'src/Redux/Reducers/CreditCard/action';

const AddCard = ({navigation}) => {
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const dispatch = useDispatch();
  const formatCardNumber = input => {
    const numericInput = input.replace(/\D/g, '');
    const formattedInput = numericInput.replace(/(\d{4})/g, '$1 ');
    setCardNumber(formattedInput.trim());
  };

  const handleAddCard = () => {
    const cardInfo = {
      nameOnCard,
      cardNumber,
      expiryDate,
      cvv,
    };

    dispatch(addCard(cardInfo));
    navigation.navigate('AccountR', cardInfo);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={'50%'}
        headerShadow
        loginTitle={'Account'}
        logintextcolor={'#1C7584'}
        backIcon
      />
      <View style={style.mainview}>
        <Textfield
          value={nameOnCard}
          onChangeText={setNameOnCard}
          borderBottomWidth={1}
          borderColor={'grey'}
          placeholder={'Name on Card'}
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
        />
        <Textfield
          value={cardNumber}
          onChangeText={input => formatCardNumber(input)}
          borderBottomWidth={1}
          borderColor={'grey'}
          placeholder={'Card Number'}
          keyboardType="numeric"
          borderTopWidth={0}
          borderRightWidth={0}
          borderLeftWidth={0}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Textfield
            value={expiryDate}
            onChangeText={setExpiryDate}
            style={{width: '70%'}}
            borderBottomWidth={1}
            borderColor={'grey'}
            placeholder={'Expiry Date'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            marginRight={70}
          />
          <Textfield
            value={cvv}
            onChangeText={setCvv}
            borderBottomWidth={1}
            borderColor={'grey'}
            placeholder={'CVV/CVC'}
            borderTopWidth={0}
            borderRightWidth={0}
            borderLeftWidth={0}
            marginRight={30}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button
            onPress={handleAddCard}
            unseen={2}
            title={'Add'}
            textColor={'#fff'}
            fontSize={16}
            justifyContent={'center'}
            btnColor="#1C7584"
            buttonStyle={style.btn}
          />
        </View>
      </View>
    </View>
  );
};

export default AddCard;
