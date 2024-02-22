import { createStackNavigator } from '@react-navigation/stack';
import ProductsLandingPage from '../Screens/Products/ProductsLandingPage';
import ProductDetailScreen from '../Screens/Products/ProductDetailScreen';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import AuthStack from './AuthStack';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// Define ProductsStack
const ProductsStack = (navigation) => {
    return (
        <Drawer.Navigator

            screenOptions={{ // Hides header for all screens in Drawer
                headerShown: false,
            }}
        >
            <Drawer.Screen
                name='Products'
                component={ProductsNavigator}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <FontAwesomeIcon icon={faShoppingCart} size={size} color={focused ? 'white' : 'black'} />
                    ),
                    drawerActiveBackgroundColor: 'navy',
                    drawerInactiveBackgroundColor: 'white',
                    drawerActiveTintColor: 'white'
                }}
            />
            <Drawer.Screen
                name='Sign in'
                component={AuthStack}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faUser} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};
const ProductsNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'navy', // Sets the header color for all screens
            },
            headerTitleStyle: {
                color: '#fff', // Sets the header text color for all screens
            },
            cardStyle: {
                backgroundColor: 'lightgray', // Change this line
            }
            // Add other shared screen options here
        }}
            initialRouteName='Products Landing Page'
        >
            <Stack.Screen
                name="Products Landing Page"
                component={ProductsLandingPage}
                options={{
                    headerTitle: 'Products',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            {/* <Icon name="bars" size={20} color="#000" style={styles.icon} /> */}
                            <View style={{ marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faNavicon} size={20} color='white' />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => ( // Add headerRight for cart icon
                        <TouchableOpacity>
                            <View style={{ marginRight: 20 }}>
                                <FontAwesomeIcon icon={faShoppingCart} size={20} color='white' />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={{
                    headerTitle: 'Product Details',
                    // headerLeft: () => ( // Add headerLeft for back button
                    //     <TouchableOpacity onPress={() => navigation.navigate('Products')}>

                    //         <View style={{ marginLeft: 20 }}>
                    //             <FontAwesomeIcon icon={faArrowLeft} size={30} color='white' />
                    //         </View>
                    //     </TouchableOpacity>
                    // ),
                    // headerRight: () => ( // Add headerRight for cart icon
                    //     <TouchableOpacity>
                    //         <View style={{ marginRight: 20 }}>
                    //             <FontAwesomeIcon icon={faShoppingCart} size={30} color='white' />
                    //         </View>
                    //     </TouchableOpacity>
                    // ),
                    // ... other header options you want to customize
                }}
            />
        </Stack.Navigator>
    );
};
const styles = StyleSheet.create({

});

export default ProductsStack;
