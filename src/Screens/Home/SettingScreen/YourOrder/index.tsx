import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import Assets from '../../../../Assets';
import ItemsComp from '../../../../Components/ItemsComponent';
import Header from '../../../../Components/Header';

const data = [
    {
      id: '6',
      title: 'Saloona Marga',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit ..',
      price: 'AED 28.50',
      imageSource: Assets.Item2,
    },
    {
      id: '7',
      title: 'Balaleet',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit ..',
      price: 'AED 28.50',
      imageSource: Assets.Item3,
    },
    {
      id: '8',
      title: 'Hummas',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit ..',
      price: 'AED 28.50',
      imageSource: Assets.Item4,
    },
    // Add more data objects for additional items
  ];
  
const YourOrder = ({ navigation }: any) => {


    return (
        <View style={styles.cont}>
            <Header title={'Your Order'} isShowBackIcon={true} />
            <View style={{ flex: 1, padding:10 }}>
            <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ItemsComp
            title={item.title}
            body={item.body}
            price={item.price}
            imageSource={item.imageSource}
           
          />
        )}
      />
            </View>

        </View>
    );
};



export default YourOrder;
