import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table,
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    CardFooter

} from 'reactstrap';

export default class Posts extends Component {
    state = {
        postModal: {
            isModalOpen: false,
            title: "user1",
            body: "Your bio",
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
        <section id="details">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4>Edit Settings</h4>
                            </CardHeader>
                            <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="title">Username</Label>
                                    <Input value={this.state.postModal.title} onChange={this.handlePostModalState("title")} type="text" placeholder="Enter a title" />
                                </FormGroup>
                                


                                {/* ** NOTE: you can add full markdown support here with CKEditor */}
                                <FormGroup>
                                    <Label for="body">Bio</Label>
                                    <Input 
                                        type="textarea" 
                                        name="body" 
                                        id="bodyText" 
                                        placeholder="Enter your content"
                                        value={this.state.postModal.body}
                                        onChange={this.handlePostModalState('body')}
                                    />
                                </FormGroup>

                                <CardFooter>
                                    <Button color="primary">Save Changes</Button>
                                </CardFooter>
                            </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        )
    }
}
