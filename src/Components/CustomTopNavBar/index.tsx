import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TrendingScreen from '../../Screens/Home/HomeScreen/ItemDetails/TopTabComps/Trending';
import LightDishScreen from '../../Screens/Home/HomeScreen/ItemDetails/TopTabComps/LightDishes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableOpacity, Image } from 'react-native';
import Assets from '../../Assets';
import StarterScreen from '../../Screens/Home/HomeScreen/ItemDetails/TopTabComps/Starters';
import SoupScreen from '../../Screens/Home/HomeScreen/ItemDetails/TopTabComps/Soup';

const Tab = createMaterialTopTabNavigator();
const CustomTabButton = ({ onPress }:any) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={Assets.Meenu} style={{ width: 30, height: 30 }} />
  </TouchableOpacity>
);
const CustomTabNavigator = ({ handlePress }:any) => {
  return (
    <Tab.Navigator
    initialRouteName='Trending'
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontWeight: '500', fontSize: 14 },
        tabBarItemStyle: { height: 40, width: 'auto' },
        tabBarActiveTintColor: '#1C7584',
        tabBarInactiveTintColor: '#B9BCBE',
        tabBarIndicatorStyle: {
          backgroundColor: '#1C7584', // Color of the indicator (the line under the active tab)
        },
      }}>
      
      <Tab.Screen
        name=" "
        component={TrendingScreen}
        listeners={{
          tabPress: () => {
            handlePress(); // Call the handlePress function when the tab is pressed
          }}}
          options={{
            tabBarIcon: ({ color }) => (
              <CustomTabButton onPress={handlePress} />
            )
          }}
      />
      <Tab.Screen name="Trending" component={TrendingScreen} />
      <Tab.Screen name="All day light Dishes" component={LightDishScreen} />
      <Tab.Screen name="Starter" component={StarterScreen} />
      <Tab.Screen name="Salad" component={TrendingScreen} />
      <Tab.Screen name="Soup" component={SoupScreen} />
     
    </Tab.Navigator>
  );
};

export default CustomTabNavigator;
