import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import React from 'react';

export type TAuthStack = {
  Login: undefined;
  LocationShare: undefined;
  OnBoardScreen: undefined;
  LocationScreen:undefined;
  LoginScreen:undefined;
  EmailLogin: undefined;
  CreateAccount: undefined;
  // BottomNavigation:undefined;
  // DetailScreen: undefined;
  // RestaurantDetails:undefined;
};

export type THomeStack = {
  BottomNavigation:undefined;
  HomeScreen: undefined;
  SearchScreen:undefined;
  SettingScreen:undefined;
  DetailScreen: undefined;
  RestaurantDetails:undefined;
  ItemsDetails:undefined;
  LightDishScreen:undefined;
  TrendingScreen:undefined;
  CustomTabNavigator:undefined;
  Checkoutorders:undefined;
  OrderAddress:undefined;
  OrderLocation:undefined;
  CheckDetails:undefined;
  TrackOrder:undefined;
  FoodScreen:undefined;
  YourOrder:undefined;
  Settings:undefined;
  Offers:undefined;
  Notification:undefined;
  Fdspay:undefined;
  GetHelp:undefined;
  Favourite:undefined;
  AboutScreen:undefined;
  // ScreenName: {
  //   propsToSend: string;
  // };
};


export type THomeScreen<T extends keyof THomeStack> = React.FC<
  StackScreenProps<THomeStack, T>
>;
export type TAuthScreen<T extends keyof TAuthStack> = React.FC<
  StackScreenProps<TAuthStack, T>
>;

declare type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: StackNavigationProp<ParamList>;
    }>
  | React.ComponentType<{}>;

export type TScreen<Stack extends ParamListBase> = {
  //* commonly used.
  key: React.Key;
  name: keyof Stack;
  component: ScreenComponentType<Stack, keyof Stack> | React.FC<any>;
  options?: StackNavigationOptions;

  
};
