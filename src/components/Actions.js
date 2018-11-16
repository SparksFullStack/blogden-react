import React, { Component, Fragment } from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

export default class Actions extends Component {
    state = {
        modal: {
            isModalOpen: false,
            title: "",
        }
    }

    toggleModal = () => {
        const modal = Object.assign({}, this.state.modal);
        modal.isModalOpen = !this.state.modal.isModalOpen;
        this.setState({ modal });
    }

    handleModalState = (type) => (event) => {
        const modal = Object.assign({}, this.state.modal);
        modal[type] = event.target.value;
        this.setState({ modal });
    }

    render() {
        const { isModalOpen, titleState } = this.state.modal;

        return (
            <Fragment>
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

                <Modal isOpen={isModalOpen}>
                    <ModalHeader toggle={this.toggleModal} className="text-white bg-primary">
                        Add a post
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input value={titleState} onChange={this.handleModalState("title")} type="text" placeholder="Enter a title" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}
