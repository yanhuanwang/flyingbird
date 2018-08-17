/**
 * @author Bird
 * @repo https://gitlab.com/flyingbird/flyingbird.1.0
 */
'use strict';

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, TextInput, Image, Text } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from '../util'

const inputHeight = px2dp(45)

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style={styles.formArea}>
                <View style={[styles.flexContainer]}>
                    <View style={{ width: 58, height: 64, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="ios-contact-outline" size={px2dp(40)} color="#666" />
                    </View>
                    <View style={{ height: 64, backgroundColor: '#FFFFFF', justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#343F4B' }}>未登录用户</Text>
                        <Text style={{ fontSize: 14, color: '#343F4B' }}>ID:</Text>
                    </View>
                </View>
                <View style={[styles.flexContainer, { marginTop: 20, borderBottomColor: '#BDBEC0', borderBottomWidth: 1 }]}>
                    <View style={styles.formImage}>
                        <Icon name="ios-phone-portrait-outline" size={px2dp(22)} color="#666" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="输入电话号码"
                            placeholderTextColor="#BDBEC0"
                            underlineColorAndroid='transparent'
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="numeric"
                            autoCorrect={false} 
                            onChangeText={(text) => this.setState({text})} />
                    </View>
                </View>
                <View style={styles.flexContainer}>
                    <View style={styles.formImage}>
                        <Icon name="ios-key-outline" size={px2dp(22)} color="#666" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="输入密码"
                            placeholderTextColor="#BDBEC0"
                            underlineColorAndroid='transparent'
                            secureTextEntry={true} 
                            onChangeText={(text) => this.setState({text})} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formArea: {
        backgroundColor: 'lightgrey',
        borderStyle: 'solid',
        borderWidth: 1,
        borderTopColor: '#BDBEC0',
        borderLeftColor: '#FFFFFF',
        borderRightColor: '#FFFFFF',
        borderBottomColor: '#BDBEC0'
    },
    flexContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    formImage: {
        width: 50,
        height: inputHeight,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formInput: {
        flex: 1,
        height: inputHeight,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    input: {
        height: inputHeight,
        color: 'black',
        paddingHorizontal: 5,
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LoginForm);