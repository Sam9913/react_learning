import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

const ImageDetail = props => {
    return <View>
        <Image 
            source={props.imageSource}/>
        <Text>{props.title}</Text>
        <Text>Image score - {props.score}</Text>
    </View>
};

const style = StyleSheet.create({
    textStyle:{
        margin: 10,
    }
});

export default ImageDetail