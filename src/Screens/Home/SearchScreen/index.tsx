import React from 'react';
import { Text, View } from 'react-native';
// import styles from './style';
import Button from '../../../Components/Button';
import CustomTextField from '../../../Components/TextField';
import Header from '../../../Components/Header';
import Assets from '../../../Assets';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import TopTabNavigator from './TopTabs';
import { LOGOUT } from '../../../Redux/Reducers/Auth/actions';



const SearchScreen = ({ navigation }: any) => {
   
  
    return (
        <SafeAreaView  style={styles.cont}>
        <View style={{flex:1,paddingHorizontal:10}}>
        <CustomTextField placeholder='Search food, groceries and more' image={Assets.Search} inputStyle={styles.btn} />
        <View style={{ flex: 1 }}>
         <TopTabNavigator />
         </View>
         
        </View>
        
        </SafeAreaView>
    );
};



export default SearchScreen;
