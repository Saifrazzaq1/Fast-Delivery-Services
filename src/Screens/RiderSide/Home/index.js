import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import OrderEarning from 'src/Components/OrderEarning';
import Images from '../../../Assets';
import style from './style';
import {AllOrders} from 'src/Redux/Reducers/Auth/actions';

const Home = ({navigation}) => {
  const [index, setIndex] = useState(false);
  const [allorders, setAllorders] = useState([]);
  useEffect(() => {
    AllOrders(res => {
      if (res.success) {
        setAllorders(res.orders);
      }
    });
  }, []);

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
      <ScrollView style={style.body} showsVerticalScrollIndicator={false}>
        <OrderEarning />
        <Text style={style.maintext}>Order Request</Text>
        <FlatList
          data={allorders}
          renderItem={({item}) => (
            <View style={style.orderView}>
              <Image style={style.mapImg} source={Images.Map} />
              <Text style={style.amountText}>Order Details</Text>
              <Text style={style.text1}>Order Number #{item.orderNumber}</Text>
              <Text style={style.amountText}>Payment</Text>
              <Text style={style.text1}>{item.payment_type}</Text>
              <Text style={style.amountText}>Customer Name</Text>
              <Text style={style.text1}>
                {item.first_name} {item.last_name}
              </Text>
              <TouchableOpacity
                style={style.row}
                onPress={() => {
                  setIndex(!index);
                }}>
                <Text style={style.redText}>
                  order Items ({item.productId.length})
                </Text>
              </TouchableOpacity>
              <Button
                onPress={() => {
                  navigation.navigate('RiderOrderDetails', {
                    Id: item._id,
                  });
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
