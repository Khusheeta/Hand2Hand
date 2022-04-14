import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const userLogin = async ()=>{
        // if(!email||!password) {
        //     Alert.alert("Please fill all the fields.")
        //    return
        // }
        // try{
        //   const result =  await auth().signInWithEmailAndPassword(email, password)
        //   console.log(result.user)
        // }catch(err){
        //      Alert.alert("Something went wrong please try different password.")
        // }
        
        const result =  await auth().signInWithEmailAndPassword(email, password)
        console.log(result.user)
 }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/loginBg.png')} style={styles.bg} >
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.box1}>
                        <Text style={styles.text}>Login to Continue!</Text>
                    </View>
                    <View>
                        <View style={styles.box2}>
                            <TextInput
                                label="Email"
                                value={email}
                                mode="outlined"

                                onChangeText={text => setEmail(text)}
                            />
                            <TextInput
                                label="Password"
                                value={password}
                                mode="outlined"
                                secureTextEntry={true}
                                onChangeText={text => setPassword(text)}
                            />
                            <Button mode="contained" onPress={() => userLogin()}>
                                Login
                            </Button>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('signup')}>
                                <Text style={{ textAlign: "center" }}>Don't have an account?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    box1: {
        paddingTop: 100,
        alignItems: "center"
    },
    box2: {
        paddingHorizontal: 40,
        // backgroundColor: "#0E720C",
        height: "70%",
        justifyContent: "space-evenly"
    },
    text: {
        fontSize: 22
    },
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: "center"
    }
});

export default LoginScreen