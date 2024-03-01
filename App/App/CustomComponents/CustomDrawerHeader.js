import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

const CustomDrawerHeader = () => {
    const user = useSelector(state => state.auth.user); // Get the user from Redux store

    return (
        <View style={styles.container}>
            <Text style={styles.username}>{user.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'navy',
    },
    username: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomDrawerHeader;
