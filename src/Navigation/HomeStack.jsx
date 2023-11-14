import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CheckOut from 'src/Screens/Home/CheckOut';
import CheckOutDetails from 'src/Screens/Home/CheckOutDetails';
import Details from 'src/Screens/Home/Details';
import ItemDetail from 'src/Components/ItemDetail';
import LocationFields from 'src/Screens/Home/LocationFields';
import OrderWaiting from 'src/Screens/Home/OrderWaiting';
import PayWith from 'src/Components/PayWith';
import SelectLocation from 'src/Screens/Home/SelectLocation';
import BottomNavigation from './BottomNavigation/BottomNavigation';
import About from 'src/Screens/Account/AccountScreens/About';
import Favorite from 'src/Screens/Account/AccountScreens/Favorite';
import Order from 'src/Screens/Account/AccountScreens/Order';
import Offers from 'src/Screens/Account/AccountScreens/Offers';
import Notification from 'src/Screens/Account/AccountScreens/Notification';
import FdsPay from 'src/Screens/Account/AccountScreens/FdsPay';
import Help from 'src/Screens/Account/AccountScreens/Help';
import Home from 'src/Screens/RiderSide/Home';
import RiderOrderDetails from 'src/Screens/RiderSide/RiderOrderDetails';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name={'BottomNavigation'} component={BottomNavigation} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="CheckOutDetails" component={CheckOutDetails} />
      <Stack.Screen name="LocationFields" component={LocationFields} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="PayWith" component={PayWith} />
      <Stack.Screen name="OrderWaiting" component={OrderWaiting} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Offers" component={Offers} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="FdsPay" component={FdsPay} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RiderOrderDetails" component={RiderOrderDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
