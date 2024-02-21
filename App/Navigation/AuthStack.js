import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Screens/Account/Login';
import Register from '../Screens/Account/Register';

const Tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <Tab.Navigator initialRouteName='Login' tabBar={() => null}>
            <Tab.Screen
                name="Login"
                component={Login}
            />
            <Tab.Screen
                name="Register"
                component={Register}
            />
        </Tab.Navigator>
    )
}

export default AuthStack;