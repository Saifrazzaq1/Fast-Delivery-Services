import {Image, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import Header from 'src/Components/Header';
import OrderEarning from 'src/Components/OrderEarning';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Images from '../../../Assets';
import Button from 'src/Components/Button';
import style from './style';
import {useNavigation} from '@react-navigation/native';
const Orders = [
  {
    od: '#234',
    payment: 'Paid Online',
    cm: 'Haris iramani',
  },
  {
    od: '#234',
    payment: 'Paid Online',
    cm: 'Haris iramani',
  },
  {
    od: '#234',
    payment: 'Paid Online',
    cm: 'Haris iramani',
  },
];
const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        locationText
        marginright={'900'}
        alignItems={'left'}
        locationIcon
        menu
      />
      <ScrollView
        style={{
          marginHorizontal: 20,
        }}>
        <OrderEarning />
        <Text style={{fontSize: 20, color: '#000', fontWeight: '500'}}>
          Order Request
        </Text>
        <FlatList
          data={Orders}
          renderItem={({item}) => (
            <View style={style.orderView}>
              <Image style={style.mapImg} source={Images.Map} />
              <Text style={style.amountText}>Order Details</Text>
              <Text style={style.text1}>Order Number {item.od}</Text>
              <Text style={style.amountText}>Payment</Text>
              <Text style={style.text1}>{item.payment}</Text>
              <Text style={style.amountText}>Customer Name</Text>
              <Text style={style.text1}>{item.cm}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={style.redText}>View order Items (2)</Text>
                <FontAwesome5
                  style={{marginLeft: 10}}
                  name="caret-down"
                  size={18}
                  color="#E0281C"
                />
              </View>
              <Button
                onPress={() => {
                  navigation.navigate('RiderOrderDetails', {itemNo: item.od});
                }}
                btnheight={45}
                btnColor="#1C7584"
                textColor="#fff"
                unseen={2}
                justifyContent="center"
                textStyle={{fontSize: 16}}
                title={'Pick Up'}
              />
            </View>
          )}
        />
        <Image style={style.card} source={Images.banner} />
      </ScrollView>
    </View>
  );
};

export default Home;
