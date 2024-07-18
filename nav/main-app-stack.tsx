import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../views/home';
import {CameraScreen} from '../views/camera';

const Stack = createNativeStackNavigator();

export const MainAppStack = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Screen'}}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          // Update title to match the screen name
          title: 'Selfie Screen',
          headerShown: false, // Hide header if desired
        }}
      />
    </Stack.Navigator>
  );
};
