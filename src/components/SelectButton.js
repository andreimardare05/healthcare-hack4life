import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SelectButton = ({text, onPress}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.button}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        color: 'red'
    }
});

export default SelectButton;