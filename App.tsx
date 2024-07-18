/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainAppStack} from './nav/main-app-stack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainAppStack />
    </NavigationContainer>
  );
}

export default App;
