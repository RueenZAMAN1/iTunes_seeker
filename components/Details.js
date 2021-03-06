import React from "react";
import { Image, StyleSheet, Text, View, Button, Linking } from "react-native";

const Result = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={{ uri: item.artwork }} />
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.details}>{item.artist}</Text>
                <Text style={styles.text}>Genre : {item.genre}</Text>
                <Text style={styles.text}>Price : {item.price} $</Text>
                <Button title='Listening preview'
                    color="black"
                    style={styles.button}
                    onPress={() => Linking.openURL(item.url)} />
                <Button style={styles.button} title="Favories" onPress={() => { onAdd(item); navigation.navigate('Music');}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", },
    image: { width: 200, height: 200 },
    info: { flex: 1, },
    title: { fontSize: 20 },
    details: { color: "gray" },
    text: { fontSize: 15 },
    header: {
        justifyContent: "center",
        padding: 20,
        flexDirection: "row"
    },
    button:{
        backgroundColor:"black"
    }
});

export default Result;
