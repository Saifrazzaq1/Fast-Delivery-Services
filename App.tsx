/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  LogBox,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Redux/ConfigureStore';
import Snackbar from './src/Components/Snackbar';
import { SheetProvider } from 'react-native-actions-sheet';
import Navigations from './src/Navigations';

LogBox.ignoreAllLogs()
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={"dark-content"}/>
         <SheetProvider>
          <Navigations />
        </SheetProvider>
        <Snackbar />
 
    </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({

  Cont: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;
