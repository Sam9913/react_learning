import React from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
    const items =[
        {title: "Forest", image: require('../../assets/forest.jpg'), score:9},
        {title: "Beach", image: require('../../assets/beach.jpg'), score:5},
        {title: "Mountain", image: require('../../assets/mountain.jpg'), score: 6}
      ];

    return <View>
        <Text>This is image screen</Text>
        <FlatList 
            data={items}
            keyExtractor={(item) => item.title}
            renderItem={({item}) => {
                return <ImageDetail title={item.title} imageSource={item.image} score={item.score}/>;}}
            />
    </View>
};

const style = StyleSheet.create({
    textStyle:{
        margin: 10,
    }
});

export default ImageScreen