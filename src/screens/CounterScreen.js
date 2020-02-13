import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ... state, counter: state.counter + action.payload };
        case 'decrement':
            return state.counter + action.payload >= 0 
                ? { ... state, counter: state.counter + action.payload }
                : state;
        default:
            return state; 
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;

    return (
        <View>
            <Button
                title="Increase"
                onPress={
                    () => dispatch({ type: 'increment', payload: 1 })
                }
            />
            <Button
                title="Decrease"
                onPress={
                    () => dispatch({ type: 'decrement', payload: -1 })
                }
            />
            <Text>
                Current counter: {counter}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

}); 

export default CounterScreen;