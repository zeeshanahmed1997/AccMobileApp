// AppNavigator.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/HomeScreen';
import ProductsScreen from '../Components/Products/ProductsScreen';
import ProductDetailScreen from '../Components/Products/ProductDetailScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={styles.drawerContentScrollView}>
            <DrawerItemList
                {...props}
                itemStyle={styles.drawerItemList}
            />
        </DrawerContentScrollView>
    );
}

const ProductsNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#007bff', // Sets the header color for all screens
            },
            headerTitleStyle: {
                color: '#fff', // Sets the header text color for all screens
            },
            cardStyle: {
                backgroundColor: 'lightgray', // Change this line
            }
            // Add other shared screen options here
        }}
        >
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    headerTitle: 'Products',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            {/* <Icon name="bars" size={20} color="#000" style={styles.icon} /> */}
                            <View style={{ marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faNavicon} size={30} color='white' />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => ( // Add headerRight for cart icon
                        <TouchableOpacity>
                            <View style={{ marginRight: 20 }}>
                                <FontAwesomeIcon icon={faShoppingCart} size={30} color='white' />
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
const AppNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{ // Hides header for all screens in Drawer
                ...styles.screenOptions,
                headerShown: false // Add this line
            }}
        >
            <Drawer.Screen
                name='Products'
                component={ProductsNavigator}
                options={{
                    drawerIcon: ({ color, size }) => (
                        // <Icon name="shopping-cart" size={size} color={color} />
                        <View>
                            <FontAwesomeIcon icon={faNavicon} />
                        </View>
                    ),
                    drawerItemStyle: styles.drawerItemStyle,
                }}
            />
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    drawerItemStyle: styles.drawerItemStyle,
                }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawerContentScrollView: {
        backgroundColor: 'silver',
    },
    drawerItemList: {
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderBottomColor: 'red',
    },
    screenOptions: {
        headerStyle: {
            backgroundColor: 'silver',
        },
        headerTitleStyle: {
            color: 'black',
        },
        headerTintColor: 'navy',
    },
    drawerItemStyle: {
        backgroundColor: 'transparent',
    },
});

export default AppNavigator;
