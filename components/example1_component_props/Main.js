import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Button from './Button'

export default class App extends Component{

  render(){
    // return <div><p>Hello World</p></div>
    return (
      <View>
        <Text style={styles.title}>
          Hello World
        </Text>
        <Button design={styles.button}>
          <Text>This is Button</Text>
          <Text>This is Button After</Text>
          <View style={{backgroundColor: "yellow", padding: 5}}></View>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#d0d0d0',
    padding: 10
  }
})