import { StatusBar } from "expo-status-bar";
//import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ViewStudy from "./components/ViewStudy";
import TextStudy from "./components/TextStudy";
import ButtonStudy from "./components/ButtonStudy";
import ImageStudy from "./components/ImageStudy";
import InputStudy from "./components/InputStudy";

import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>222</Text>
                <ImageStudy></ImageStudy>
                <InputStudy></InputStudy>
                <ButtonStudy></ButtonStudy>
            </View>
        );
    }
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
