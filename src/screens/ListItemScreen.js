import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore'
import React,{useState, useEffect} from 'react'
const ListItemScreen = () => {

    const [items, setItems] = useState([])

    const myitems = [
        {
            name: "iPhone",
            year: "2013",
            phone: "12345678",
            image: "insert image here",
            desc: "I am selling this iPhone"
        },
        {
            name: "camera",
            year: "2014",
            phone: "1234567890",
            image: "insert image here",
            desc: "I am selling this camera"
        },
        {
            name: "charge",
            year: "2014",
            phone: "123456",
            image: "insert image here",
            desc: "I am selling this charger"
        }
    ]
    const getdetails = async ()=>{
        const querySnap = await firestore().collection('ads').get()
        const result = querySnap.docs.map(docSnap=>docSnap.data())
        console.log(result)
        setItems(result)
    }
    useEffect(()=>{
     getdetails()
     return()=>{
         console.log("Cleanup")
     }

     const openDial = (phone)=>{
        if(Platform.OS ==='android'){
          Linking.openURL(`tel:${phone}`)
        }else{
          Linking.openURL(`telprompt:${phone}`)
        }
    }
    },[]) 

    const renderItem = (item) => {
        return (
            <Card style={styles.card}>
                <Card.Title title={item.name} />
                <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                    <Paragraph>{item.year}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <Button>{item.price}</Button>
                    <Button>call seller</Button>
                </Card.Actions>
            </Card>
        )
    }

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.phone}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        elevation: 2
    }
});

export default ListItemScreen