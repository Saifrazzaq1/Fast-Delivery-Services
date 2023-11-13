import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, TouchableOpacity } from 'react-native';
import Assets from '../../../../Assets';
import FoodScreen from './Food';


const Tab = createMaterialTopTabNavigator();
const CustomTabButton = ({ onPress }:any) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={Assets.Meenu} style={{ width: 30, height: 30 }} />
  </TouchableOpacity>
);
const TopTabNavigator = ({ handlePress }:any) => {
  return (
    <Tab.Navigator
    initialRouteName='Trending'
      screenOptions={{
        // tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontWeight: '500', fontSize: 14 },
        tabBarItemStyle: { height: 40, width: 'auto' },
        tabBarActiveTintColor: '#1C7584',
        tabBarInactiveTintColor: '#B9BCBE',
        tabBarIndicatorStyle: {
          backgroundColor: '#1C7584', // Color of the indicator (the line under the active tab)
        },
      }}>
      
      {/* <Tab.Screen
        name=" "
        component={FoodScreen}
        listeners={{
          tabPress: () => {
            handlePress(); // Call the handlePress function when the tab is pressed
          }}}
          options={{
            tabBarIcon: ({ color }) => (
              <CustomTabButton onPress={handlePress} />
            )
          }}
      /> */}
      <Tab.Screen name="Food" component={FoodScreen} />
      {/* <Tab.Screen name="Groceries" component={FoodScreen} />
      <Tab.Screen name="Health & wellness" component={FoodScreen} />
      <Tab.Screen name="Flower" component={FoodScreen} />
      <Tab.Screen name="Pharmacy" component={FoodScreen} /> */}
     
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
