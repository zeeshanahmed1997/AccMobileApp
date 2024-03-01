import { createStackNavigator } from '@react-navigation/stack';
import ProductsLandingPage from '../Screens/Products/ProductsLandingPage';
import ProductDetailScreen from '../Screens/Products/ProductDetailScreen';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { faNavicon, faShoppingCart, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AuthStack from './AuthStack';
import { logoutUser } from '../Redux/Slices/logoutSlice'; // Import the logout action
import { addToCart } from '../Redux/Slices/cartSlice';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const drawerHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'navy'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'navy',
    },
    iconButton: {
        marginHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5
    },
    badge: {
        position: 'absolute',
        top: 1,
        right: 1,
        backgroundColor: 'red',
        borderRadius: 10,
        minWidth: 16,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const drawerContentStyles = StyleSheet.create({
    container: {
        flex: 1,
        // marginLeft: 10
    },
    logoutText: {
        backgroundColor: 'navy',
        color: 'white',
        borderWidth: 2,
        padding: 5,
        textAlign: 'center',
        borderRadius: 5,
        borderColor: 'transparent',
        height: 30
    }
});

const ProductsStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
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


const SearchBarHeader = ({ navigation }) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    // debugger
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.iconButton}>
                <FontAwesomeIcon icon={faBars} size={20} color='white' />
            </TouchableOpacity>
            <TextInput
                placeholder="Search products"
                style={styles.searchInput}
            />
            <TouchableOpacity style={styles.iconButton}>
                <FontAwesomeIcon icon={faShoppingCart} size={20} color='white' />
            </TouchableOpacity>
            {cartCount > 0 && (
                <View style={styles.badge}>
                    <Text style={{ color: 'black', fontSize: 10 }}>{cartCount}</Text>
                </View>
            )}
        </View>
    );
};

const ProductsNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'navy',
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                },
                headerTitleStyle: {
                    display: 'none',
                },
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
            initialRouteName='Products Landing Page'
        >
            <Stack.Screen
                name="Products Landing Page"
                component={ProductsLandingPage}
                options={{
                    header: () => <SearchBarHeader navigation={navigation} />,
                }}
            />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={{
                    header: () => <SearchBarHeader navigation={navigation} />,
                }}
            />
        </Stack.Navigator>
    );
};


const CustomDrawerContent = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const firstName = user ? user.firstName : '';

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <DrawerContentScrollView>
            {firstName && (
                <View style={drawerHeaderStyles.container}>
                    <Image
                        source={require('../images/img.png')}
                        style={drawerHeaderStyles.image}
                        onError={(error) => console.log('Image loading error:', error)}
                    />
                    <View style={drawerContentStyles.container}>
                        <Text style={drawerHeaderStyles.text}>{firstName}</Text>
                    </View>
                    <TouchableOpacity onPress={logout}>
                        <Text style={drawerContentStyles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            )}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default ProductsStack;
