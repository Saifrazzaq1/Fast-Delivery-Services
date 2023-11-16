import {Image, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import Button from 'src/Components/Button';
import style from './style';

const RiderOrderDetials = ({route}) => {
  const {itemNo} = route.params;
  return (
    <View style={{paddingBottom: 100}}>
      <Header
        headerBg
        headerbgcolor={'#fff'}
        loginbtn
        loginTitle={`Order ${itemNo}`}
        loginmarginleft={'47%'}
        logintextcolor={'#000'}
        marginright={'900'}
        alignItems={'left'}
        backIcon
      />
      <ScrollView
        style={{
          marginHorizontal: 20,
          marginBottom: '10%',
        }}>
        <View style={style.orderView}>
          <View style={{flexDirection: 'row'}}>
            <Image style={style.dp} source={Images.dp} />
            <Text style={style.text1}>Foodie Hoodie</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image style={style.mapImg} source={Images.loc} />
            <Text style={style.text2}>Sweihan Road, 4th Floor 17th ABD</Text>
          </View>
        
          <Button
            onPress={() => {
              navigation.navigate('RiderOrderDetials');
            }}
            btnheight={45}
            btnColor="#1C7584"
            textColor="#fff"
            unseen={2}
            justifyContent="center"
            textStyle={{fontSize: 16}}
            title={'Continue'}
          />
        </View>

        <Image style={style.card} source={Images.banner} />
      </ScrollView>
    </View>
  );
};

export default RiderOrderDetials;
