import React, { Component } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

export default class Header extends Component {
  render() {
    return (
      <header className="main-header py-2 bg-warning text-white">
        <Container>
            <Row>
                <Col md="6" className="pl">
                    <h1 className=""> Settings</h1>
                </Col>
            </Row>
        </Container>
      </header>
    )
  }
}
