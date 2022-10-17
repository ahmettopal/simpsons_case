import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackNavigator from './MainStackNavigator';
import routes from '../constants/routes';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={routes.Main} component={MainStackNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
