import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class App extends Component{

  render(){
    return (
      <View style={styles.container}>
        <View style={{flex: 2, backgroundColor: 'green'}}>
          <Text style={styles.title}>Flex 1</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <Text style={styles.title}>Flex 2</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    color: '#FFF'
  }
})