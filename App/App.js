import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './Navigation/AuthStack';
import MainStack from './Navigation/MainStack';
import BackgroundColor from 'react-native-background-color';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
