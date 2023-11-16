import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useAppSelector } from 'src/Helper/Hooks/reduxHooks';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Navigation = () => {
  const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn);
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide({fade: true});
      }}>
      {!isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
