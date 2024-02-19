import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./AppNavigator";
import AuthNavigator from './AuthNavigator';

const RootStack = createStackNavigator();
const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={'AuthStack'} screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="AuthStack" component={AuthNavigator} />
                <RootStack.Screen name="MainApp" component={AppNavigator} options={{ gestureEnabled: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigator;