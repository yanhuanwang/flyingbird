/**
 * @author Bird
 * @repo https://gitlab.com/flyingbird/flyingbird.1.0
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  AlertIOS,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  RefreshControl
} from 'react-native'
import NavBar from '../component/NavBar'
import px2dp from '../util'

import Icon from 'react-native-vector-icons/Ionicons'
let {width, height} = Dimensions.get('window')

export default class My extends Component {
  render(){
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <NavBar
          title="我的信息"
          leftIcon="ios-notifications-outline"
          leftPress={this.leftPress.bind(this)}
          rightIcon="ios-settings-outline"
          rightPress={this.rightPress.bind(this)}
        />
        
      </View>
    )
  }
}
