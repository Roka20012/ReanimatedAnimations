import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BoxAnimations, ClockAnimations, DotsLoader } from './app/index';
import { HomeScreen } from './app/screens';

export type RootStackParamList = {
    HomeScreen: undefined;
    DotsLoaderScreen: undefined;
    BoxAnimationScreen: undefined;
    ClockAnimationScreen: undefined;
};

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                options={{ title: 'Home' }}
                component={HomeScreen}
            />
            <Stack.Screen
                name="BoxAnimationScreen"
                options={{ title: 'Box Animation' }}
                component={BoxAnimations}
            />
            <Stack.Screen
                name="ClockAnimationScreen"
                options={{ title: 'Clock Animation' }}
                component={ClockAnimations}
            />
            <Stack.Screen
                name="DotsLoaderScreen"
                options={{ title: 'Dots Loader Animation' }}
                component={DotsLoader}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
