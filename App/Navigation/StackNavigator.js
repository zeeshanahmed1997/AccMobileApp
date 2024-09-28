import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'; // Import TabNavigator
import UserProfileScreen from '../Screens/ProfileScreen'; // Import UserProfileScreen

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Tabs" 
        component={TabNavigator} 
        options={{ headerShown: false }} // Hides the header for the TabNavigator
      />
      <Stack.Screen 
        name="UserProfile" 
        component={UserProfileScreen} 
        options={{ 
          headerShown: true, 
          headerStyle: {
            backgroundColor: '#003366', // Set your desired background color
          },
          headerTintColor: '#fff', // Optional: Set the color of the header text and icons
        }} 
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
