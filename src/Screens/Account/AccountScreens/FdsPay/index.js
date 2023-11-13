import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Header from 'src/Components/Header';
import Images from '../../../../Assets';
import {heightRef} from 'src/config/screenSize';
import Button from 'src/Components/Button';

const FdsPay = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header
        backIcon
        loginTitle={'Payment'}
        loginbtn
        logintextcolor={'#1C7584'}
        loginmarginleft={'50%'}
        headerbgcolor={'#fff'}
        headerBg
        headerShadow
      />
      <View style={styles.btnsview}>
        <Image style={styles.btnsimg} source={Images.cardc} />
        <Button
          btnheight={55}
          btnColor="#1C7584"
          buttonStyle={{
            marginTop: 420,
            justifyContent: 'center',
          }}
          unseen={2}
          title={'Add Credit'}
          textColor={'#fff'}
        />
      </View>
    </View>
  );
};

export default FdsPay;

const styles = StyleSheet.create({
  btnsview: {
    marginHorizontal: 20,
    flex: 1,
    paddingVertical: 10,
  },
  btnsimg: {
    height: 190 * heightRef,
    width: '100%',
    alignSelf: 'center',
  },
});
