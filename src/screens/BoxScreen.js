import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                Box Screen
            </Text>
        </View>
    );  
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-start'
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red'
    }
});

export default BoxScreen;