import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import Svg, { Path } from 'react-native-svg'
import SelectButton from '../components/SelectButton'
import { Input, Button } from 'react-native-elements'
import * as Speech from 'expo-speech'
import BadgeSuccess from '../components/BadgeSuccess';

class HomeScreen extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="dark-content"
                />
                <View style={{ marginTop: 96, width: 300 }}>
                    <Text style={styles.title}>
                        Ascultă următorul mesaj și răspunde la câteva întrebări:
                </Text>
                </View>
                <View style={{
                    width: 80, height: 80, borderRadius: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderColor: '#fff', shadowColor: '#000000',
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowRadius: 4,
                    shadowOpacity: 0.25
                }}>
                    <TouchableOpacity onPress={this.speak}>
                        <View style={{ width: 78, height: 78, borderRadius: 39, backgroundColor: '#FFF  ', justifyContent: 'center', alignItems: 'center' }}>
                            <Svg width="51" height="35" viewBox="0 0 51 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M48.5925 7.76451H35.9567L24.9108 0.933538C24.3683 0.598071 23.665 0.56256 23.0842 0.839849C22.5033 1.11865 22.1392 1.66492 22.1392 2.26105V32.6427C22.1392 33.2381 22.5033 33.7851 23.0842 34.0639C23.3442 34.1886 23.6283 34.2498 23.9125 34.2498C24.2625 34.2498 24.6117 34.1553 24.9117 33.9702L35.9575 27.14H48.5942C49.5733 27.14 50.3667 26.4207 50.3667 25.5329V9.37158C50.3658 8.48381 49.5725 7.76451 48.5925 7.76451ZM46.82 23.9266H35.4092C35.0533 23.9266 34.705 24.0233 34.41 24.2047L25.6842 29.6023V26.8415V5.30292L34.41 10.6991C34.705 10.8812 35.0525 10.9786 35.4092 10.9786H46.82V23.9266Z" fill="#C7C6C6" />
                                <Path d="M18.4195 27.2798C14.6987 25.1234 12.4762 21.4499 12.4762 17.4522C12.4762 13.4546 14.6978 9.78109 18.4187 7.62549C19.2437 7.14798 19.4853 6.15367 18.9578 5.40567C18.4312 4.65842 17.3353 4.43856 16.5095 4.91682C11.7645 7.66629 8.93115 12.3522 8.93115 17.4522C8.93115 22.553 11.7645 27.2405 16.5112 29.9892C16.8062 30.1607 17.137 30.2423 17.4637 30.2423C18.0487 30.2423 18.6212 29.9794 18.9595 29.5003C19.4862 28.7516 19.2453 27.7588 18.4195 27.2798Z" fill="#C7C6C6" />
                                <Path d="M9.57769 27.2798C5.85602 25.1234 3.63436 21.4499 3.63436 17.4522C3.63436 13.4546 5.85602 9.78034 9.57686 7.62549C10.4019 7.14723 10.6435 6.15367 10.116 5.40567C9.58936 4.65843 8.49269 4.44007 7.66769 4.91683C2.92269 7.66629 0.0893555 12.3522 0.0893555 17.453C0.0893555 22.5538 2.92269 27.2412 7.66852 29.9892C7.96352 30.1614 8.29436 30.243 8.62102 30.243C9.20602 30.243 9.77852 29.9801 10.1169 29.5011C10.6435 28.7516 10.4027 27.7588 9.57769 27.2798Z" fill="#C7C6C6" />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'spaee-between', height: 300 }}>
                    <Input
                        inputContainerStyle={{
                            width: 300, borderColor: '#9FA2A4', borderWidth: 1, borderRadius: 4, marginBottom: 15,
                            paddingLeft: 5, justifyContent: 'center'
                        }}
                        errorStyle={{ color: 'red' }}
                        labelStyle={styles.label}
                        label='1. Cum te numești?'
                    />
                    <Input
                        inputContainerStyle={{
                            width: 300, borderColor: '#9FA2A4', borderWidth: 1, borderRadius: 4, marginBottom: 15,
                            paddingLeft: 5, justifyContent: 'center'
                        }}
                        errorStyle={{ color: 'red' }}
                        labelStyle={styles.label}
                        label='2. În ce an te-ai născut?'
                    />
                    <SelectButton onPress={this.speak} text="Verifică" ></SelectButton>
                    <BadgeSuccess type="failure">

                    </BadgeSuccess>
                </View>
                <View>
                    <Text>Cronometru</Text>
                </View>
            </View>);
    }

    speak() {
        let thingToSay = 'Cum te numești?';
        Speech.VoiceQuality.Enhanced;
        Speech.speak(thingToSay, { language: 'ro-RO', rate: 0.95 });
        setTimeout(() => {
            thingToSay = 'În ce an, ești născut...';
            Speech.VoiceQuality.Enhanced;
            Speech.speak(thingToSay, { language: 'ro-RO', rate: 0.95, pinch: 1});
        },1500)
  
    }
}

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 20,
        lineHeight: 23,
        textAlign: 'center',
        color: '#9FA2A4'
    },
    label: {
        color: '#9FA2A4',
        fontWeight: 'normal',

    }
});