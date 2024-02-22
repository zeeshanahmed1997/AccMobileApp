import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsLandingPage from '../Screens/Products/ProductsLandingPage';
import AuthStack from './AuthStack';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ProductsStack from './ProductsStack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
const RootStack = createStackNavigator();

const MainStack = ({ navigation }) => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={'ProductStack'} screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="AuthStack" component={AuthStack} />
                <RootStack.Screen name="ProductStack" component={ProductsStack} options={{ gestureEnabled: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
