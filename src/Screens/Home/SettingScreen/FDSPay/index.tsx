import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import Header from '../../../../Components/CustomHeader';
import ToggleButton from '../../../../Components/CustomToggleBtn';
import { LOGOUT } from '../../../../Redux/Reducers/Auth/actions';
import Button from '../../../../Components/Button';
import Assets from '../../../../Assets';


const Fdspay = ({ navigation }: any) => {

  return (
    <View style={styles.cont}>
      <Header title={'Payment'} title1={''} isShowBackIcon={true} />
      <View style={{flex:1,justifyContent:'space-between', marginBottom:30}}>
      <View style={{ paddingVertical: 30, paddingHorizontal: 20, flexDirection:'row',  }}>
        <View style={styles.card}>
          <Image source={Assets.Cardlogo} style={styles.logo}  />
           <Image source={Assets.CardStar} style={styles.star} />
           <Image source={Assets.CardStar1} style={styles.star1}  />
           <Text style={styles.t1}>xxxx xxxx xxxx 4580</Text>
           <Text style={styles.t3}>Total Balance</Text>
           <Text style={styles.t2}>$ 360,896</Text>
        </View>
        <View style={styles.cardr}>
             <Image source={Assets.Chip} />
             <Text style={styles.t4}>12/22</Text>
          </View>
         
      </View>
      <Button title='Add Credit' TouchableStyle={styles.btn}/>
      </View>
    </View>

  );
};

{/* <Text style={{fontSize:30,color:'black' , top:-400,left:90 ,transform: [{ rotate: '-90deg'}]}}>12/22</Text> */ }

export default Fdspay;
