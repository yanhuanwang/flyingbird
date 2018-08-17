/**
 * @author Bird
 * @repo https://gitlab.com/flyingbird/flyingbird.1.0
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import NavBar from '../component/NavBar'

export default class Discover extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <NavBar title="搜索" />
        <View style={[styles.flexContainer, { marginTop: 20, borderBottomColor: '#BDBEC0', borderBottomWidth: 1 }]}>
          <View style={styles.formImage}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>出发日期</Text>
          </View>
          <View style={styles.formInput}>
            <TextInput style={styles.input} autoCorrect={false} />
          </View>
        </View>
        <View style={styles.flexContainer}>
          <View style={styles.formImage}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>出发地点</Text>
          </View>
          <View style={styles.formInput}>
            <TextInput style={styles.input} autoCorrect={false} />
          </View>
        </View>
        <View style={styles.flexContainer}>
          <View style={styles.formImage}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>到达地点</Text>
          </View>
          <View style={styles.formInput}>
            <TextInput style={styles.input} autoCorrect={false} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  formImage: {
    width: 80,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  }
})
