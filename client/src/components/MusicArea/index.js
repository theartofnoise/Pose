import React, { Component } from "react";
import music from "../../music.json";
import { Col, Row, Container } from "../Grid";
import AudioBtn from "../AudioBtn";

class MusicArea extends Component {
  state = {
    music
  };

  playSong = song => {
    alert("song playing");
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4 sm-12">
            <AudioBtn
              songTitle={this.state.music[0].title}
              onClick={this.playSong}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MusicArea;
