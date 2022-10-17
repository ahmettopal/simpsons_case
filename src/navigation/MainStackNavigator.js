/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routes from '../constants/routes';

import Home from '../screens/Home';
import PostDetail from '../screens/PostDetail';
import Share from '../screens/Share';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    const [initialRoute, setInitialRoute] = useState(routes.home);
    return (
        <Stack.Navigator
            initialRouteName={initialRoute}>
            <Stack.Screen name={routes.home} component={Home} />
            <Stack.Screen name={routes.detail} component={PostDetail} />
            <Stack.Screen name={routes.share} component={Share} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
