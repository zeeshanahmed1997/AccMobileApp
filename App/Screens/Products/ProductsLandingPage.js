import * as React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
function ProductsLandingPage() {
    const navigation = useNavigation(); // Access the navigation object using useNavigation hook

    const goToMainStack = () => {
        navigation.navigate('Login Page', { screen: 'Login' }); // Navigate to the Login screen within the MainStack
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={goToMainStack}
                title="This is products page"
            />
        </View>
    );
}

export default ProductsLandingPage;
