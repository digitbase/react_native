import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

let pic = {
    uri: "https://static.expo.dev/static/images/expo-client-iphone.png",
};

export class ImageStudy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgs01: [require("../images/1.jpg"), require("../images/2.jpg")],
        };
    }
    1;
    render() {
        return (
            <View>
                <Image source={pic} style={styles.rimage} />
                {this.state.imgs01.map((img) => (
                    <Image source={img} style={styles.rimage}></Image>
                ))}
                <Text>dd</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default ImageStudy;

const styles = StyleSheet.create({
    rimage: {
        width: 200,
        height: 100,
    },
});
