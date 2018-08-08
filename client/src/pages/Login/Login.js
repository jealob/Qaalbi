import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";



class Login extends Component {
  state = {
    username:"",
    password:"",
    email: ""
  };

 

//   getSavedArticles = () => {
//     API.getSavedArticles()
//       .then(res =>
//         this.setState({ savedArticles: res.data })
//       )
//       .catch(err => console.log(err));
  
//   };

//   deleteArticle = id => {
//     API.deleteArticle(id)
//       .then(res => this.getSavedArticles())
//       .catch(err => console.log(err));
//   };

//   saveArticle = (article) => {
//     API.saveArticle({
//       title: article.title,
//       author: article.author,
//       date: article.date,
//       url: article.url,
//       pic: article.pic
//     })
//       .then(res => this.getSavedArticles())
//       .catch(err => console.log(err));
//   };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password && this.state.email) {
 
        API.saveUser({
                  username: this.state.username,
                  password: this.state.password,
                  email: this.state.email
                })
                  .then(res => this.getSavedArticles())
                  .catch(err => console.log(err));
              
      
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Welcome new User</h1>
            </Jumbotron>
            <h5>Log in</h5>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <FormBtn
                disabled={!(this.state.username && this.state.password && this.state.email )}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
         
            </Col>
        </Row>
      </Container>
    );
  }
}


export default Login;