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
        postModal: {
            isModalOpen: false,
            title: "",
            body: "",
            dropdown: "",
        },
        categoryModal: {
            isModalOpen: false,
            title: "",
        }
    }

    togglePostModal = () => {
        const modal = Object.assign({}, this.state.postModal);
        modal.isModalOpen = !this.state.postModal.isModalOpen;
        this.setState({ postModal: modal });
    }

    handlePostModalState = (type) => (event) => {
        const postModal = Object.assign({}, this.state.postModal);
        postModal[type] = event.target.value;
        this.setState({ postModal })
    }

    render() {
        

        return (
            <Fragment>
                <section id="actions" className="py-4 mb-4 bg-light">
                    <Container>
                        <Row>
                            <Col md="3">
                                <Button onClick={this.togglePostModal} href="#" color="primary" block>
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

                <Modal isOpen={this.state.postModal.isModalOpen}>
                    <ModalHeader toggle={this.togglePostModal} className="text-white bg-primary">
                        Add a post
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="title">Title</Label>
                                <Input value={this.state.postModal.title} onChange={this.handlePostModalState("title")} type="text" placeholder="Enter a title" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="category">Category</Label>
                                <Input type="select" name="select" id="categorySelect">
                                    <option>Web Development</option>
                                    <option>Gaming</option>
                                    <option>Philosophy/Religion</option>
                                    <option>Psychology</option>
                                </Input>
                            </FormGroup>

                            {/* 
                            ** NOTE: this section was to be for an image updload feature
                            <FormGroup>
                                <Label for="image">Upload Image</Label>
                                
                            </FormGroup> */}


                            {/* ** NOTE: you can add full markdown support here with CKEditor */}
                            <FormGroup>
                                <Label for="body">Body</Label>
                                <Input 
                                    type="textarea" 
                                    name="body" 
                                    id="bodyText" 
                                    placeholder="Enter your content"
                                    value={this.state.postModal.body}
                                    onChange={this.handlePostModalState('body')}
                                />
                            </FormGroup>

                            <ModalFooter>
                                <Button color="primary">Save Post</Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>

                
            </Fragment>
        )
    }
}
