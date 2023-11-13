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


const GetHelp = ({ navigation }: any) => {

  return (
    <View style={styles.cont}>
      <Header title={'Get Help'} title1={''} isShowBackIcon={true} />
      <View style={{ flex:1,paddingHorizontal: 20, paddingVertical: 25 ,}}>
        <Text style={styles.t1}>You need a FDS account so we      can help </Text>
        <Text style={styles.t2}>Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s
        
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500sLorem Ipsum
          standard dummy text ever since the 1500s

          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500sLorem Ipsum
          standard dummy text ever since the 1500s</Text>
          <Button title='Login' TouchableStyle={styles.btn} />
      </View>
    </View>

  );
};

{/* <Text style={{fontSize:30,color:'black' , top:-400,left:90 ,transform: [{ rotate: '-90deg'}]}}>12/22</Text> */ }

export default GetHelp;
