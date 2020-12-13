import React, { Component } from "react";
import { View, Text, Alert, Button } from "react-native";

var alertMessage = "dddddddddddd";

export class AlertStudy extends Component {
    click01() {
        console.log("click");
        Alert.alert(
            "Alert2 Title",
            "My Alert Msg",
            [
                {
                    text: "Ask me later",
                    onPress: () => console.log("Ask me later pressed"),
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: false }
        );
    }

    click02 = () => {
        alert("jaindan");
    };

    click03 = () => {
        alert("jaindan");
    };

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.click01()}
                    title="最简单的"
                ></Button>

                <Button
                    onPress={() => Alert.alert("Alert Title", "sadfasdfa")}
                    title="复杂一点的"
                ></Button>
            </View>
        );
    }
}

export default AlertStudy;
