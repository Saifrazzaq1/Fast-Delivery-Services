import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from 'src/Components/Header';
import styles from './styles';
const AboutR = () => {
  return (
    <View style={{flex:1,backgroundColor: '#fff'}}>
      <Header
        backIcon
        loginTitle={'About'}
        loginbtn
        logintextcolor={'#1C7584'}
        loginmarginleft={'55%'}
        headerbgcolor={'#fff'}
        headerBg
        headerShadow
      />
      <View style={styles.btnsview}>
        <View
          style={styles.btn}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.username}>FAQ</Text>
          </View>
          <View>
            <FontAwesome5
              style={styles.arrowIcon}
              size={18}
              name="chevron-right"
              color="black"
            />
          </View>
        </View>
        <View
          style={styles.btn}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.username}>App Feedback</Text>
          </View>
          <View>
            <FontAwesome5
              style={styles.arrowIcon}
              size={18}
              name="chevron-right"
              color="black"
            />
          </View>
        </View>
        <View
          style={styles.btn}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.username}>Privacy Policy</Text>
          </View>
          <View>
            <FontAwesome5
              style={styles.arrowIcon}
              size={18}
              name="chevron-right"
              color="black"
            />
          </View>
        </View>
        <View
        style={styles.btn}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.username}>Terms of use</Text>
          </View>
          <View>
            <FontAwesome5
              style={styles.arrowIcon}
              size={18}
              name="chevron-right"
              color="black"
            />
          </View>
        </View>
        <View
         style={styles.btn}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.username}>FaceBook</Text>
          </View>
          <View>
            <FontAwesome5
              style={styles.arrowIcon}
              size={18}
              name="chevron-right"
              color="black"
            />
          </View>
        </View>
        <View
          style={styles.btn}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.username}>Twitter</Text>
          </View>
          <View>
            <FontAwesome5
              style={styles.arrowIcon}
              size={18}
              name="chevron-right"
              color="black"
            />
          </View>
        </View>
        <View
         style={styles.btn}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.username}>Instagram</Text>
          </View>
          <View>
            <FontAwesome5
              style={styles.arrowIcon}
              size={18}
              name="chevron-right"
              color="black"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutR;

