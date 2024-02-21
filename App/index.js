/**
 * @format
 */
import { createStackNavigator } from '@react-navigation/stack';
import { RNSScreen } from 'react-native-screens/native-stack';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
