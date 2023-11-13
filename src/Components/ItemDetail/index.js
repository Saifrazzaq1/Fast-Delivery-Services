import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from 'src/Components/Button';
import Images from '../../Assets';
import AddItems from '../AddItems';
import style from './style';

const addson = [
  {
    name: 'Garlic',
    price: '(+AED 2.00)',
    id: 1,
  },
  {
    name: 'Tomato',
    price: '(+AED 2.00)',
    id: 2,
  },
  {
    name: 'Peri',
    price: '(+AED 2.00)',
  },
  {
    name: 'Chapotlie',
    price: '(+AED 2.00)',
  },
  {
    name: 'Poison',
    price: '(+AED 2.00)',
  },
];

const ItemDetail = ({item, showModal, setShowModal}) => {
  const [select, setSelect] = useState(null);
  const [ischecked, setIschecked] = useState([]);
  const [data, setData] = useState();
  const navigation = useNavigation();
  const [Enabled, setEnabled] = useState([]);

  return (
    <ScrollView style={{backgroundColor: '#fff', marginTop: 70}}>
      <ImageBackground
        style={style.bgimg}
        source={Images.burger}></ImageBackground>
      <View style={{margin: 20}}>
        <AddItems item={item} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.textany}>Any special Requests</Text>
          <Text style={style.deltext2}>Add note</Text>
        </View>

        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={style.text50}>Adds On</Text>
          <Text style={style.deltext1}> (Optional)</Text>
        </View>
        <Text style={style.deltext}>Choose up to 8 items</Text>
        <FlatList
          data={addson}
          keyExtractor={(_, i) => i + '-SAAM-KIND'}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setEnabled(prev => {
                  if (prev.includes(item.name)) {
                    return prev.filter(p => p !== item.name);
                  } else {
                    return [...prev, item.name];
                  }
                });
              }}
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={style.deltext3}>{item.name} Sauce</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={style.deltext3}>AED 50</Text>
                <FontAwesome5
                  style={style.eyeBtn1}
                  size={25}
                  name={Enabled.includes(item.name) ? 'check-square' : 'square'}
                  color={Enabled.includes(item.name) ? 'green' : '#B7B7B7'}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        <Button
          btnheight={55}
          unseen={2}
          title={'Add to Basket'}
          justifyContent={'space-between'}
          buttonStyle={{marginTop: 20}}
          btnColor="#1C7584"
          textColor={'#fff'}
          textStyle={{marginHorizontal: 20}}
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ItemDetail;
