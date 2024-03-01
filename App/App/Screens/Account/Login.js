import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { loginUser } from '../../Redux/Slices/AuthSlice';
import SuccessPopup from '../../Components/Popups/SuccessPopup';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('zee@gmail.com');
    const [password, setPassword] = useState('Pakistan123');
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.loading);

    const handleLogin = async () => {
        try {
            await dispatch(loginUser({ email, password }));
            setIsSuccessModalVisible(true);
            setTimeout(() => {
                setIsSuccessModalVisible(false);
                navigation.navigate('Products', { screen: 'Products Landing Page' });
            }, 2000); // Close modal after 2 seconds and then navigate
        } catch (error) {
            // Handle login error
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.textBoxContainer}>
                <View style={styles.inputContainer}>
                    <FontAwesomeIcon icon={faUser} size={20} color="black" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
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
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton} disabled={isLoading}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Login</Text>
                )}
            </TouchableOpacity>

            <SuccessPopup
                isVisible={isSuccessModalVisible}
                message="Login Successful!"
                onClose={() => setIsSuccessModalVisible(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    textBoxContainer: {
        width: '100%',
        marginBottom: 20,
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
    },
    icon: {
        marginRight: 10,
    },
    loginButton: {
        backgroundColor: 'navy',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default Login;
