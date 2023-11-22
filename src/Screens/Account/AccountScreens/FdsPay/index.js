import React from 'react';
import {Image, View} from 'react-native';
import Button from 'src/Components/Button';
import Header from 'src/Components/Header';
import Images from '../../../../Assets';
import styles from './style';
const FdsPay = () => {
  return (
    <View style={styles.body}>
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
