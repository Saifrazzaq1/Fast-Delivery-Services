import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Images from '../../../../Assets';
import Header from 'src/Components/Header';

const Order = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header
        backIcon
        loginTitle={'Your Order'}
        loginbtn
        logintextcolor={'#1C7584'}
        loginmarginleft={'50%'}
        headerbgcolor={'#fff'}
        headerBg
        headerShadow
      />
      <View style={styles.btnsview}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Beef burger</Text>
            <Text style={styles.emitext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit ..
            </Text>
            <Text style={styles.revtext}>AED 20.28</Text>
          </View>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 40,
              borderRadius: 10,
            }}
            source={Images.burger}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Pizza burger</Text>
            <Text style={styles.emitext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit ..
            </Text>
            <Text style={styles.revtext}>AED 20.28</Text>
          </View>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 40,
              borderRadius: 10,
            }}
            source={Images.burger}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <View style={styles.view1}>
            <Text style={styles.oshatext}>hunt burger</Text>
            <Text style={styles.emitext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem
              ipsum dolor sit ..
            </Text>
            <Text style={styles.revtext}>AED 20.28</Text>
          </View>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 40,
              borderRadius: 10,
            }}
            source={Images.burger}
          />
        </View>
      </View>
    </View>
  );
};
export default Order;

const styles = StyleSheet.create({
  btnsview: {
    width: '100%',
    marginHorizontal: 20,
  },
  btnsimg: {
    height: 28,
    marginLeft: 10,
    width: 28,
  },

  btnsname: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
  btnsnames: {
    color: '#1C7584',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
  },
  line: {
    marginHorizontal: 10,
    marginTop: -10,
    marginBottom: 15,
    height: 0.4,
    backgroundColor: 'grey',
    zIndex: 1000,
  },

  view1: {paddingTop: 5},
  oshatext: {color: 'black', fontSize: 16, fontWeight: '500'},
  emitext: {
    color: '#A0A0A0',
    fontSize: 12,
    width: 230,
  },
  revtext: {
    color: '#E0281C',
    fontWeight: '500',
    fontSize: 12,
    marginTop: 10,
    marginRight: 20,
  },
});
