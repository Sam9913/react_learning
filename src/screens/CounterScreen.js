import React from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import StateCounter from "./StateCounter";
import ReducerCounter from "./ReducerCounter";

const CounterScreen = props => {
    return <View>
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
        padding: 8,
        margin: 10
    }
});

export default CounterScreen