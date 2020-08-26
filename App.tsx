import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoxAnimations from './app/BoxAnimations';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={BoxAnimations} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
