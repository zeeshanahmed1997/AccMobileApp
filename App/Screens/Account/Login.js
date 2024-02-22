import * as React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import WaveBackground from './WaveBackground';
function Login() {
    const navigation = useNavigation();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'ProductStack', params: { screen: 'Products Landing Page' } }],
        });
    };


    const handleForgotPassword = () => {
        navigation.navigate('Products')
    };

    const handleSignUp = () => {
        navigation.navigate('Register');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.textBoxContainer}>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faUser} size={20} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={setUsername}
                        value={username}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faLock} size={20} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>
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
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black'
    },
    textBoxContainer: {
        width: '100%',
        padding: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 40
    },
    icon: {
        marginRight: 10,
        position: 'absolute',
        marginLeft: 10
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
