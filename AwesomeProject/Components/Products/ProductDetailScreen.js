// ProductDetailScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomHeader } from '../CustomHeader';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
const ProductDetailScreen = ({ route }) => {
    const { product, imageBase64 } = route.params;
    // debugger
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            // headerShown: true, // Show the header for this screen
            headerLeft: () => ( // Add headerLeft for back button
                <TouchableOpacity onPress={() => navigation.navigate('Products')}>
                    <View style={{ marginLeft: 20 }}>
                        <FontAwesomeIcon icon={faArrowLeft} size={30} color='white' />
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
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                <Image
                    source={{ uri: `data:image/png;base64,${imageBase64}` }}
                    style={styles.image}
                />
                <View style={styles.productInfo}>
                    <Text style={styles.title}>{product.productName}</Text>
                    {/* <Text style={styles.title}>{product.productId}</Text> */}
                    <Text>Description: {product.description}  To make the "Add to Cart" button update the cart count based on the selected quantity, you'll need to use JavaScript/jQuery to handle this functionality. Here's an updated version of your HTML file with JavaScript to achieve this:</Text>
                    <Text>Price: {product.price}</Text>
                    {/* Add more product details as needed */}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        marginLeft: 10,
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
    productContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 400,
        marginBottom: 20,
        borderRadius: 5,
    },
    productInfo: {
        alignItems: 'center',
        margin: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ProductDetailScreen;
