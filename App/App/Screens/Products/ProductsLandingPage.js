import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductImagesData, selectProductImages, selectLoading, selectError } from '../../Redux/Slices/productSlice';
import { faNavicon, faShoppingCart, faUser, faSquarePlus, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addToCart } from '../../Redux/Slices/cartSlice';
const ProductsLandingPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProductImagesData());
    }, [dispatch]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ProductImagesList />
        </View>
    );
};

const ProductImagesList = () => {
    const productImages = useSelector(selectProductImages);
    const dispatch = useDispatch();
    const [itemCounts, setItemCounts] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const addToCartHandler = (productId) => {
        // debugger
        const count = itemCounts[productId] || 0;
        dispatch(addToCart({ productId, count }));
    };

    const updateItemCount = (productId, count) => {
        if (count <= 5) {
            setItemCounts(prevCounts => ({
                ...prevCounts,
                [productId]: count
            }));
            setErrorMessage('');
        } else {
            setErrorMessage('Cannot add more than 5 items');
        }
    };

    return (
        <FlatList
            data={productImages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: `data:${item.images.contentType};base64,${item.images.imageBytes}` }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.NameText}>{item.images.product.result.productName}</Text>
                            <Text style={styles.descriptionText}>{item.images.product.result.description}</Text>
                            <Text style={styles.priceText}>Rs. {item.images.product.result.price}</Text>
                            {/* <View style={styles.countContainer}>
                                <TouchableOpacity underlayColor="transparent" onPress={() => updateItemCount(item.images.productId, (itemCounts[item.images.productId] || 0) + 1)}>
                                    <FontAwesomeIcon icon={faSquarePlus} size={20} color="black" style={styles.countButton} />
                                </TouchableOpacity>
                                <Text style={styles.countText}>{itemCounts[item.images.productId] || 0}</Text>
                                <TouchableOpacity underlayColor="transparent" onPress={() => updateItemCount(item.images.productId, Math.max((itemCounts[item.images.productId] || 0) - 1, 0))}>
                                    <FontAwesomeIcon icon={faSquareMinus} size={20} color="black" style={styles.countButton} />
                                </TouchableOpacity>
                            </View> */}
                            <TouchableOpacity onPress={() => addToCartHandler(item.images.productId)}>
                                <View style={styles.addToCartButton}>
                                    <FontAwesomeIcon icon={faShoppingCart} size={18} color="white" style={styles.cartIcon} />
                                    <Text style={styles.addToCartText}>Add to Cart</Text>
                                </View>
                            </TouchableOpacity>

                            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
                        </View>
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        color: 'black',
    },
    itemContainer: {
        marginBottom: 16,
    },
    imageContainer: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'navy',
        borderRadius: 10
    },
    image: {
        width: 200,
        height: 200,
        marginRight: 8,
        marginBottom: 5,
        borderRadius: 10
    },
    textContainer: {
        flex: 1,
    },
    NameText: {
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    descriptionText: {
        color: 'black',
        fontSize: 12,
    },
    priceText: {
        color: 'green',
        fontWeight: 'bold',
        // borderRadius: 5,
        padding: 2,
        fontSize: 12,
        // textAlign: 'center',
        // borderColor: 'gray',
        // backgroundColor: 'gray',
        // borderWidth: 1,
        width: '40%'
    },
    addToCartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'green',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '70%',
        marginTop: 10,
    },
    cartIcon: {
        marginRight: 10,
    },
    addToCartText: {
        color: 'white',
        fontSize: 12,
    },

    countContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    countButton: {
        borderRadius: 2,
        marginHorizontal: 5,
    },
    countText: {
        fontSize: 16,
    },
    errorMessage: {
        color: 'red',
        fontSize: 12
    },
});

export default ProductsLandingPage;
