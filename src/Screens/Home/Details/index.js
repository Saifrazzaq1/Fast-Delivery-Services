import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import ItemDetail from 'src/Components/ItemDetail';
import {useAppSelector} from 'src/Helper/Hooks/reduxHooks';
import {MENU} from 'src/Redux/Reducers/Auth/actions';
import Images from '../../../Assets/';
import style from './style';

const ads = [
  {
    text: '25% Off ADCB TouchPoints Platinum Lorem ipsum...',
  },
  {
    text: '25% Off ADCB TouchPoints Platinum Lorem ipsum...',
  },
  {
    text: '25% Off ADCB TouchPoints Platinum Lorem ipsum...',
  },
];
const menu = [
  {
    text: 'Trending',
    index: 1,
  },
  {
    text: 'All day light Dishes',
    index: 2,
  },
  {
    text: 'Starter',
    index: 3,
  },
  {
    text: 'Salad',
    index: 4,
  },
  {
    text: 'Raita',
    index: 5,
  },
];
const stars = [Images.star, Images.star, Images.star, Images.star];
const Details = ({route}) => {
  const data = route.params?.item;
  const {cart} = useAppSelector(s => s.cart);
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const id = data?._id;
    MENU(id, res => {
      if (res.success) {
        setItems(res.menu);
      }
    });
  }, []);
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(1);
  return (
    <View>
      <ImageBackground style={style.bgimg} source={Images.burger}>
        <Header
          backIcon
          iconBg={'#fff'}
          searchIcon
          searchmarginRight={65}
          logoutIcon
          logoutSize={15}
        />
      </ImageBackground>
      <View
        style={{
          position: 'absolute',
          width: '95%',
          alignSelf: 'center',
          zIndex: 1000,
          marginTop: 750,
        }}>
        <Button
          disabled={!cart.length}
          btnheight={55}
          unseen={2}
          title={'Basket'}
          btnColor={!cart.length ? '#a0a0a0' : '#1C7584'}
          textColor={'#fff'}
          textStyle={{marginLeft: 20}}
          onPress={() => {
            console.log(cart.length);
            navigation.navigate('CheckOut', {data});
          }}
        />
      </View>
      <ScrollView style={{marginBottom: 330}}>
        <View style={style.body}>
          <View style={style.view1}>
            <Text style={style.oshatext}>{data.bussiness_name}</Text>
            <Text style={style.infotext}>Info</Text>
          </View>
          <Text style={style.emitext}>Owner: {data.owner}</Text>
          <View style={style.ratingtextview}>
            <View style={{flexDirection: 'row'}}>
              {stars.map(() => (
                <Image style={style.ystar} source={Images.star} />
              ))}
              <Image style={style.gstar} source={Images.star} />
              <Text style={style.ratingtext}>4.2 (1540+)</Text>
            </View>
            <Text style={style.revtext}>Reviews</Text>
          </View>
          <View style={style.line} />
          <View style={{justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Image style={style.clockicon} source={Images.clock} />
              <Text style={style.text50}>
                In 50 mins (Delivery fee: AED 6.00)
              </Text>
              <Image style={style.emark} source={Images.emark} />
            </View>
            <Text style={style.deltext}>
              Delivered by the restaurants, delivery time may{'\n'} vary and no
              live tracking
            </Text>
          </View>
          <View style={{justifyContent: 'space-between', marginTop: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Image style={style.clockicon} source={Images.clock} />
              <Text style={style.text50}>
                In 50 mins (Delivery fee: AED 6.00)
              </Text>
              <Image style={style.emark} source={Images.emark} />
            </View>
            <Text style={style.deltext}>
              Delivered by the restaurants, delivery time may{'\n'} vary and no
              live tracking
            </Text>
          </View>
          <View style={style.line} />
          <FlatList
            horizontal={true}
            style={{flexDirection: 'row'}}
            data={ads}
            renderItem={({item}) => (
              <View style={style.offlist}>
                <Image style={style.offimg} source={Images.off} />
                <Text style={style.adtext}>{item.text}</Text>
              </View>
            )}
          />
          <View style={style.line} />
          <Image style={style.menuicon} source={Images.linesimg} />
          <View style={style.menulist}>
            <FlatList
              horizontal={true}
              style={{flexDirection: 'row'}}
              data={menu}
              renderItem={({item}) => (
                <View style={style.menulist2}>
                  <TouchableOpacity onPress={() => setActive(item.index)}>
                    <Text
                      style={[
                        style.menutext,
                        {
                          color: active === item.index ? '#1C7584' : '#B9BCBE',
                          fontWeight: active === item.index ? 'bold' : '500',
                        },
                      ]}>
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                  {active === item.index ? <View style={style.act} /> : null}
                </View>
              )}
            />
          </View>
          <Text style={style.trendheading}>Trending</Text>
          <View>
            <View>
              <FlatList
                style={{flex: 1}}
                data={items}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={style.mainlistview}
                    onPress={() => setSelected(item)}>
                    {cart.find(i => i.item._id === item._id) ? (
                      <View style={style.select} />
                    ) : (
                      <View style={style.noselect} />
                    )}
                    <View>
                      <Text style={style.mlisttext}>{item.item}</Text>
                      <Text style={style.mlistdes}>{item.discription}</Text>
                      <Text style={style.mlistprice}>{item.price}</Text>
                    </View>
                    <Image style={style.mlistimg} source={Images.burger} />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            statusBarTranslucent
            visible={selected !== null}>
            <Pressable style={style.btn} onPress={() => setSelected(null)}>
              <Pressable style={{marginTop: 70}} onPress={() => {}}>
                <ItemDetail
                  item={selected}
                  data={data}
                  onCompleteRequest={() => setSelected(null)}
                />
              </Pressable>
            </Pressable>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
