import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import ViewStudy from "./ViewStudy";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default class ScrollStudy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myList: ["red", "green", "yellow", "blue", "skyblue"],
        };
    }

    render() {
        return (
            <ScrollView>
                {this.state.myList.map((item) => (
                    <View
                        key={item}
                        style={{
                            backgroundColor: item,
                            width: Dimensions.get("window").width / 2,
                            height: Dimensions.get("window").height / 4,
                        }}
                    >
                        <Text>{item}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    myview: {
        height: 20,
        fontSize: 40,
        lineHeight: 40,
        width: 12,
        backgroundColor: "red",
    },
});
