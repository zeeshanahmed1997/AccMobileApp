import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CustomHeader = ({ navigation }) => {
    useEffect(() => {
        if (navigation) { // Check if navigation is defined
            navigation.setOptions({
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ marginLeft: 20 }}>
                            <FontAwesomeIcon icon={faArrowLeft} size={20} color='white' />
                        </View>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <View style={{ marginRight: 20 }}>
                            <FontAwesomeIcon icon={faShoppingCart} size={20} color='white' />
                        </View>
                    </TouchableOpacity>
                ),
            });
        }
    }, [navigation]);

    return null; // Since this component only sets navigation options, it doesn't render any UI
};

export default CustomHeader;
