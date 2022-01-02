/**
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import Login from './src/login';
import Screen from './src/screen/Screen';
const Stack = createNativeStackNavigator()
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Screen" component={Screen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => App)
