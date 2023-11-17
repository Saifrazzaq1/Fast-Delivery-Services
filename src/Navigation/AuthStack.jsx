import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Location from 'src/Screens/LocationScreen';
import CreateAccount from '../Screens/AuthScreens/CreateAccount';
import Login from '../Screens/AuthScreens/Login';
import Onboarding from '../Screens/AuthScreens/Onboarding';
import Signin from '../Screens/AuthScreens/Signin';
import ChoiceScreen from 'src/Screens/AuthScreens/ChoiceScreen';
import RiderLogin from 'src/Screens/AuthScreens/RiderAuth/Login';
import RiderSignin from 'src/Screens/AuthScreens/RiderAuth/EmailLogin';
import RiderCreateAccount from 'src/Screens/AuthScreens/RiderAuth/CreateRiderAcc';
import VehicleDetails from 'src/Screens/AuthScreens/RiderAuth/CreateRiderAcc/VehicleDetails';
import RiderRigistered from 'src/Screens/AuthScreens/RiderAuth/CreateRiderAcc/Rigistered';
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
import RiderOrderDetails from 'src/Screens/RiderSide/RiderOrderDetails';
import Home from 'src/Screens/RiderSide/Home';
import MapScreen from 'src/Screens/RiderSide/MapScreen';
import OrderDelivered from 'src/Screens/RiderSide/OrderDelivered';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="ChoiceScreen" component={ChoiceScreen} /> 
      <Stack.Screen name="RiderLogin" component={RiderLogin} /> 
      <Stack.Screen name="RiderSignin" component={RiderSignin} /> 
      <Stack.Screen name="RiderCreateAccount" component={RiderCreateAccount} />
      {/* <Stack.Screen name="VehicleDetails" component={VehicleDetails} /> */}
      <Stack.Screen name="RiderRigistered" component={RiderRigistered} />
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="RiderOrderDetails" component={RiderOrderDetails} />
      <Stack.Screen name="OrderDelivered" component={OrderDelivered} />
    </Stack.Navigator>
  );
};

export default AuthStack;
