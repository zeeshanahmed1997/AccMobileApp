import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const windowWidth = Dimensions.get('window').width;

const ProductItem = ({ item }) => {
    const [imageBase64, setImageBase64] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [productResult, setProductResult] = useState(null); // State to hold product result object
    const navigation = useNavigation(); // Initialize navigation

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(`http://localhost:7241/api/productImageData/${item.productId}`);
                const imageData = await response.json();
                setImageBase64(imageData.imageBytes);
                setProductResult(imageData.product.result); // Set full product result object
            } catch (e) {
                console.error('Error loading image:', e);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImage();
    }, [item.productId]);

    const handleProductPress = () => {
        // Navigate to ProductDetailScreen with the selected product and imageBase64
        // debugger
        navigation.navigate('ProductDetailScreen', { product: productResult, imageBase64: imageBase64 });
    };

    return (
        <TouchableOpacity onPress={handleProductPress}>
            <View style={styles.product}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : error ? (
                    <Text>Image failed to load.</Text>
                ) : (
                    <>
                        <View style={{ flexDirection: 'column', width: '100%' }}>
                            <Image
                                source={{ uri: `data:image/png;base64,${imageBase64}` }}
                                style={styles.image}
                                onError={(e) => {
                                    console.log('Image load error:', e);
                                    setError(true);
                                }}
                            />
                            <TouchableOpacity style={styles.addToCartButton}>
                                <Text style={styles.addToCartButtonText}>Add to cart</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.productInfo}>
                            <Text style={styles.title}>{item.productId}</Text>
                            {productResult && (
                                <>
                                    <Text>Description: {productResult.description}</Text>
                                    <Text>Price: {productResult.price}</Text>
                                </>
                            )}
                        </View>
                    </>
                )}
            </View>
        </TouchableOpacity>
    );
};

const ProductsDisplay = ({ products }) => {
    const renderItem = ({ item }) => <ProductItem item={item} />;

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.productId}
            numColumns={2}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingBottom: 10, // Add paddingBottom for bottom spacing
    },
    product: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 0,
        paddingHorizontal: 0,
        marginHorizontal: 5, // Add marginHorizontal for spacing between items
        marginVertical: 5,
        marginBottom: 10,
        width: (windowWidth - 30) / 2, // Adjusted width to take half of the screen width minus padding
    },
    image: {
        aspectRatio: 6 / 10,
    },
    addToCartButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10,
    },
    addToCartButtonText: {
        color: 'white', // Change text color to red
    },
    productInfo: {
        flex: 1,
        width: '100%', // Adjusted to take full width
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    title: {
        fontSize: 16, // Adjusted for better visibility
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default ProductsDisplay;
