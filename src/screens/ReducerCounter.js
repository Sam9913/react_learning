import React, {useReducer} from "react";
import {Text, View, StyleSheet, Button} from "react-native";

const reducer = (state, action) => {
    switch(action.colorToChange){
        case "red":
            return {...state, red: state.red + action.amount};
        case "green":
            return {...state, green: state.green + action.amount};
        case "blue":
            return {...state, blue: state.blue + action.amount};
        default:
            return {...state};
    }
}

const StateCounter = props => {
    const [state, discpatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return <View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={style.button}>
                <Button 
                    title="-"
                    onPress={() => dispatch({colorToChange: 'red', amount: -1})}
                />
            </View>
            <Text style={style.textStyle}>{red}</Text>
            <View style={style.button}>
                <Button 
                    title="+"
                    onPress={() => dispatch({colorToChange: 'red', amount: 1})}
                />
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={style.button}>
                <Button 
                    title="-"
                    onPress={() => dispatch({colorToChange: 'green', amount: -1})}
                />
            </View>
            <Text style={style.textStyle}>{green}</Text>
            <View style={style.button}>
                <Button 
                    title="+"
                    onPress={() => dispatch({colorToChange: 'green', amount: 1})}
                />
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={style.button}>
                <Button 
                    title="-"
                    onPress={() => dispatch({colorToChange: 'blue', amount: -1})}
                />
            </View>
            <Text style={style.textStyle}>{blue}</Text>
            <View style={style.button}>
                <Button 
                    title="+"
                    onPress={() => dispatch({colorToChange: 'blue', amount: 1})}
                />
            </View>
        </View>
    </View>
};

const style = StyleSheet.create({
    textStyle:{
        paddingTop: 16,
        textAlign: "center",
    },
    button: {
        padding: 8,
        height: 50,
        width: 50
    }
});

export default StateCounter