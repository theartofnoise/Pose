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
    
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            whasssup
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
