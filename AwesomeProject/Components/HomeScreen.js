import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';

function Home({ navigation }) {
  // Select the 'user' property from the 'auth' slice in the Redux store
  const user = useSelector((state) => state.auth);

  const handleLogout = () => {
    // Navigate back to the login screen upon logout
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {user.user ? user.user.email : 'Unknown'}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

export default Home;
