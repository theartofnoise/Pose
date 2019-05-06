import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class UserProjects extends Component {
  state = {
        
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
          <Col size="lg-6 md-12">
            <h1>Find your UserProjects Here</h1>            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserProjects;
