import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AllResturant from 'src/Components/AllResturant';
import Header from 'src/Components/Header';

const Favorite = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        backIcon
        loginTitle={'Favorite'}
        loginbtn
        logintextcolor={'#1C7584'}
        loginmarginleft={'50%'}
        headerbgcolor={'#fff'}
        headerBg
        headerShadow
      />
      <View style={styles.btnsview}>
        <AllResturant />
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  btnsview: {
    marginTop: 10,
  },
});
