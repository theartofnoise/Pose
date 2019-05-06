import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Welcome extends Component {
  state = {
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
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
                <FormBtn type="submit">Submit</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
