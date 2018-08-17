import React, { Component } from 'react'
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ScrollView
} from 'react-native'
import Button from '../component/Button'
import NavBar from '../component/NavBar'
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from '../util'

let { width, height } = Dimensions.get('window')

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            phone: "",
            passwd: "",
            ackPasswd: "",
            authCode: ""
        }
        this.contentList = [
            { name: "手机号码", color: "#666", defaultText: "输入电话号码" },
            { name: "设置密码", color: "#666", defaultText: "" },
            { name: "确认密码", color: "#666", defaultText: "" },
            { name: "手机验证码", color: "#666", defaultText: "" }
        ]
    }
    componentDidMount() {
        if (this.props.pageType == 1) {
            let obj = {};
            ["phone", "passwd", "ackPasswd", "authCode"].forEach((item) => {
                obj[item] = this.props.data[item]
            })
            this.setState(obj)
        }
    }
    submit() { }
    back() {
        this.props.navigator.pop()
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
                <NavBar
                    title="注册"
                    leftIcon="ios-arrow-back"
                    leftPress={this.back.bind(this)}
                />
                <ScrollView>
                    <View style={[styles.flex, styles.topStatus]}>
                        <View style={[styles.flexDirection, styles.inputHeight]}>
                            <View style={[styles.textView]}>
                                <Text style={{ color: "#666", fontSize: 14 }}>{this.contentList[0].name}</Text>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={this.contentList[0].defaultText}
                                    placeholderTextColor="#BDBEC0"
                                    underlineColorAndroid='transparent'
                                    keyboardType="numeric"
                                    autoCorrect={false} />
                            </View>
                        </View>
                        <View style={[styles.flexDirection, styles.inputHeight, { borderColor: "#BDBEC0", borderTopWidth: 1, }]}>
                            <View style={[styles.textView]}>
                                <Text style={{ color: "#666", fontSize: 14 }}>{this.contentList[1].name}</Text>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={this.contentList[1].defaultText}
                                    placeholderTextColor="#BDBEC0"
                                    underlineColorAndroid='transparent'
                                    secureTextEntry={true}
                                    autoCorrect={false} />
                            </View>
                        </View>
                        <View style={[styles.flexDirection, styles.inputHeight, { borderColor: "#BDBEC0", borderTopWidth: 1, }]}>
                            <View style={[styles.textView]}>
                                <Text style={{ color: "#666", fontSize: 14 }}>{this.contentList[2].name}</Text>
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder={this.contentList[2].defaultText}
                                    placeholderTextColor="#BDBEC0"
                                    underlineColorAndroid='transparent'
                                    secureTextEntry={true}
                                    autoCorrect={false} />
                            </View>
                        </View>
                        <View style={[styles.flexDirection, styles.inputHeight, { borderColor: "#BDBEC0", borderTopWidth: 1, }]}>
                            <View style={[styles.textView]}>
                                <Text style={{ color: "#666", fontSize: 14 }}>{this.contentList[3].name}</Text>
                            </View>
                            <View style={[styles.inputView, { flexDirection: "row" }]}>
                                <View style={{ flex: 1 }}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={this.contentList[3].defaultText}
                                        placeholderTextColor="#BDBEC0"
                                        underlineColorAndroid='transparent'
                                        keyboardType="numeric"
                                        autoCorrect={false} />
                                </View>
                                <View style={{ width: px2dp(80), justifyContent: "center", alignItems: "center" }}>
                                    <Button onPress={() => { this.setState({ tag: 1 }), alert('验证码: 123456') }}>
                                        <Text style={[styles.radio, this.state.tag === 1 ? styles.active : null]}>{"获取验证码"}</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Button style={{ marginTop: 40, marginHorizontal: 16, borderRadius: 6, overflow: "hidden" }} onPress={this.submit.bind(this)}>
                        <View style={{ flex: 1, height: 40, backgroundColor: "#56d176", alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "#fff" }}>{"提 交"}</Text>
                        </View>
                    </Button>

                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flexDirection: {
        flexDirection: 'row',
        marginLeft: px2dp(15),
        justifyContent: 'center',
        alignItems: 'center'
    },
    topStatus: {
        marginTop: 25,
        borderColor: "#BDBEC0",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "#fff"
    },
    inputHeight: {
        height: 60,
    },
    inputView: {
        width: width - px2dp(75) - px2dp(45),
        height: 36,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    input: {
        height: 36
    },
    textView: {
        width: px2dp(75),
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    radio: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        color: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        fontSize: px2dp(10),
        backgroundColor: "#CD5C5C"
    },
    active: {
        borderColor: "#81c2ff",
        color: "#fff",
        backgroundColor: "#BDB76B"
    }
});