import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Account/Login';
import Register from '../Screens/Account/Register';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerTitleAlign: 'center', // Center the header title
                headerStyle: {
                    backgroundColor: 'navy',
                },
                headerTintColor: 'white',
                headerShown: false,
            }
            }
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false, // hide header for Login screen
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false, // hide header for Register screen
                }}
            />
        </Stack.Navigator >
    );
}

export default AuthStack;
