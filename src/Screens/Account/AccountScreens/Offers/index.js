import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Header from 'src/Components/Header';
import Images from '../../../../Assets';
import styles from './style';

const Offers = () => {
  return (
    <View style={styles.body}>
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
          style={styles.btn}>
          <Image style={styles.all} source={Images.offer1} />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
         style={styles.btn}>
          <Image style={styles.all} source={Images.offer2} />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
         style={styles.btn}>
          <Image style={styles.all} source={Images.offer3} />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
         style={styles.btn}>
          <Image style={styles.all} source={Images.offer1} />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
         style={styles.btn}>
          <Image style={styles.all} source={Images.offer2} />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
         style={styles.btn}>
          <Image style={styles.all} source={Images.offer3} />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
         style={styles.btn}>
          <Image style={styles.all} source={Images.offer1} />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
         style={styles.btn}>
          <Image style={styles.all} source={Images.offer2} />
          <View style={styles.view1}>
            <Text style={styles.oshatext}>Get 25% Off On ALl Orders</Text>
            <Text style={styles.emitext}>
              This offer is valid until 01/05/2023 {'\n'}Osha Emirati Gourmet
            </Text>
          </View>
        </View>
        <View
         style={styles.btn}>
          <Image style={styles.all} source={Images.offer3} />
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
