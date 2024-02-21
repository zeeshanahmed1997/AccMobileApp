import { createStackNavigator } from '@react-navigation/stack';
import ProductsLandingPage from '../Screens/Products/ProductsLandingPage';
import React from 'react';

const Stack = createStackNavigator();

// Define ProductsStack
const ProductsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Products Stack"
                component={ProductsLandingPage}
                options={{
                    headerShown: false,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'navy',
                        borderColor: 'gray',
                        borderBottomWidth: 2,
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default ProductsStack;
