// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabNavigator from '../Navigation/TabNavigator';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* <TabNavigator/> */}
      <Text>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },
});

export default ProfileScreen;
