import * as React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        navigation.navigate('Products', { screen: 'Products' }); // Navigate to the Login screen within the MainStack
    };

    const handleForgotPassword = () => {
        // Implement logic for handling forgot password
    };

    const handleSignUp = () => {
        navigation.navigate('Register');
    };

    return (

        <View style={styles.container}>
            <View style={styles.textBoxContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleLogin} style={styles.Loginbutton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
                <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 50, // Add paddingBottom to move the sign-up button above the bottom
    },
    input: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 1,
        borderRadius: 5,
    },
    textBoxContainer: {
        width: '100%',
        padding: 20
    },
    buttonsContainer: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    Loginbutton: {
        backgroundColor: 'navy',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    forgotPasswordButton: {
        position: 'absolute',
        right: 0,
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    signUpButton: {
        position: 'absolute',
        bottom: 20, // Adjust the bottom value to move the sign-up button higher or lower
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    forgotPasswordText: {
        color: 'navy',
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        paddingHorizontal: 20,
        marginBottom: 0
    },
    signUpText: {
        color: 'navy',
        fontSize: 14,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default Login;
