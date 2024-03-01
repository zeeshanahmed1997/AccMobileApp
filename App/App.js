import React from 'react';
import { Provider } from 'react-redux';
import store from './App/Redux/store'; // Update the path to your Redux store setup

import { NavigationContainer } from '@react-navigation/native';
import MainStack from './App/Navigation/MainStack';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
