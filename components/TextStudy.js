import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

class TextStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Text>
                <Text>Text</Text>
                <Text></Text>
            </Text>
        );
    }
}

export default TextStudy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    font: {
        fontSize: 20,
        color: "red",
    },
    c1: {
        padding: 20,
        margin: 20,
        color: "red",
        height: 80,
    },
    c2: {},
});
