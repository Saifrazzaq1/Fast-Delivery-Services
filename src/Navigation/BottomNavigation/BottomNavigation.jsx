import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import images from '../../Assets';
import Account from '../../Screens/Account';
import Search from '../../Screens/Search';
import BottomHomeStack from './Stack/Home';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E0281C',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingBottom: 50,
          paddingTop: 40,
          height: 110,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
        },
      }}>
      <Tab.Screen
        name="BottomHomeStack"
        component={BottomHomeStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={images.home}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                tintColor: focused ? '#E0281C' : '#A0A0A0',
              }}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={images.search}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                tintColor: focused ? '#E0281C' : '#A0A0A0',
              }}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={images.account}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                tintColor: focused ? '#E0281C' : '#A0A0A0',
              }}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
