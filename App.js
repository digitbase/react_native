import { StatusBar } from "expo-status-bar";
//import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewStudy from "./components/ViewStudy";
import TextStudy from "./components/TextStudy";
import ButtonStudy from "./components/ButtonStudy";

import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <ViewStudy></ViewStudy>

                <ButtonStudy></ButtonStudy>
            </View>
        );
    }
}

export default App;
