import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AllResturant from 'src/Components/AllResturant';
import AllResturant2 from 'src/Components/AllResturant2';
import AssitBar from 'src/Components/AssitBar';
import ChefList from 'src/Components/ChefList';
import Header from 'src/Components/Header';
import Images from '../../../Assets/';
import styles from './style';
import {BUSSINESS} from 'src/Redux/Reducers/Auth/actions';

const FastFood = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [bussiness, setBussiness] = useState([]);
  const {name, lat, long, id} = route.params;
  useEffect(() => {
    const data = {name, lat, long, id};
    BUSSINESS(data, res => {
      if (res.success) {
        setBussiness(res.bussiness);
      }
    });
  }, []);
  return (
    <View style={styles.body}>
      <Header
        headerBg
        backIcon
        locationText
        locationtextPosition={'center'}
        heartIcon
      />
      <View style={styles.main}>
        <TouchableOpacity style={styles.btn}>
          <Image style={styles.img} source={Images.filter} />
          <Text style={styles.text}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Image style={styles.img} source={Images.cos} />
          <Text style={styles.text}>Coisines</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Image style={styles.img} source={Images.search} />
          <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <AssitBar marginTop={20} />
        <Text style={styles.pickText}>Pick</Text>
        <View style={{marginHorizontal: 20}}>
          <FlatList
            horizontal={true}
            style={{flexDirection: 'row'}}
            data={bussiness}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {item});
                }}
                activeOpacity={0.1}
                style={styles.restrtView}>
                <Image style={styles.restrtimg} source={Images.pop3} />
                <View style={styles.main1}>
                  <Text style={styles.restrttext}>{item.bussiness_name}</Text>
                  <View style={styles.main2}>
                    <Image style={styles.restrtclock} source={Images.clock} />
                    <Text style={styles.restrttime}>
                      within {item.time} mins
                    </Text>
                  </View>
                </View>
                <Text style={styles.nameDes}>{item.des}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.starimg} source={Images.star} />
                  <Text style={styles.startext}>{item.startext}</Text>
                  <Image style={styles.locimg} source={Images.loc} />
                  <Text style={styles.loctext}>{item.address}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.pickText}>All Resturant</Text>
        <AllResturant />
        <ChefList />
        <View style={{}}>
          <AllResturant2 />
        </View>
      </ScrollView>
    </View>
  );
};

export default FastFood;
