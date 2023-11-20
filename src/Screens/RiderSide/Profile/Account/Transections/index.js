import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from 'src/Components/Header';
import style from './style';
import Images from '../../../../../Assets';

const Payments = [
  {
    id: 0,
    payment: 52.0,
    Date: 'Nov - 12 - 2023',
  },
  {
    id: 1,
    payment: 52.0,
    Date: 'Nov - 12 - 2023',
  },
  {
    id: 2,
    payment: 52.0,
    Date: 'Nov - 12 - 2023',
  },
  {
    id: 3,
    payment: 52.0,
    Date: 'Nov - 12 - 2023',
  },
  {
    id: 4,
    payment: 52.0,
    Date: 'Nov - 12 - 2023',
  },
  {
    id: 5,
    payment: 52.0,
    Date: 'Nov - 12 - 2023',
  },
];

const Transaction = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent
      />
      <Header
        loginbtn
        headerBg
        headerbgcolor={'white'}
        loginmarginleft={'45%'}
        headerShadow
        backIcon={true}
        loginTitle={'Transaction'}
        logintextcolor={'black'}
      />
      <View style={style.mainview}>
        <Text style={style.CardText}>Transaction History</Text>
        <FlatList
          data={Payments}
          renderItem={({item}) => (
            <TouchableOpacity style={style.Received}>
              <Image source={Images.Received} />
              <Text style={style.Rectext}>Received</Text>
              <View style={{alignSelf: 'center', marginLeft: 120}}>
                <Text style={style.Rectext}>${item.payment}</Text>
                <Text style={style.Rectext1}>{item.Date}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Transaction;
