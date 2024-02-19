import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import RootNavigator from './Navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
