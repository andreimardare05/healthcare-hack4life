import React,{ useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import NumberDisplay from '../components/NumberDisplay';
import Timer from '../components/Timer'

const getRandom = () => {
    return Math.floor(Math.random() * (100000 - 9999) + 9999);
}
const addNumber = (num) =>{

}

const TypeScreen = () => {
    const [number,setNumber] = useState(getRandom())
    const [inserted,setInserted] = useState([])
    const v =[1,2,3,4,5,6,7,8,9,0]
	return (
		<View style={styles.c}>
			<Text style={styles.text}> Tasteaza urmatorul numar:</Text>
            <Text style={styles.numbers}>{number}</Text>
            <NumberDisplay actual={inserted?inserted:[]} correct={number.toString()} />
            <View style={styles.container}>
                {v.map(i => (
                <TouchableOpacity style={styles.button} title={i.toString()} onPress={() => {let g =inserted.slice();  g.push(i); setInserted(g)}} key={i}>
                    <Text style={styles.buttonText}>{i}</Text>
                </TouchableOpacity>))}
            </View>
            <Timer time="23" />
		</View>
	);
};

const styles = StyleSheet.create({
    c:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
    },
    text:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
        lineHeight: 28,
        textAlign: "center",
        color: "#9FA2A4",
        marginBottom:6,
    },
    numbers:{
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 28,
        textAlign: "center",
        color: "black",
    },
    container: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        flexWrap:"wrap",
        padding:40,
    },
    button:{
        width: 78,
        height: 77,
        borderColor:"#C4C4C4",
        borderWidth:2,
        borderRadius:100,
        display:"flex",
        textAlign: "center",
        marginTop:9,
        marginBottom:9,
        justifyContent:"center",
    },  
    buttonText:{
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 36,
        lineHeight: 41,
        textAlign: "center",
        color: "#000000",
    }
});

export default TypeScreen;