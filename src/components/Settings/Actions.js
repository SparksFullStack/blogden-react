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
                            <Col className="ml-auto mr-auto" md="3">
                                <Button href="/" color="primary" block>
                                    <i className="fas fa-arrow-left"></i> Back to Dashboard
                                </Button>
                            </Col>
                            
                            <Col className="ml-auto mr-auto" md="3">
                                <Button href="/" color="success" block>
                                    <i className="fas fa-check"></i> Save Changes
                                </Button>
                            </Col>

                            <Col className="ml-auto mr-auto" md="3">
                                <Button href="/" color="danger" block>
                                    <i className="fas fa-trash"></i> Delete Account
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>                
            </Fragment>
        )
    }
}
