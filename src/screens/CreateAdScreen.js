import { View, Text, StyleSheet,  Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button} from 'react-native-paper'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

const CreateAdScreen = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [year, setYear] = useState('')
    const [price, setPrice] = useState('')
    const [phone, setPhone] = useState('')

    const postData = async () =>{
        try{
                 await firestore().collection('ads')
            .add({
                 name,
                 desc,
                 year,
                 price,
                 phone,
                 image: "https://unsplash.com/photos/CXYPfveiuis",
                 uid:auth().currentUser.uid
           })
             Alert.alert("posted you Ad!")
        }catch(err){
             Alert.alert("Something went wrong. Try again later.")
        }
      
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Ad!</Text>
            <TextInput
                label="Ad Title"
                value={name}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Description"
                value={desc}
                mode="outlined"
                numberOfLines={3}
                multiline={true}
                onChangeText={text => setDesc(text)}
            />
            <TextInput
                label="Year of Purchase"
                value={year}
                mode="outlined"
                keyboardType="numeric"
                onChangeText={text => setYear(text)}
            />
            <TextInput
                label="Price in INR"
                value={price}
                mode="outlined"
                keyboardType="numeric"
                onChangeText={text => setPrice(text)}
            />
            <TextInput
                label="Contact Number:"
                value={phone}
                mode="outlined"
                keyboardType="numeric"
                onChangeText={text => setPhone(text)}
            />
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Upload Image
            </Button>
            <Button mode="contained" onPress={() => postData() }>
                Post
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: "space-evenly"
    },
    text: {
        fontSize: 22,
        textAlign: "center"
    }
});


export default CreateAdScreen