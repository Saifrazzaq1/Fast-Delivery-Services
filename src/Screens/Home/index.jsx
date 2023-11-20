import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import AssitBar from 'src/Components/AssitBar';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import ResturantBar from 'src/Components/ResturantBar';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {CATEGORIES} from 'src/Redux/Reducers/Auth/actions';
import Images from '../../Assets/';
import Order from '../Account/AccountScreens/Order';
import style from './style';

const Home = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    CATEGORIES(res => {
      if (res.success) {
        setCategories(res.catagory);
      }
    });
  }, []);

  return (
    <View style={style.body}>
      <ScrollView stickyHeaderIndices={[0]}>
        <Header
          searchIcon
          searchmarginRight={20}
          locationText
          headerbgcolor={'#fff'}
          headerBg
          locationtextPosition={'left'}
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
                  {item.catagory}
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
            data={Order}
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
