import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <footer id="main-footer" className="bg-dark text-white mt-5 py-5">
        <Container>
            <Row>
                <Col>
                    <p className="lead text-center">
                        Copyright Sparks Full-Stack &copy; 2018
                    </p>
                </Col>
            </Row>
        </Container>
      </footer>
    )
  }
}
