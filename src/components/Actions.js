import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

export default class Actions extends Component {
    state = {
        isModalOpen: false,
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    render() {
        const {isModalOpen} = this.state

        return (
        <section id="actions" className="py-4 mb-4 bg-light">
            <Container>
                <Row>
                    <Col md="3">
                        <Button onClick={this.toggleModal} href="#" color="primary" block>
                            <i className="fas fa-plus"></i> Add Post
                        </Button>
                    </Col>
                    
                    <Col md="3">
                        <Button onClick={this.toggleModal} href="#" color="success" block>
                            <i className="fas fa-plus"></i> Add Category
                        </Button>
                    </Col>

                    <Col md="3">
                        <Button onClick={this.toggleModal} href="#" color="warning" block>
                            <i className="fas fa-plus"></i> Add User
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
        )
    }
}
