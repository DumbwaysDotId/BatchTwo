import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Button extends Component {

  componentDidMount() {
    console.log('component button did mount');
  }

  componentWillUnmount() {
    console.log('component button will unmount');
  }

  render(){
    console.log('button render')
    return (
      <View style={this.props.design}>
        {this.props.children}
      </View>
    )
  }

}
