import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/authSlice';

const Login = ({ navigation }) => {
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('hashed_password_123');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const isLoading = authState.loading;

  const handleLogin = () => {
    dispatch(login({ email, password }))
      .unwrap()
      .then((response) => {
        setIsSuccessModalVisible(true);
      })
      .catch((error) => {
        Alert.alert('Login Error', error.message || 'Failed to login.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
      {authState.error && <Text style={styles.error}>{authState.error}</Text>}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSuccessModalVisible}
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>Login Successful!</Text>
            <Button
              title="Go to Dashboard"
              onPress={() => {
                setIsSuccessModalVisible(false);
                navigation.navigate('MainApp'); // Replace 'Dashboard' with your main app route
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 8,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Login;

