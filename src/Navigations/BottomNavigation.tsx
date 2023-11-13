import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/Home/HomeScreen';
import SearchScreen from '../Screens/Home/SearchScreen';
import CustomBottomTabBar from '../Components/CustomBottomBar';
import SettingScreen from '../Screens/Home/SettingScreen';
import Assets from '../Assets';

const Tab = createBottomTabNavigator();

const tabItems = [
  {
    name: 'HomeScreen',
    icon: Assets.Menu,
    imageStyle: { width: 27, height: 27, }, // Example custom style
  },
  {
    name: 'SearchScreen',
    icon: Assets.search,
    imageStyle: { width: 30, height: 30, }, // Example custom style
  },
  {
    name: 'SettingScreen',
    icon: Assets.Profile,
    imageStyle: { width: 45, height: 45, }, // Example custom style
  },
];

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} tabItems={tabItems} />}
      screenOptions={{ headerShown: false }} // Disable header for the entire stack
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
