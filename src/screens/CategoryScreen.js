import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const CategoryScreen = (route) => {
    setInterval(() => {
        route.navigation.state.params.nextStep()
    }, 1000);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{route.navigation.state.params.pas}</Text>
            <Text style={styles.text}>{route.navigation.state.params.title}</Text>
            <View style={styles.circle}>
                <Image style={{width: 80, height: 80}} source={route.navigation.state.params.image} />
            </View>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#00B7EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize:28,
        lineHeight:33,
        color: 'white',
        textAlign:"center",
        
    },
    circle: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderColor:"white",
        borderWidth:1,
        borderStyle: "solid",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:12
        
    }, 
    image:{
        zIndex:2,
    }
});

export default CategoryScreen;