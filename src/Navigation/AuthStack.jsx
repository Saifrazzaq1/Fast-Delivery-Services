import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Location from 'src/Screens/LocationScreen';
import CreateAccount from '../Screens/AuthScreens/CreateAccount';
import Login from '../Screens/AuthScreens/Login';
import Onboarding from '../Screens/AuthScreens/Onboarding';
import Signin from '../Screens/AuthScreens/Signin';
const Stack = createStackNavigator();

const screens = [
  {key: 'onboarding', name: 'Onboarding', component: Onboarding},
];

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Onboarding">
      {screens.map(s => (
        <Stack.Screen
          key={s.key}
          name={s.name}
          component={s.component}
          options={s?.options}
        />
      ))}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
};

export default AuthStack;
