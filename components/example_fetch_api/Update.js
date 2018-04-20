import React, {Component} from 'react'
import {
  Container, Content, Text, Form,
  Button, Label, Input, Item
} from 'native-base'
import axios from 'axios'

const uri = 'https://api.backendless.com/814F60A4-2E37-D2B8-FFE5-815BC999E700/F49CAFD3-05A4-01A3-FFE1-800D6B5F0D00/data'

export default class Update extends Component{

  state = {
    post: {}
  }

  componentDidMount(){
    //get id from props
    const {id} = this.props.navigation.state.params

    //GET single post by id
    axios.get(`${uri}/posts/${id}`).then(result=>{
      this.setState({
        post: result.data,
      })
    })
  }

  handleSubmit(){
    const {allPosts, id} = this.props.navigation.state.params
    //PUT data by id into API
    axios
      .put(`${uri}/posts/${id}`, this.state.post)
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
              onChangeText={
                title=> this.setState({ post: {...this.state.post, title} })
              }
              value={this.state.post.title}
            />
          </Item>

          <Item inlineLabel>
            <Label>Slug</Label>
            <Input
              onChangeText={
                title=> this.setState({ post: {...this.state.post, slug} })
              }
              value={this.state.post.slug}
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