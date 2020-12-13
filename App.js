import { StatusBar } from "expo-status-bar";
//import React from "react";
import {
    Alert,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
} from "react-native";
// import ViewStudy from "./components/ViewStudy";
// import TextStudy from "./components/TextStudy";
// import ButtonStudy from "./components/ButtonStudy";
// import ImageStudy from "./components/ImageStudy";
// import InputStudy from "./components/InputStudy";
import AlertStudy from "./components/AlertStudy";
import ScrollStudy from "./components/ScrollStudy";

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
                {/* <TextStudy></TextStudy> */}
                <AlertStudy></AlertStudy>
                <ScrollStudy />
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
