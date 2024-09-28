import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator'; // Import your TabNavigator
import ProfileScreen from '../Screens/ProfileScreen'; // Adjust the path as needed
import CustomDrawerContent from '../Components/CustomDrawerContent'; // Import your custom drawer content
import CustomHeader from '../Components/CustomHeader'; // Import your custom header component
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons

const Drawer = createDrawerNavigator();

function AppNavigator() {
  const handleUserImagePress = () => {
    // Handle user image press action here
    console.log('User image clicked!');
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ route, navigation }) => ({
          drawerStyle: {
            backgroundColor: '#003366', // Dark navy background for drawer
          },
          drawerActiveTintColor: 'white', // Color for active item
          drawerInactiveTintColor: 'gray', // Color for inactive items
          headerStyle: {
            backgroundColor: '#003366', // Dark indigo for header
          },
          headerTintColor: 'navy',
          headerStatusBarHeight: 35,
          header: () => {
            // Determine the header title based on the current route
            const title = getHeaderTitle(route.name);
            return (
              <CustomHeader 
                navigation={navigation}
                title={title}
                onUserImagePress={handleUserImagePress} // Pass the function here
              />
            );
          },
        })}
      >
        <Drawer.Screen
          name="Go to Home"
          component={TabNavigator} // Use TabNavigator here
          options={{
            headerShown: false, // Hide the header for TabNavigator; it's handled within TabNavigator itself
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} /> // Color will be applied based on active/inactive status
            ),
            drawerItemStyle: { 
              backgroundColor: '#004080', // Navy blue background for the 'Go to Home' drawer item
              borderRadius: 5, // Rounded corners for the item
              margin: 5, // Margin between items
            },
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} /> // Color will be applied based on active/inactive status
            ),
            drawerItemStyle: { 
              borderRadius: 5, // Rounded corners for the item
              margin: 5, // Margin between items
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Function to get header title based on route name
function getHeaderTitle(routeName) {
  switch (routeName) {
    case 'Go to Home':
      return 'Home'; // You might want to customize this or get the title from TabNavigator
    case 'Profile':
      return 'Profile';
    default:
      return 'App';
  }
}

export default AppNavigator;
