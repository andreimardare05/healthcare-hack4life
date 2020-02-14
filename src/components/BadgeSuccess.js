import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg'

const BadgeSuccess = ({ type = 'success', colorSuccess = '#62CC66', colorFailure = '#FF685A', doubleCircles = false }) => {
    const styles = StyleSheet.create({
        containerIcon: {
            height: 70,
            width: 70,
            borderRadius: 35,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        success: {
            borderColor: colorSuccess
        },
        failure: {
            borderColor: colorFailure
        }
    });
    if (type === 'success') {
        return (
            <View style={[styles.containerIcon, styles.success]}>
                <Svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M2 9.31543L8.13067 15.4461C8.89397 16.2094 10.1253 16.2293 10.9128 15.491L25.5 1.81543" stroke={colorSuccess} stroke-width="3" />
                </Svg>
            </View>);
    }
    else
        return (
            <View style={[styles.containerIcon, styles.failure]}>
                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M16.8749 0.952954C16.3874 0.465454 15.5999 0.465454 15.1124 0.952954L8.9999 7.05296L2.8874 0.940454C2.3999 0.452954 1.6124 0.452954 1.1249 0.940454C0.637402 1.42795 0.637402 2.21545 1.1249 2.70295L7.2374 8.81546L1.1249 14.928C0.637402 15.4155 0.637402 16.203 1.1249 16.6905C1.6124 17.178 2.3999 17.178 2.8874 16.6905L8.9999 10.578L15.1124 16.6905C15.5999 17.178 16.3874 17.178 16.8749 16.6905C17.3624 16.203 17.3624 15.4155 16.8749 14.928L10.7624 8.81546L16.8749 2.70295C17.3499 2.22795 17.3499 1.42795 16.8749 0.952954Z" fill={colorFailure} />
                </Svg>
            </View>
        );
};

export default BadgeSuccess;