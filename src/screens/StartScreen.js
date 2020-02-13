import React from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
// import { Svg, Path } from 'react-native-svg'

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="black"
                barStyle="dark-content"
            />
            <ScrollView>
                <Text style={styles.formLabel}> Configurează-ți profilul </Text>
                <Input
                    containerStyle={{ width: 'none', padding: 1 }}
                    inputContainerStyle={styles.inputContainer}
                    errorStyle={{ color: 'red' }}
                    labelStyle={styles.label}
                    label='Nume'
                />
                <Input
                    containerStyle={{ width: 'none' }}
                    inputContainerStyle={styles.inputContainer}
                    errorStyle={{ color: 'red' }}
                    label='Prenume'
                    labelStyle={styles.label}
                />
                <Input
                    containerStyle={{ width: 'none' }}
                    inputContainerStyle={styles.inputContainer}
                    errorStyle={{ color: 'red' }}
                    labelStyle={styles.label}
                    label='Data nastere'
                />
                <Input
                    containerStyle={{ width: 'none' }}
                    inputContainerStyle={styles.inputContainer}
                    errorStyle={{ color: 'red' }}
                    labelStyle={styles.label}
                    label='Telefon'
                />
                <Input
                    containerStyle={{ width: 'none' }}
                    inputContainerStyle={styles.inputContainer}
                    errorStyle={{ color: 'red' }}
                    labelStyle={styles.label}
                    label='Nume contact de urgenta'
                />
                <Input
                    containerStyle={{ width: 'none' }}
                    inputContainerStyle={styles.inputContainer}
                    errorStyle={{ color: 'red' }}
                    labelStyle={styles.label}
                    label='Nume telefon contact de urgenta'
                />
                {/* <View style={styles.containerPhoto}>
                    <Text style={styles.labelPhoto}> Fa-ti o fotografie </Text>
                    <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M32.5832 26.9167C32.5832 27.6681 32.2847 28.3888 31.7533 28.9201C31.222 29.4515 30.5013 29.75 29.7498 29.75H4.24984C3.49839 29.75 2.77772 29.4515 2.24637 28.9201C1.71501 28.3888 1.4165 27.6681 1.4165 26.9167V11.3333C1.4165 10.5819 1.71501 9.86122 2.24637 9.32986C2.77772 8.79851 3.49839 8.5 4.24984 8.5H9.9165L12.7498 4.25H21.2498L24.0832 8.5H29.7498C30.5013 8.5 31.222 8.79851 31.7533 9.32986C32.2847 9.86122 32.5832 10.5819 32.5832 11.3333V26.9167Z" stroke="#9FA2A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <Path d="M17.0002 24.0833C20.1298 24.0833 22.6668 21.5463 22.6668 18.4167C22.6668 15.2871 20.1298 12.75 17.0002 12.75C13.8705 12.75 11.3335 15.2871 11.3335 18.4167C11.3335 21.5463 13.8705 24.0833 17.0002 24.0833Z" stroke="#9FA2A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>
                </View> */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: 300, borderColor: '#B7B7B7', borderWidth: 1, borderRadius: 4, marginBottom: 15,
        paddingLeft: 5,
    },
    formLabel: {
        color: 'black',
        marginBottom: 55,
        // fontFamily: "Roboto-Regular",
        fontSize: 28,
        lineHeight: 33,
        color: '#777777',
        textAlign: 'center',
        marginTop: 60,
        // fontWeight: 'bold'
    },
    containerPhoto: {
        padding: 7
    },
    label: {
        color: '#C7C6C6',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 3,
    },
    labelPhoto: {
        color: '#C7C6C6',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 7
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC',
    },
    formText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize: 20,
    }
});

export default StartScreen;