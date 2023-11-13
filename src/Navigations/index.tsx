import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

import { useAppSelector } from '../Helper/Hooks/reduxHooks';

const Navigations = () => {
  const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn);
  const user = useAppSelector(s => s.auth.user);
  console.log(JSON.stringify(user, null, 2));
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide({ fade: false });
      }}
      >
      {user == null ? (
        <AuthStack />
      ) : user?.role === 'customer' ? (
        <HomeStack />
      ): null}
    </NavigationContainer>
  );
};

export default Navigations;
