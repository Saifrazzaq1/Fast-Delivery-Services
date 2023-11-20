import {
  ScrollView,
  ImageBackground,
  Text,
  Image,
  FlatList,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from 'src/Components/Header';
import Images from '../../../Assets/';
import {MENU} from 'src/Redux/Reducers/Auth/actions';
import style from './style';
import Button from 'src/Components/Button';
import {useNavigation} from '@react-navigation/native';
import ItemDetail from 'src/Components/ItemDetail';


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
const Details = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    MENU(res => {
      if (res.success) {
      
        setItems(res.users.item);
      }
   
    });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(1);
  const [onSelect, setOnSelect] = useState([]);
  const [detail, setDetail] = useState();
  const navigation = useNavigation();
  return (
    <ScrollView stickyHeaderIndices={[0]}>
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
      <View style={style.body}>
        <View style={style.view1}>
          <Text style={style.oshatext}>Osha Emirati Gourmet</Text>
          <Text style={style.infotext}>Info</Text>
        </View>
        <Text style={style.emitext}>Emirati, Arabic, Grills</Text>
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
              <>
                <View style={style.menulist2}>
                  <TouchableOpacity
                    onPress={() => {
                      setActive(item.index);
                    }}>
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
                  {active === item.index ? (
                    <View
                      style={style.act}
                    />
                  ) : null}
                </View>
              </>
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
                  onPress={() => {
                    setShowModal(true);
                    setOnSelect(prevItems => [...prevItems, item]);
                    setDetail(item);
                  }}>
                  {onSelect.includes(item) ? (
                    <View
                      style={style.select}
                    />
                  ) : null}
                  <View>
                    <Text style={style.mlisttext}>{item.item}</Text>
                    <Text style={style.mlistdes}>{item.description}</Text>
                    <Text style={style.mlistprice}>Price on selection</Text>
                  </View>
                  <Image style={style.mlistimg} source={Images.salan} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        {showModal ? (
          <Modal animationType="slide" transparent={true} statusBarTranslucent>
            <Pressable
              style={style.btn}
              onPress={() => {}}>
              <Pressable
                onPress={() => {
                  setShowModal(false);
                }}>
                <ItemDetail
                  item={detail}
                  setShowModal={setShowModal}
                  showModal={showModal}
                />
              </Pressable>
            </Pressable>
          </Modal>
        ) : null}
        <Button
          btnheight={55}
          unseen={2}
          title={'Basket'}
          buttonStyle={{marginTop: 20}}
          btnColor="#1C7584"
          textColor={'#fff'}
          textStyle={{marginLeft: 20}}
          onPress={() => {
            navigation.navigate('CheckOut', {
              item: onSelect,
              itemPrice: detail.price,
            });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Details;
