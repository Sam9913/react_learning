import React from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import StateCounter from "./src/screens/StateCounter";
import ReducerCounter from "./src/screens/ReducerCounter";

const CounterScreen = props => {
    return <View >
        <View style={style.body}>
            <Text>Use State</Text>
            <StateCounter />
        </View>
        <View style={style.body}>
            <Text>Use Reducer</Text>
            <ReducerCounter />
        </View>
    </View>
};

const style = StyleSheet.create({
    body: {
        padding: 8
    }
});

export default CounterScreen