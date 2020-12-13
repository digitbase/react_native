import React, { Component } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";

export class ActiveStudy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
        };
    }

    btnPress() {
        this.setState({
            isShow: this.state.isShow ? false : true,
        });
    }

    render() {
        return (
            <View>
                <Text>{this.state.isShow ? "fff" : "bbb"} </Text>
                <Button title="click" onPress={(e) => this.btnPress()}></Button>
                <ActivityIndicator
                    color="red"
                    size="large"
                    animating={this.state.isShow}
                ></ActivityIndicator>
            </View>
        );
    }
}

export default ActiveStudy;
