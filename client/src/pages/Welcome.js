import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Main from "./Main";
import UserProjects from "./UserProjects";


class Welcome extends Component {
  state = {
        loggedIn:false,
        userEmail:"",
        userPassword:"",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Submitted");
    console.log(this.state);
  };

  logIn = () => {
      this.setState({
          loggedIn:true
      })
  };
  
  logOut = () => {
      this.setState({
          loggedIn:false
      })
  };

  render() {
    return (
      <Container fluid>
        <Row>
            {this.state.loggedIn?
                <div>
                    <UserProjects />
                    <FormBtn onClick={this.logOut}>Log Out</FormBtn>
                </div>:
          <Col size="lg-6 md-12">
            <form>
                <Input 
                    value={this.state.userEmail}
                    onChange={this.handleInputChange}
                    type="email" 
                    placeholder="email" />
                <Input 
                    value={this.state.userPassword}
                    onChange={this.handleInputChange}
                    type="password" 
                    placeholder="password" />
                <FormBtn type="submit" onClick={this.logIn}>Submit</FormBtn>
            </form>
          </Col>}
        </Row>
      </Container>
    );
  }
}

export default Welcome;
