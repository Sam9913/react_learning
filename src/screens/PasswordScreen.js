import React, {useState} from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";

export const PasswordScreen = () => {
    const [password, setPassword] = useState(" ");

    return <View style={{padding: 8}}>
        <Text>Enter Password:</Text>
        <TextInput 
            value={password}
            onChangeText={(text)=>setPassword(text)}
           style={{ borderColor: 'black', borderWidth: 1 }}
            />
        {password.length <= 5 ? <Text style={styles.warning}>Password must be longer than 5 characters</Text> : 
        <Text style={styles.hint}>You have entered: {password}</Text>}
    </View>
};


const styles = StyleSheet.create({
    warning:{
        color: "red"
    },
    hint:{
        color: "black"
    }
});