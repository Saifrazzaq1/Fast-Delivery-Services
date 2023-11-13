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

const buttonTitles = [
  'FAQ',
  'App Feedback',
  'Privacy policy',
  'Terms of use',
  '',
  'Facebook',
  'Twitter',
  'Instagram'
];
const AboutScreen = ({ navigation }: any) => {

  return (
    <View style={styles.cont}>
      <Header title={'About'} title1={''} isShowBackIcon={true} />
      <View style={{ paddingHorizontal: 20, paddingVertical: 25, }}>

        <FlatList
          data={buttonTitles}
          keyExtractor={(item) => item}
          renderItem={({ item , index}) => (
            <Button
              title={item}
              TouchableStyle={styles.btn}
              iconVisible={true}
              iconColor={index === 4 ? 'white' : 'black'}
              customBackgroundColor={'white'}
              textColor={'black'}
            />
          )}
        />
      </View>
    </View>

  );
};

{/* <Text style={{fontSize:30,color:'black' , top:-400,left:90 ,transform: [{ rotate: '-90deg'}]}}>12/22</Text> */ }

export default AboutScreen;
