import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    ClockAnimations,
    BoxAnimations,
    DotsLoader,
    HandLoader,
} from './app/index';
import { HomeScreen } from './app/screens';

export type RootStackParamList = {
    HomeScreen: undefined;
    HandLoaderScreen: undefined;
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
            <Stack.Screen
                name="HandLoaderScreen"
                options={{ title: 'Hand Loader Animation' }}
                component={HandLoader}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
