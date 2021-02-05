import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View style={styles.body}>
    <Text>Hi there!</Text>
    <View style={{ paddingTop:8 }}>
      <Button 
        onPress={() => navigation.navigate("Component")}
        title="Component demo"/>
    </View>
    <View style={{ paddingTop:8 }}>
      <Button 
        onPress={() => navigation.navigate("List")}
        title="List demo"/>
    </View>
    <View style={{ paddingTop:8 }}>
      <Button 
          onPress={() => navigation.navigate("Image")}
          title="Image demo"/>
    </View>
    <View style={{ paddingTop:8 }}>
      <Button 
          onPress={() => navigation.navigate("Counter")}
          title="Counter demo"/>
    </View>
    <View style={{ paddingTop:8 }}>
      <Button 
          onPress={() => navigation.navigate("Password")}
          title="Password demo"/>
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
