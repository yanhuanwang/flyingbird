/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  AlertIOS,
  RefreshControl,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'

import px2dp from '../util'
import data from '../data'

class Item extends Component {
  constructor(props){
      super(props)
  }
  static propTypes = {
      DepartDate: PropTypes.string.isRequired,
      ArrivalDate: PropTypes.string,
      DepartPlace: PropTypes.string,
      ArrivalPlace: PropTypes.string,
      OrdNumber: PropTypes.string,
	  OrdReleasedDate: PropTypes.string
  }
  render(){
    const { DepartDate, ArrivalDate, DepartPlace, ArrivalPlace, OrdNumber, OrdReleasedDate } = this.props
    let render = (
      <View style={styles.item}>
        <View style={styles.info}>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: px2dp(13), color:"#333"}}>{"出发日期："+DepartDate}</Text>
            <Text style={{fontSize: px2dp(13), color:"#333", paddingRight: 25}}>{"到达日期："+ArrivalDate}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: px2dp(13), color:"#333"}}>{"出发地："+DepartPlace}</Text>
			<Text style={{fontSize: px2dp(13), color:"#333", paddingRight: 25}}>{"目的地： "+ArrivalPlace}</Text>
          </View>
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: px2dp(13), color:"#333"}}>{"订单号："+OrdNumber}</Text>
            <Text style={{fontSize: px2dp(13), color:"#333", paddingRight: 25}}>{"下单日期："+OrdReleasedDate}</Text>
          </View>
        </View>
      </View>
    )
    return (
      Platform.OS === 'ios'?(
        <TouchableHighlight style={{marginTop: 10}} onPress={() => {}}>{render}</TouchableHighlight>
      ):(
        <View style={{marginTop: 10}}><TouchableNativeFeedback onPress={() => {}}>{render}</TouchableNativeFeedback></View>
      )
    )
  }
}
export default class OrderMyReleased extends Component {
  constructor(props){
      super(props)
      this.state = {
        data: [],
        isRefreshing: false
      }
  }
  componentDidMount(){
    this._onRefresh()
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        data: data.orderData,
        isRefreshing: false
      })
    }, 1500)
  }
  render(){
    return (
      <ScrollView
        style={{backgroundColor: "#f3f3f3"}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#bbb"
            colors={['#ddd', '#0398ff']}
            progressBackgroundColor="#ffffff"
          />
        }
      >
        {
          this.state.data.map((item, i) => {
            return <Item key={i} {...item} />
          })
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingTop: 16
  },
  info: {
    paddingRight: 16,
    flex: 1
  }
})
