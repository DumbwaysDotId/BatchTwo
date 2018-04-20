import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Body,
  Right,
  Text,
  Icon,
  Title
} from 'native-base';

export default class Main extends Component {
  render() {
    return (
      <Container>

        <Header>
          <Left>
            <Icon name="menu" style={{color: '#ffffff'}} />
          </Left>
          <Body>
            <Title>
              Example Native Base
            </Title>
          </Body>
          <Right>
            <Icon name="more" style={{color: '#ffffff'}} />
          </Right>
        </Header>

        <Content scrollEnabled={false}>
          <Text>Content Native Base</Text>
          <Button style={styles.button} light><Text> Light </Text></Button>
          <Button style={styles.button} primary><Text> Primary </Text></Button>
          <Button style={styles.button} success><Text> Success </Text></Button>
          <Button style={styles.button} info><Text> Info </Text></Button>
          <Button style={styles.button} warning><Text> Warning </Text></Button>
          <Button style={styles.button} danger><Text> Danger </Text></Button>
          <Button style={styles.button} dark><Text> Dark </Text></Button>
        </Content>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 20
  }
})