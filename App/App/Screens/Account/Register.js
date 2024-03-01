import * as React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

function Register() {
    const navigation = useNavigation(); // Access the navigation object using useNavigation hook

    const goToMainStack = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'ProductStack' }],
        });
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={goToMainStack}
                title="Go to MainStack"
            />
        </View>
    );
}

export default Register;
