import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchProducts } from '../../Redux/Product/productSlice';
import ProductsDisplay from './ProductsDisplay';

const ProductsScreen = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // debugger
    // Directly select the products from the state without filtering by category.
    const products = useSelector((state) => state.products.items);
    // debugger
    const productsStatus = useSelector((state) => state.products.status);
    // debugger
    const error = useSelector((state) => state.products.error);

    if (productsStatus === 'loading') {
        return <Text>Loading...</Text>;
    } else if (productsStatus === 'failed') {
        return <Text>Error: {error}</Text>;
    }

    // We no longer need to pass a selected category to the ProductsDisplay component.
    return (
        <View>
            {/* Removed Filters as we don't filter by category anymore. If Filters is for other purposes, you can leave it. */}
            <ProductsDisplay products={products} />
        </View>
    );
};

export default ProductsScreen;
