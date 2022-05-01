import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'


const LoginSignup = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/loginBg.png')} style={styles.bg} >
                <KeyboardAvoidingView behavior="position">
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.text}>Hand-2-Hand</Text>
                    </View>
                    <View>

                        <View style={styles.box2}>
                            <Button
                                style={{ height: 40, width: "95%", borderColor: '#326E62', borderWidth: 2, borderRadius: 20, marginBottom: 20, fontSize: 18, }}
                                mode="contained" onPress={() => navigation.navigate('login')}>
                                Login
                            </Button>
                            <Button
                                style={{ height: 40, width: "95%", borderColor: '#326E62', borderWidth: 2, borderRadius: 20, marginBottom: 20, fontSize: 18, }}
                                mode="contained" onPress={() => navigation.navigate('signup')}>
                                Sign Up
                            </Button>
                           
                            <TouchableOpacity onPress={() => navigation.navigate('home')}><Text>SKIP</Text></TouchableOpacity>
                       </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({
    box2: {
        paddingHorizontal: 20,
        height: "50%",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    text: {
        marginTop: 250,
        marginBottom: 100,
        fontSize: 40,
        color: "#326E62",
        //fontFamily: 'Raleway'
    },
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: "center"
    }
});

export default LoginSignup