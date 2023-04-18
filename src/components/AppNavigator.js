// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Props from './Props';
import State from './State';
import Home from './Home';
import TextInputs from './TextInputs';
import Scroll from './Scroll';
import FlatListing from './FlatListing';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Props" component={Props} />
        <Stack.Screen name="State" component={State} />
        <Stack.Screen name="TextInputs" component={TextInputs} />
        <Stack.Screen name="Scroll" component={Scroll} />
        <Stack.Screen name="Flatlisting" component={FlatListing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;