import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CalendarScreen from '../Screens/CalendarScreen';
import AddScreen from '../Screens/AddScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';
import { StyleSheet } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCalendar, faPlusCircle, faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

// Map screen names to FontAwesome icons
const iconMap = {
  Home: faHome,
  Calendar: faCalendar,
  Add: faPlusCircle,
  Settings: faCog,
  Notifications: faBell,
};

const iconColorMap = {
  Home: '#007BFF',
  Calendar: '#28A745',
  Add: '#ffffff',
  Settings: '#FFC107',
  Notifications: '#DC3545',
};

const iconSizeMap = {
  Home: 25,
  Calendar: 25,
  Add: 50,
  Settings: 25,
  Notifications: 25,
};

function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: true,
        tabBarActiveBackgroundColor: 'gainsboro',
        tabBarStyle: {
          height: 60,
          paddingBottom: 0,
        },
        tabBarBadgeStyle: {
          backgroundColor: 'red',
          color: 'white',
          fontSize: 12,
          paddingHorizontal: 6,
          borderRadius: 10,
        },
        tabBarIcon: ({ color, size }) => {
          const icon = iconMap[route.name];
          const iconColor = iconColorMap[route.name] || color;
          const iconSize = iconSizeMap[route.name] || size;

          return route.name === 'Add' ? (
            <LinearGradient
              colors={['#003366', '#006699']}
              style={styles.addIconWrapper}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor} />
            </LinearGradient>
          ) : (
            <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor} />
          );
        },
        header: () => {
          const title = getHeaderTitle(route.name);
          return <CustomHeader navigation={navigation} title={title} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

function getHeaderTitle(routeName) {
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Calendar':
      return 'Calendar';
    case 'Add':
      return 'Add';
    case 'Settings':
      return 'Settings';
    case 'Notifications':
      return 'Notifications';
    default:
      return 'App';
  }
}

const styles = StyleSheet.create({
  addIconWrapper: {
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default TabNavigator;
