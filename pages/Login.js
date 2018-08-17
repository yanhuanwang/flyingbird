import React, { Component } from 'react'
import {
    AppRegistry,
    Alert,
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import LoginForm from '../component/LoginForm';
import Item from '../component/Item'
import NavBar from '../component/NavBar'
import Register from './Register'
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from '../util'

let { width, height } = Dimensions.get('window')

export default class Login extends Component {
    _onPressButton() {
        Alert.alert('欢迎登陆摆渡人APP!')
    }
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false
        }
        this.config0 = [
            { icon: "ios-log-in-outline", name: "登录", color: "#666" },
            { icon: "ios-list-box-outline", name: "注册", color: "#666", onPress: this.goPage.bind(this, "register") }
        ]
        this.config = [
            { icon: "ios-help-circle", name: "忘记密码", color: "#666" },
            { icon: "ios-lock", name: "手机验证码登录", color: "#666" },
            { icon: "ios-more-outline", name: "第三方登录", color: "#666" }
        ]
    }
    goPage(key, data = {}) {
        let pages = {
            "register": Register
        }
        if (pages[key]) {
            this.props.navigator.push({
                component: pages[key],
                args: { data }
            })
        }
    }
    _renderListItem() {
        return this.config.map((item, i) => {
            if (i == 0) {
                item.first = true
            }
            return (<Item key={i} {...item} />)
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <NavBar title="我" />
                <ScrollView>
                    <View style={styles.loginContainer}>
                        <LoginForm />
                    </View>
                    <View style={{ marginTop: 20, backgroundColor: "#fff" }}>
                        {this.config0[0].first = true}
                        <Item key={0} {...this.config0[0]} />
                    </View>
                    <View style={{ marginTop: 10, backgroundColor: "#fff" }}>
                        {this.config0[1].first = true}
                        <Item key={0} {...this.config0[1]} />
                    </View>
                    <View style={{ marginTop: 30, backgroundColor: "#fff" }}>
                        {this._renderListItem()}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    loginHeader: {
        height: 10,
        marginBottom: 20,
        backgroundColor: '#FFFFFF'
    },
    loginContainer: {
        marginTop: 20,
        backgroundColor: '#FFFFFF'
    },
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flexDirection: 'row'
    },
    cell: {
        flex: 1,
        height: 40,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    cellfixed: {
        height: 40,
        width: 50,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLogo: {
        width: 32,
        height: 32
    },
    buttonText: {
        padding: 10,
        color: 'black',
        fontWeight: '700',
    }
})