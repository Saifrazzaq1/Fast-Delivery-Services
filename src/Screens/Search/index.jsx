import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AllResturant from 'src/Components/AllResturant';
import AllResturant2 from 'src/Components/AllResturant2';
import Header from 'src/Components/Header';
import Textfield from 'src/Components/Textfield';
import styles from './style';
const menu = [
  {
    text: 'Food',
    index: 1,
  },
  {
    text: 'Groceries',
    index: 2,
  },
  {
    text: 'Health & wellness',
    index: 3,
  },
  {
    text: 'Flower',
    index: 4,
  },
  {
    text: 'Pharmacy',
    index: 5,
  },
];
const Search = () => {
  const [active, setActive] = useState(1);
  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.downView1}>
        <Textfield
          placeholder="Search food, groceries and more"
          borderRadius={30}
          borderColor={'grey'}
          paddingLeft={20}
        />
        <FontAwesome5
          style={styles.eyeBtn1}
          size={18}
          name="search"
          color="#E0281C"
        />
      </View>
      <View style={styles.menulist}>
        <FlatList
          horizontal={true}
          style={styles.row}
          data={menu}
          renderItem={({item}) => (
            <>
              <View style={styles.menulist2}>
                <TouchableOpacity
                  onPress={() => {
                    setActive(item.index);
                  }}>
                  <Text
                    style={[
                      styles.menutext,
                      {
                        color: active === item.index ? '#1C7584' : '#B9BCBE',
                        fontWeight: active === item.index ? 500 : null,
                      },
                    ]}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
                {active === item.index ? <View style={styles.active} /> : null}
              </View>
            </>
          )}
        />
      </View>
      <Text style={styles.ser}> {'  '}Recent Search</Text>
      <View style={styles.meenu}>
        <Text style={styles.RecSearch}>Chicken</Text>
        <Text style={styles.RecSearch}>Cake</Text>
        <Text style={styles.RecSearch}>Burger</Text>
        <Text style={styles.RecSearch}>Pizza</Text>
        <Text style={styles.RecSearch}>Coffee</Text>
        <Text style={styles.RecSearch}>Shawarma</Text>
        <Text style={styles.RecSearch}>Pasta</Text>
      </View>
      <Text style={styles.t1}> {'  '}Featured restaurants</Text>
      <AllResturant2 horizontal={true} />
      <AllResturant horizontal={true} mt={'125%'} position={'absolute'} />
    </View>
  );
};

export default Search;
