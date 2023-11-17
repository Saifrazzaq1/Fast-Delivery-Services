import React from 'react';
import {Image, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import Images from '../../../../Assets';
import styles from './style';

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
          <Image style={styles.all} source={Images.burger} />
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
          <Image style={styles.all} source={Images.burger} />
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
          <Image style={styles.all} source={Images.burger} />
        </View>
      </View>
    </View>
  );
};
export default Order;
