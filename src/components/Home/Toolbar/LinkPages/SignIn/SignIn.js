import React, { Component } from "react";

// import styles from  './SignIn.module.css';
import { Container, Row, Col } from 'react-bootstrap';

class SignIn extends Component {

  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12} >
              <h2>Sign In Page</h2>
              <p>This is mostly SignIn .</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignIn;