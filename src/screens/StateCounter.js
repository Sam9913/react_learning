import React, {useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";

const StateCounter = props => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setCounter = (color, change) => {
        if(color == "red"){
            setRed(red + change);
        }
        if(color == "green"){
            setRed(green + change);
        }
        else{
            setBlue(blue + change);
        }
    };

    return <View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={style.button}>
                <Button 
                    title="-"
                    onPress={() => setCounter("red" , -1)}
                />
            </View>
            <Text style={style.textStyle}>{red}</Text>
            <View style={style.button}>
                <Button 
                    title="+"
                    onPress={() => setCounter("red", 1)}
                />
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={style.button}>
                <Button 
                    title="-"
                    onPress={() => setCounter("green" , -1)}
                />
            </View>
            <Text style={style.textStyle}>{green}</Text>
            <View style={style.button}>
                <Button 
                    title="+"
                    onPress={() => setCounter("green", 1)}
                />
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={style.button}>
                <Button 
                    title="-"
                    onPress={() => setCounter("blue" , -1)}
                />
            </View>
            <Text style={style.textStyle}>{blue}</Text>
            <View style={style.button}>
                <Button 
                    title="+"
                    onPress={() => setCounter("blue", 1)}
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