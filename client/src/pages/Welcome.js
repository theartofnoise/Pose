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
import Nav from "../components/Nav"


class Welcome extends Component {
  state = {
        loggedIn:false,
        userEmail:"",
        userPassword:"",
        logo:"pose",
        link1:"",
        link2:"",
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
      loggedIn:true,
      link1:"main",
      link2:"home",
      
    })
    // props.logToggle;
  };
  
  logOut = () => {
      this.setState({
          loggedIn:false,
          mainLink:"",
      })
  };

  render() {
    return (
        <div>
        <Nav logo={this.state.logo}
          link1={this.state.link1}
          link2={this.state.link2}
           />
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
                    placeholder="password"
                  />
                  <FormBtn type="submit" onClick={this.logIn}>
                    Log In
                  </FormBtn>
                  <FormBtn type="submit" onClick={this.saveUser}>Create New Account</FormBtn>
                </form>
              </Col>
            )}
          </Row>
        </Container>

      </div>
    );
  }
}

export default Welcome;
