import React from 'react';
import { StyleSheet } from 'react-native';
import StackNavigator from '../App/Navigation/StackNavigator'; // Ensure the path is correct
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Set the background color to red
  },
});

export default App;
