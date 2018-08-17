/**
 * @author Bird
 * @repo https://gitlab.com/flyingbird/flyingbird.1.0
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import NavBar from '../component/NavBar'
import TabViewBar from '../component/TabViewBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import OrderMyReleased from './OrderMyReleased'
import OrderMyTaken from './OrderMyTaken'

export default class Order extends Component {
  constructor(props){
      super(props)
  }
  render(){
    return (
      <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
        <NavBar title="我的订单"/>
        <ScrollableTabView renderTabBar={() => <TabViewBar/>}>
		  <OrderMyReleased tabLabel="我下的单" navigation={this.props.navigator}/>
          <OrderMyTaken tabLabel="我接的单"/>
        </ScrollableTabView>
      </View>
    )
  }
}
