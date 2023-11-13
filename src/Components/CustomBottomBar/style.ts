// CustomBottomTabBarStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute', // Position the container absolutely
    bottom: 0, // Place it at the bottom of the screen
    width: '100%', // Occupy the full width of the screen
    backgroundColor: 'white', // Set your preferred background color
    height: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60, // Adjust the horizontal padding as needed
    borderTopLeftRadius: 30, // Set your preferred border radius
    borderTopRightRadius: 30,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: 'white', // Set your preferred background color
    // paddingHorizontal: 60, // Adjust the horizontal padding as needed
    // borderTopLeftRadius: 30, // Set your preferred border radius
    // borderTopRightRadius: 30,
    // height: 68,
   
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  tabBarIcon: {
    width: 27,
    height: 27,
  },
  tabBarLabel: {
    color: 'gray', // Set the default text color
    fontSize: 12, // Set the default font size
  },
});

export default styles;
