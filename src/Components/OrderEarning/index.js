import {Image, StyleSheet, Text, View} from 'react-native';
import Images from '../../Assets';
import React from 'react';

const OrderEarning = () => {
  return (
    <View style={{margin: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            padding: 20,
            width: '48%',
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
          }}>
          <Image
            style={{
              height: 23,
              width: 23,
              tintColor: '#2F74FA',
              marginBottom: 10,
            }}
            source={Images.donut}
          />
          <Text style={styles.amountText}>98</Text>
          <Text>Total Order</Text>
        </View>
        <View
          style={{
            padding: 20,
            width: '48%',
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
          }}>
          <Image
            style={{
              height: 23,
              width: 23,
              tintColor: '#EACA21',
              marginBottom: 10,
            }}
            source={Images.Dollar}
          />
          <Text style={styles.amountText}>$1920.92</Text>
          <Text>Total Earning</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderEarning;

const styles = StyleSheet.create({
  amountText: {fontWeight: 'bold', color: 'black', fontSize: 18},
});
