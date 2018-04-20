import React, { Component } from 'react';
import { View } from 'react-native';
import { Button as ButtonNB, Text } from 'native-base';

import Button from '../example1_component_props/Button';

export default class Main extends Component {

  state = {
    showComponentButton: false
  }

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  handleShowHideButton() {
    this.setState({
      showComponentButton: !this.state.showComponentButton
    })
  }

  render() {
    console.log(this.props)
    return(
      <View>
        <Text>Example Lifecycle</Text>
        <Text onPress={()=>this.handleShowHideButton()}>Show / Hide Button</Text>

        { this.state.showComponentButton == true ? (
          <Button>
            <Text>This is component button</Text>
          </Button>
        ) : null }

        <ButtonNB onPress={()=>this.props.navigation.navigate('RouteNativeBase')} danger><Text> Navigate to example native base </Text></ButtonNB>

      </View>
    )
  }

}