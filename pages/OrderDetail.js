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

export default class OrderDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            phone: "",
            passwd: "",
            ackPasswd: "",
            authCode: ""
        }
	}
    back() {
        this.props.navigator.pop()
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
                <NavBar
                    title="订单详情"
                    leftIcon="ios-arrow-back"
                    leftPress={this.back.bind(this)}
                />
                <ScrollView>
                </ScrollView>
            </View>
        );
    }

}

