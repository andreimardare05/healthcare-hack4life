import React,{useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Timer = props => {
    const [time,setTime] = useState(props.time);
    const getTimerCountDown = () => {
        if(time>0){
        setTimeout(() => {
            let c=time
          setTime(c-1);
        }, 1000);
    }
    };
    
    return (
        <View>
            {getTimerCountDown()}
            <Text style={styles.text}>Cronometru: {time} sec</Text>
            <View style={backStyle(time,props.time)}>
                <View style={barStyle(time,props.time)}></View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({

    text:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
        lineHeight: 28,
        textAlign: "center",
        color: "#9FA2A4",
        marginBottom:6,
    }
});
const barStyle = (time,max) => {
    let w=time*271/max;
    return {
        backgroundColor:"#E5E5E5",
        width : w,
        height: 13,
        zIndex:3,
    }
}

const backStyle = (time,max) => {
    let color;
    if(time>max/2) color='#62CC66';
    else color='#FF685A';
    return {
        width: 271,
        height: 13,
        borderRadius: 10,
        backgroundColor:color,
        alignSelf:"center",
    }
}


export default Timer;