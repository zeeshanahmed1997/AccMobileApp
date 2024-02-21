import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsLandingPage from '../Screens/Products/ProductsLandingPage';
import AuthStack from './AuthStack';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ProductsStack from './ProductsStack';
const Drawer = createDrawerNavigator();

const MainStack = ({ navigation }) => {
    return (
        <Drawer.Navigator initialRouteName="Products">
            <Drawer.Screen
                name="Products"
                component={ProductsStack} // Use ProductsStack here
                options={{
                    headerStyle: {
                        backgroundColor: 'navy', // Change header background color to navy
                    },
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor: 'navy',
                    drawerInactiveBackgroundColor: 'white',
                    headerTintColor: 'white',
                    drawerLabel: 'Products',
                    drawerIcon: ({ focused, color, size }) => (
                        <FontAwesomeIcon icon={faShoppingCart} size={size} color={focused ? 'white' : 'black'} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Login Page"
                component={AuthStack}
                options={{
                    headerStyle: {
                        backgroundColor: 'navy', // Change header background color to navy
                    },
                    headerTitleAlign: 'center',
                    drawerActiveBackgroundColor: 'navy',
                    drawerInactiveBackgroundColor: 'white',
                    headerTintColor: 'white',
                    drawerLabel: 'Login Page',
                    drawerIcon: ({ focused, color, size }) => (
                        <FontAwesomeIcon icon={faUserCircle} size={size} color={focused ? 'white' : 'black'} />
                    ),
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
};

export default MainStack;
