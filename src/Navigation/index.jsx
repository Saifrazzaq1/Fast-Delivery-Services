import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useAppSelector } from 'src/Helper/Hooks/reduxHooks';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import RiderStack from './RiderNavigation/RiderStack';
// import RiderHomeStack from './RiderHomeStack';

const Navigation = () => {
  const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn);
  const user = useAppSelector(s => s.auth.user);
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide({fade: true});
      }}>
      {/* {isLoggedIn ? <HomeStack /> : <AuthStack />} */}
      {/* {!RiderLogged ? <RiderHomeStack /> : <AuthStack />} */}
      {user == null ? (
        <AuthStack />
      ) : user?.role === 'user' ? (
        <HomeStack />
      ) : (
        <RiderStack />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
