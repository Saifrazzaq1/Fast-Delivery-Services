import React from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from 'src/Components/Header';
import style from './style';
import Images from '../../../../Assets';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const Cards = [
  {
    id: 0,
    number: 234,
    name: 'Haris iramani',
    price: '78.16',
  },
  {
    id: 1,
    number: 234,
    name: 'Haris iramani',
    price: '78.16',
  },
  {
    id: 2,
    number: 234,
    name: 'Haris iramani',
    price: '78.16',
  },

  // Add more items as needed
];
const Items = [
  {
    id: 0,
    title: 'Saloona Marga (1)',
    price: 'AED 78.16',
    image: Images.salan,
  },
  {
    id: 1,
    title: 'Saloona Marga (1)',
    price: 'AED 78.16',
    image: Images.salan,
  },
];

const History = ({navigation}) => {
  return (
    <View style={style.body}>
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
        loginTitle={'History'}
        logintextcolor={'black'}
      />
      <View style={style.mainview}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Cards}
          renderItem={({item}) => (
            <View>
              <View style={style.Card}>
                <Text style={style.text}>Order Details</Text>
                <Text style={style.text1}>Order Number #{item.number}</Text>
                <Text style={style.text}>Customer Name</Text>
                <Text style={style.text1}>{item.name}</Text>
                <TouchableOpacity
                  style={style.pay}
                  onPress={() => navigation.navigate('HistoryD')}>
                  <Icon
                    type={IconType.Ionicons}
                    name="card-outline"
                    size={24}
                    color="black"
                    style={{marginRight: 5}}
                  />
                  <Text style={style.text1}>Paid Online</Text>
                  <Text style={style.text2}>AED {item.price}</Text>
                </TouchableOpacity>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={Items}
                  renderItem={({item}) => (
                    <View style={style.items}>
                      <View>
                        <Text style={style.itemTitle}>{item.title}</Text>
                        <Text style={style.itemPrice}>{item.price}</Text>
                      </View>
                      <Image source={item.image} style={style.itemImg} />
                    </View>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default History;
