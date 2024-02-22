import * as React from 'react';
import { useEffect } from 'react';
import { Button, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import CustomHeader from '../../Components/CustomHeader';

function ProductDetailScreen() {
    const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <TouchableOpacity onPress={() => navigation.goBack()}>
    //                 <View style={{ marginLeft: 20 }}>
    //                     <FontAwesomeIcon icon={faArrowLeft} size={20} color='white' />
    //                 </View>
    //             </TouchableOpacity>
    //         ),
    //         headerRight: () => (
    //             <TouchableOpacity>
    //                 <View style={{ marginRight: 20 }}>
    //                     <FontAwesomeIcon icon={faShoppingCart} size={20} color='white' />
    //                 </View>
    //             </TouchableOpacity>
    //         ),
    //     });
    // }, [navigation]);

    const goToMainStack = () => {
        // navigation.navigate('Login Page', { screen: 'Login' });
        navigation.navigate('AuthStack');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <CustomHeader navigation={navigation} />
            <Button onPress={goToMainStack} title="This is product Detail Screen" />
        </View>
    );
}

export default ProductDetailScreen;
