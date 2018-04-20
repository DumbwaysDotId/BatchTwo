import React, {Component} from 'react'
import {
  Container, Content, Text, Form,
  Button, Label, Input, Item
} from 'native-base'
import axios from 'axios'

const uri = 'https://api.backendless.com/814F60A4-2E37-D2B8-FFE5-815BC999E700/F49CAFD3-05A4-01A3-FFE1-800D6B5F0D00/data'

export default class Create extends Component{

  state = {
    title: ""
  }

  handleSubmit(){
    const {allPosts} = this.props.navigation.state.params
    //POST data into API
    axios
      .post(`${uri}/posts`, {title: this.state.title})
      .then(result=>{
        //if success, get latest data from API
        if(result.data){
          allPosts()
          this.props.navigation.goBack()
        }
      })
  }

  render(){
    return (
      <Container>
        <Content>

          <Item inlineLabel>
            <Label>Title</Label>
            <Input
              onChangeText={title=> this.setState({title})}
              value={this.state.title}
            />
          </Item>

          <Button success onPress={()=> this.handleSubmit()}>
            <Text>Submit</Text>
          </Button>

        </Content>
      </Container>
    )
  }

}