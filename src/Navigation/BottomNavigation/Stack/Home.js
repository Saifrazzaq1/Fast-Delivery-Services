import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from 'src/Screens/Home';
import FastFood from 'src/Screens/Home/FastFood';
import Setting from 'src/Screens/Account/AccountScreens/Setting';

const Stack = createStackNavigator();
const BottomHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FastFood" component={FastFood} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default BottomHomeStack;
