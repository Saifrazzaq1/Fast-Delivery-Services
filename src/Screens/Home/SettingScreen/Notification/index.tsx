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

const data = [
  {
    id: 1,
    title: 'Congratulations ',
    subtitle: 'Your account has been created successfully!',
    time: '1h',
    imageSource: Assets.notif,
  },
  {
    id: 2,
    title: 'Congratulations ',
    subtitle: 'Your account has been created successfully!',
    time: '1h',
    imageSource: Assets.notif,
  },
  {
    id: 3,
    title: 'Congratulations ',
    subtitle: 'Your account has been created successfully!',
    time: '1h',
    imageSource: Assets.notif,
  },
  {
    id: 4,
    title: 'Congratulations ',
    subtitle: 'Your account has been created successfully!',
    time: '1h',
    imageSource: Assets.notif,
  },
];

const Notification = ({ navigation }: any) => {

  return (
    <View style={styles.cont}>
      <Header title={'Notification'} title1={''} isShowBackIcon={true} />
      <View style={{  paddingVertical: 10, marginBottom: 80 }}>
        <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <View style={{}}>
                        <View style={{ flexDirection: 'row', justifyContent:'space-evenly',paddingVertical:15 }}>
                            <Image source={item.imageSource} style={styles.img} />
                            <View style={{ }}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.t1}>{item.subtitle}</Text>
                            </View>
                            <Text style={styles.t1}>{item.time}</Text>
                        </View>
                        <View style={styles.divider} />
                      </View>
                    )}
                />
              
      </View>
    </View>

  );
};

{/* <Text style={{fontSize:30,color:'black' , top:-400,left:90 ,transform: [{ rotate: '-90deg'}]}}>12/22</Text> */}

export default Notification;
