import React from 'react';
import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import Images from '../../../../Assets';
import Header from 'src/Components/Header';

const Offers = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header
        backIcon
        loginTitle={'Offers'}
        loginbtn
        loginmarginleft={'50%'}
        logintextcolor={'#1C7584'}
        headerbgcolor={'#fff'}
        headerBg
        headerShadow
      />
      <ScrollView style={styles.btnsview}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer1}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer2}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer3}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer1}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer2}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer3}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer1}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer2}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            style={{
              height: 90,
              width: 120,
              marginRight: 10,
              borderRadius: 10,
            }}
            source={Images.offer3}
          />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Offers;

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
  oshatext: {color: 'black', fontSize: 14, fontWeight: '500'},
  emitext: {
    color: '#A0A0A0',
    fontSize: 12,
    width: 230,
    lineHeight: 20,
  },
});
