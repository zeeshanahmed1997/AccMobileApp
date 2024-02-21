import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsLandingPage from '../Screens/Products/ProductsLandingPage';
import AuthStack from './AuthStack';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Drawer = createDrawerNavigator();

const MainStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Products">
            <Drawer.Screen
                name="Products"
                component={ProductsLandingPage}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'navy', // Set the header background color to silver
                        borderColor: 'gray',
                        borderBottomWidth: 2,
                    },
                    drawerActiveBackgroundColor: 'navy',
                    drawerInactiveBackgroundColor: 'white',
                    drawerLabel: 'Products',
                    drawerActiveTintColor: 'white',
                    drawerIcon: ({ focused, color, size }) => (
                        <FontAwesomeIcon icon={faShoppingCart} size={size} color={focused ? 'white' : 'black'} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Login Page"
                component={AuthStack}
                options={{
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
