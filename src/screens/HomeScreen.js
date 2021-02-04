import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View style={styles.body}>
    <Text>Hi there!</Text>
    <View style={{ paddingTop:8 }}>
      <Button 
        onPress={() => navigation.navigate("Component")}
        title="Go to component demo"/>
    </View>
    <View style={{ paddingTop:8 }}>
      <Button 
        onPress={() => navigation.navigate("List")}
        title="Go to list demo"/>
    </View>
    <View style={{ paddingTop:8 }}>
      <Button 
          onPress={() => navigation.navigate("Image")}
          title="Go to image demo"/>
    </View>
    <View style={{ paddingTop:8 }}>
      <Button 
          onPress={() => navigation.navigate("Counter")}
          title="Go to counter demo"/>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  body:{
    padding: 8
  },
});

export default HomeScreen;
