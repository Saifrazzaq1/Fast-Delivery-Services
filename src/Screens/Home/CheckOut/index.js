import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Images from '../../../Assets';
import style from './style';
import Textfield from 'src/Components/Textfield';
import AddItems from 'src/Components/AddItems';

const CheckOut = ({route}) => {

  const {item, itemPrice} = route.params;
  const navigation = useNavigation();
  const [Enabled, setEnabled] = useState(true);
  const [note, setNote] = useState(false);

  const totalPrice = item.reduce((total, item) => total + item.price, 0);
  return (
    <ScrollView style={{backgroundColor: '#fff'}} stickyHeaderIndices={[0]}>
      <Header
        headerBg
        headerbgcolor={'white'}
        headerShadow
        locationText
        backIcon
      />
      <View style={style.img}>
        <FlatList
          data={item}
          renderItem={({item}) => <AddItems item={item} />}
        />
        <View style={style.checkView}></View>
        <View style={style.line} />
        <TouchableOpacity
          onPress={() => {
            setEnabled(prevNote => !prevNote);
          }}
          style={style.noview}>
          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={style.img1}
                source={Images.knife}
              />
              <Text style={style.text50}>No Cutlery</Text>
            </View>
            <Text style={style.deltext}>Less Plastic is the best plastic</Text>
          </View>
          <View style={{zIndex: 1000}}>
            <FontAwesome5
              onPress={() => setEnabled(!Enabled)}
              style={style.eyeBtn1}
              size={25}
              name={Enabled ? 'square' : 'check-square'}
              color={Enabled ? '#B7B7B7' : 'green'}
            />
          </View>
        </TouchableOpacity>
        <View style={style.line} />
        <TouchableOpacity
          onPress={() => {
            setNote(prevNote => !prevNote);
          }}
          style={style.noteview}>
          <View style={{}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={style.img1}
                source={Images.check}
              />
              <Text style={style.text50}>Add a note</Text>
            </View>
            <Text style={style.deltext}>Anything else we need to know ?</Text>
          </View>
          <View>
            <Image
              style={style.img2}
              source={Images.emark}
            />
          </View>
        </TouchableOpacity>
        {note === true ? (
          <Textfield borderRadius={20} borderColor={'grey'} marginTop={20} />
        ) : null}
        <View style={style.line} />
        <View style={style.view1}>
          <Text style={style.oshatext}>Payment Summary</Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textany}>Subtotal</Text>
          <Text style={style.deltextnext}>AED {totalPrice}</Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textany}>Discount</Text>
          <Text style={style.deltext2}>- AED 10% off</Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textany}>Delivery fee</Text>
          <Text style={style.deltextnext}>AED 75 </Text>
        </View>
        <View style={style.pay}>
          <Text style={style.textany}>Total amount</Text>
          <Text style={style.deltextnext}>AED {totalPrice - 25 + 75}</Text>
        </View>
        <View
          style={style.btnView}>
          <Button
            btnheight={55}
            unseen={2}
            title={'Add Items'}
            showtitle2={false}
            buttonStyle={style.button}
            btnColor="#fff"
            textColor={'#fff'}
            textStyle={{marginHorizontal: 20, color: '#1C7584'}}
            onPress={() => {
              navigation.navigate('Details');
            }}
          />
          <Button
            btnheight={55}
            unseen={2}
            showtitle2={false}
            title={'Check Out'}
            justifyContent={'center'}
            buttonStyle={style.button1}
            btnColor="#1C7584"
            textColor={'#fff'}
            textStyle={{marginHorizontal: 20}}
            onPress={() => {
              navigation.navigate(
                'SelectLocation',
                {
                  item: route?.params?.item,
                  total: totalPrice - 25 + 75,
                  itemPrice,
                },
                
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckOut;
