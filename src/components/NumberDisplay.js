import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const getNumber = (actual,correct) => {
        if(actual.toString()===correct) {
            return (
                <Text style={styles.numberGreen} >{actual}</Text>
            )
        }
        else {
            return(
                <Text style={styles.numberRed}>{actual}</Text>
            )
        }
    
}
const NumberDisplay =props => {
   
    return (
        <View style={styles.container}>
           {[...Array(props.actual.length).keys()].map(i => getNumber(props.actual[i],props.correct[i]))}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberGreen:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 36,
        lineHeight: 41,
        textAlign: "center",
        color:"#62CC66",
        borderBottomWidth:3,
        borderBottomColor:"#9FA2A4",
        marginLeft:4,
        marginRight:4,
    },
    numberRed:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 36,
        lineHeight: 41,
        textAlign: "center",
        color:"#FF685A",
        borderBottomWidth:3,
        borderBottomColor:"#9FA2A4",
        marginLeft:4,
        marginRight:4,
    }
    
});

export default NumberDisplay;