import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    Button
} from 'reactstrap';

export default class Search extends Component {
    state = {
        searchBar: ""
    }

    handleSearchbar = (event) => {
        this.setState({ searchBar: event.target.value });
    }

    render() {
        return (
            <section id="search" className="py-4 mb-4 bg-light">
            <Container>
                <Row>
                    <Col md="6" className="ml-auto">
                        <InputGroup>
                            <Input 
                                type="text" 
                                className="form-control" 
                                placeholder="Search Users..." 
                                value={this.state.searchBar}
                                onChange={this.handleSearchbar}
                            />
                            <InputGroupAddon>
                                <Button color="warning">Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            </section>
        )
        }
}
