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
import RiderRigistered from 'src/Screens/AuthScreens/RiderAuth/CreateRiderAcc/Rigistered';

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
      <Stack.Screen name="Rigistered" component={RiderRigistered} />
    </Stack.Navigator>
  );
};

export default AuthStack;
