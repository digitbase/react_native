import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export class InputStudy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
        };
    }

    _changeText(e) {
        this.setState({
            inputValue: e,
        });
    }
    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType="number-pad"
                    placeholder="请输入"
                    onChangeText={(e) => this._changeText(e)}
                ></TextInput>
                <Text>{this.state.inputValue}</Text>
            </View>
        );
    }
}

export default InputStudy;
// 样式
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textInputStyle: {
        // 设置尺寸
        width: 100,
        height: 40,
        marginTop: 100,
        // 设置背景颜色
        backgroundColor: "",
    },
});
