import * as React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

function Login() {
    const navigation = useNavigation(); // Access the navigation object using useNavigation hook

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Register')}
                title="This is Login Page"
            />
        </View>
    );
}

export default Login;
