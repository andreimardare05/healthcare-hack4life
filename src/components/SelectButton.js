import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const SelectButton = ({ text='Standard', color='#00B7EB', onPress }) => {
    return (
        <View>
            <Button
                onPress={onPress}
                buttonStyle={{borderRadius: 100,
                    height: 52,
                    width: 300,
                    backgroundColor: color}} 
                title={text}
                containerStyle={{ marginTop: 10, width: 300, borderRadius: 100, alignSelf: "center" }}
                titleStyle={{
                    fontSize: 16,
                    lineHeight: 19
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonAVC: {
        borderRadius: 100,
        height: 52,
        width: 300,
        backgroundColor: '#00B7EB'
    }
});

export default SelectButton;