import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import AssitBar from 'src/Components/AssitBar';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import ResturantBar from 'src/Components/ResturantBar';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {useAppSelector} from 'src/Helper/Hooks/reduxHooks';
import Images from '../../Assets/';
import style from './style';
import {CATEGORIES} from 'src/Redux/Reducers/Auth/actions';

const Home = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const options = [
    {name: 'Place Order', img: Images.five},
    {name: 'Super Saver', img: Images.one},
    {name: 'Game Day Deals', img: Images.three},
    {name: 'Give Back', img: Images.four},
    {name: 'Past Order', img: Images.two},
  ];
  const offers = [{img: Images.pop1}, {img: Images.pop2}, {img: Images.pop3}];
  const user = useAppSelector(s => s.auth.user);
  useEffect(() => {
    CATEGORIES(res => {
      setCategories(res.Categories);
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView  stickyHeaderIndices={[0]}>
        <Header
          searchIcon
          searchmarginRight={20}
          locationText
          backIcon
          headerbgcolor={"#fff"}
          headerBg
          locationtextPosition={'center'}
        />
        <View style={style.storesView}>
          <Text style={style.storesViewText1}>Stores</Text>
          <Text style={style.storesViewText2}>
            Explore discount sales {'\n'}before next visit!
          </Text>
          <Button
            widt={'30%'}
            unseen={2}
            btnheight={39}
            btnColor="#FFFFFF33"
            title={'Login/signup'}
            textColor={'#fff'}
            fontSize={12}
            alignBtn={'flex-start'}
            justifyContent={'center'}
          />
        </View>

        <Image style={style.storeImg} source={Images.storeImg} />
        <Text style={style.heytext}>Hey Good Morning</Text>
        <View style={style.heyView}>
          <FlatList
            numColumns={3}
            style={{flexDirection: 'row'}}
            data={categories}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FastFood');
                }}
                activeOpacity={0.1}
                style={style.catView}>
                <Image style={style.catimg} source={Images.gggg} />
                <Text style={style.cattext} numberOfLines={1}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={style.faddView}>
          <Image style={style.faddimg} source={Images.fadd} />
          <Text style={style.faddtext1}>Get a code ? </Text>
          <Text style={style.faddtext2}>
            {'\n'}
            Add your code and save on your order
          </Text>
        </View>
        <AssitBar marginTop={70} />
        <Text style={style.poputext}>Popular restaurants nearby</Text>
        <ResturantBar />
        <View style={{marginHorizontal: 20}}>
          <FlatList
            horizontal={true}
            style={{flexDirection: 'row'}}
            data={offers}
            renderItem={({item}) => (
              <TouchableOpacity activeOpacity={0.1} style={style.offerView}>
                <Image style={style.offerimg} source={item.img} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;