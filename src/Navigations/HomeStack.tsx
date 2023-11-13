import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { TScreen, THomeStack } from './types';
import BottomNavigation from './BottomNavigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import DetailScreen from '../Screens/Home/HomeScreen/DetailCategory';
import RestaurantDetails from '../Screens/Home/HomeScreen/RestaurantDetails';
import SearchScreen from '../Screens/Home/SearchScreen';
import SettingScreen from '../Screens/Home/SettingScreen';
import ItemsDetails from '../Screens/Home/HomeScreen/ItemDetails';
import TrendingScreen from '../Screens/Home/HomeScreen/ItemDetails/TopTabComps/Trending';
import LightDishScreen from '../Screens/Home/HomeScreen/ItemDetails/TopTabComps/LightDishes';
import CustomTabNavigator from '../Components/CustomTopNavBar';
import Checkoutorders from '../Screens/Home/HomeScreen/CheckoutOrders';
import OrderAddress from '../Screens/Home/HomeScreen/CheckoutOrders/Address';
import OrderLocation from '../Screens/Home/HomeScreen/CheckoutOrders/Location';
import CheckDetails from '../Screens/Home/HomeScreen/CheckoutOrders/CheckDetails';
import TrackOrder from '../Screens/Home/HomeScreen/CheckoutOrders/TrackOrder';
import FoodScreen from '../Screens/Home/SearchScreen/TopTabs/Food';
import YourOrder from '../Screens/Home/SettingScreen/YourOrder';
import Settings from '../Screens/Home/SettingScreen/Settings';
import Offers from '../Screens/Home/SettingScreen/Offers';
import Notification from '../Screens/Home/SettingScreen/Notification';
import Fdspay from '../Screens/Home/SettingScreen/FDSPay';
import GetHelp from '../Screens/Home/SettingScreen/GetHelp';
import Favourite from '../Screens/Home/SettingScreen/Favourite';
import AboutScreen from '../Screens/Home/SettingScreen/AboutScreen';

// import OnBoarding from 'src/Screens/AuthScreens/OnBoarding';
const Stack = createStackNavigator<THomeStack>();

const screens: TScreen<THomeStack>[] = [
  {
    key: 'BottomNavigation',
    name: 'BottomNavigation',
    component: BottomNavigation,
    
  },
  {
    key: 'HomeScreen',
    name: 'HomeScreen',
    component: HomeScreen,
    
  },
  {
    key: 'DetailScreen',
    name: 'DetailScreen',
    component: DetailScreen,
    
  },
  {
    key: 'RestaurantDetails',
    name: 'RestaurantDetails',
    component: RestaurantDetails,
    
  },
  {
    key: 'SearchScreen',
    name: 'SearchScreen',
    component: SearchScreen,
    
  },
  {
    key: 'SettingScreen',
    name: 'SettingScreen',
    component: SettingScreen,
    
  },
  {
    key: 'ItemsDetails',
    name: 'ItemsDetails',
    component: ItemsDetails,
    
  },
  {
    key: 'TrendingScreen',
    name: 'TrendingScreen',
    component: TrendingScreen,
    
  },
  {
    key: 'LightDishScreen',
    name: 'LightDishScreen',
    component: LightDishScreen,
    
  },
  {
    key: 'CustomTabNavigator',
    name: 'CustomTabNavigator',
    component: CustomTabNavigator,
    
  },
  {
    key: 'Checkoutorders',
    name: 'Checkoutorders',
    component: Checkoutorders,
    
  },
  {
    key: 'OrderLocation',
    name: 'OrderLocation',
    component: OrderLocation,
    
  },
  {
    key: 'OrderAddress',
    name: 'OrderAddress',
    component: OrderAddress,
    
  },
  {
    key: 'CheckDetails',
    name: 'CheckDetails',
    component: CheckDetails,
    
  },
  {
    key: 'TrackOrder',
    name: 'TrackOrder',
    component: TrackOrder,
    
  },
  {
    key: 'FoodScreen',
    name: 'FoodScreen',
    component: FoodScreen,
    
  },
  {
    key: 'YourOrder',
    name: 'YourOrder',
    component: YourOrder,
    
  },
  {
    key: 'Settings',
    name: 'Settings',
    component: Settings,
    
  },
  {
    key: 'Offers',
    name: 'Offers',
    component: Offers,
  },
  {
    key: 'Notification',
    name: 'Notification',
    component: Notification,
  },
  {
    key: 'Fdspay',
    name: 'Fdspay',
    component: Fdspay,
  },
  {
    key: 'GetHelp',
    name: 'GetHelp',
    component: GetHelp,
  },
  {
    key: 'Favourite',
    name: 'Favourite',
    component: Favourite,
  },
  {
    key: 'AboutScreen',
    name: 'AboutScreen',
    component: AboutScreen,
  },
  
  
];

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BottomNavigation">
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

export default HomeStack;
