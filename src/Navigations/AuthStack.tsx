import React from 'react';
import { TAuthStack, TScreen } from './types';
import OnboardingScreen from '../Screens/AuthScreens/onBoardScreen';
import LocationShare from '../Screens/AuthScreens/LocationShare';
import LocationScreen from '../Screens/AuthScreens/LocationScreen';
import CreateAccount from '../Screens/AuthScreens/CreateAccount';
import EmailLogin from '../Screens/AuthScreens/EmailLogin/Index';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import DetailScreen from '../Screens/Home/HomeScreen/DetailCategory';
import RestaurantDetails from '../Screens/Home/HomeScreen/RestaurantDetails';



const Stack = createStackNavigator<TAuthStack>();

const screens: TScreen<TAuthStack>[] = [
  { key: 'OnBoardScreen', name: 'OnBoardScreen', component: OnboardingScreen },

  { key: 'LocationShare', name: 'LocationShare', component: LocationShare },
  { key: 'LocationScreen', name: 'LocationScreen', component: LocationScreen },
  { key: 'LoginScreen', name: 'LoginScreen', component: LoginScreen },
  { key: 'EmailLogin', name: 'EmailLogin', component: EmailLogin },
  { key: 'CreateAccount', name: 'CreateAccount', component: CreateAccount },
  // {
  //   key: 'BottomNavigation',
  //   name: 'BottomNavigation',
  //   component: BottomNavigation,
    
  // },
  // {
  //   key: 'DetailScreen',
  //   name: 'DetailScreen',
  //   component: DetailScreen,
    
  // },
  // {
  //   key: 'RestaurantDetails',
  //   name: 'RestaurantDetails',
  //   component: RestaurantDetails,
    
  // },


];

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false}}
      initialRouteName="OnBoardScreen" >
      {screens.map(s => (
        <Stack.Screen
          key={s.key}
          name={s.name}
          component={s.component}
          options={s?.options}
        />
      ))} 
    </Stack.Navigator>
  );
};

export default AuthStack;

