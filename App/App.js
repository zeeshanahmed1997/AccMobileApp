import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStack from './Navigation/AuthStack';
import MainStack from './Navigation/MainStack';

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
