import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from 'src/Components/Header';
import Images from '../../../../Assets';
const About = () => {
  return (
    <View style={{backgroundColor: '#fff'}}>
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 80,
          }}>
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
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

export default About;

const styles = StyleSheet.create({
  arrowIcon: {
    textAlign: 'center',
  },
  btnsview: {
    marginHorizontal: 20,
  },
  username: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  useraddress: {
    color: 'grey',
    fontSize: 14,
    marginLeft: 3,
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
});
