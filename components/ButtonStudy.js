import React, { Component } from "react";

import { StyleSheet, View, Text, Button } from "react-native";

class ButtonStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    countBtnPress() {
        this.setState({
            count: ++this.state.count,
        });
    }
    render() {
        return (
            <View>
                <Text>{this.state.count}</Text>
                <Button
                    onPress={(e) => this.countBtnPress()}
                    title="click"
                ></Button>
            </View>
        );
    }
}

export default ButtonStudy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
