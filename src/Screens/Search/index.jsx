import {FlatList,TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Header from 'src/Components/Header';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Textfield from 'src/Components/Textfield';
import AllResturant from 'src/Components/AllResturant';
import AllResturant2 from 'src/Components/AllResturant2';
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
  const [select, setSelect] = useState(null);
  return (
    <View style={{backgroundColor:'#fff',flex:1}}>
      <Header />

      <View style={styles.downView1}>
            <Textfield
              placeholder="Search food, groceries and more"
              borderRadius={30}
              
              borderColor={'grey'}
              paddingLeft={20}
              backgroundColor={'#fff'}
            />
            <FontAwesome5
              onPress={() => setEnabled(!Enabled)}
              style={styles.eyeBtn1}
              size={18}
              name="search"
              color="#E0281C"
            />
          </View>
          <View style={styles.menulist}>
          <FlatList
            horizontal={true}
            style={{flexDirection: 'row'}}
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
                  {active === item.index ? (
                    <View
                      style={{
                        backgroundColor: '#1C7584',
                        height: 4,
                        marginLeft: -2,
                        width: '105%',
                      }}
                    />
                  ) : null}
                </View>
              </>
            )}
          />
        </View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 17,
            paddingTop: 20,
          }}>
          {' '}
          {'  '}Recent Search
        </Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row',marginHorizontal:10}}>
          <Text style={styles.RecSearch}>Chicken</Text>
          <Text style={styles.RecSearch}>Cake</Text>
          <Text style={styles.RecSearch}>Burger</Text>
          <Text style={styles.RecSearch}>Pizza</Text>
          <Text style={styles.RecSearch}>Coffee</Text>
          <Text style={styles.RecSearch}>Shawarma</Text>
          <Text style={styles.RecSearch}>Pasta</Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 17,
            paddingTop: 20,
          }}>
          {' '}
          {'  '}Featured restaurants
        </Text>
        <AllResturant2 horizontal={true}/>
        <AllResturant horizontal={true} mt={'125%'} position={'absolute'}/>

    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  downView1: {
    marginHorizontal: 10,
    marginTop:-20,
    borderRadius: 50,
  },
  eyeBtn1: {
    position: 'absolute',
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '10%',
    right: 10,
    top: '10%',
  },
  RecSearch: {
    color: 'grey',
    margin: 5,
    borderWidth: 0.5,
    width: '22%',
    fontSize: 12,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    borderColor: '#0000000D',
    backgroundColor:'#0000000D'
  },
  menulist: {
    width: '95%',
    marginLeft: 20,
    marginTop:10
  },
  menulist2: {
    marginTop: 2,
    marginHorizontal: 10,
  },
  menutext: {
    color: '#1C7584',
    fontWeight: '500',
    fontSize: 15,
    marginRight: 5,
    textAlign: 'center',
    paddingBottom: 5,
  },
});
