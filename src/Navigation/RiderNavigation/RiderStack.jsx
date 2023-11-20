import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from 'src/Screens/RiderSide/Home';
import MapScreen from 'src/Screens/RiderSide/MapScreen';
import RiderOrderDetails from 'src/Screens/RiderSide/RiderOrderDetails'
import OrderDelivered from 'src/Screens/RiderSide/OrderDelivered'
import Profile from 'src/Screens/RiderSide/Profile';
import RiderSetting from 'src/Screens/RiderSide/Profile/RiderSetting';
import RNotification from 'src/Screens/RiderSide/Profile/RNotification';
import EditProfile from 'src/Screens/RiderSide/Profile/EditProfile';
import History from 'src/Screens/RiderSide/Profile/History';
import HistoryFDetail from 'src/Screens/RiderSide/Profile/History/HistoryDetail';
import AboutR from 'src/Screens/RiderSide/Profile/About';
import HelpR from 'src/Screens/RiderSide/Profile/Help';
import AccountRider from 'src/Screens/RiderSide/Profile/Account';
import ChooseAccount from 'src/Screens/RiderSide/Profile/Account/ChooseAccount';
import AddCard from 'src/Screens/RiderSide/Profile/Account/AddCard';
import Transaction from 'src/Screens/RiderSide/Profile/Account/Transections';

const Stack = createStackNavigator();

const RiderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="RiderOrderDetails" component={RiderOrderDetails} />
      <Stack.Screen name="OrderDelivered" component={OrderDelivered} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="RiderSetting" component={RiderSetting} />
      <Stack.Screen name="RNotification" component={RNotification} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="HistoryD" component={HistoryFDetail} />
      <Stack.Screen name="AboutR" component={AboutR} />
      <Stack.Screen name="HelpR" component={HelpR} />
      <Stack.Screen name="AccountR" component={AccountRider} />
      <Stack.Screen name="ChooseAccount" component={ChooseAccount} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Transaction" component={Transaction} />
    </Stack.Navigator>
  );
};

export default RiderStack;
