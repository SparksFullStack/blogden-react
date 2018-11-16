import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    Table,
    Button,

} from 'reactstrap';

export default class Posts extends Component {
  render() {
    return (
      <section id="posts">
        <Container>
            <Row>
                <Col md="9">
                    <Card>
                        <CardHeader>
                            <h4>Latest Posts</h4>
                        </CardHeader>
                        <Table striped>
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Post One</td>
                                    <td>Web Development</td>
                                    <td>May 10, 2018</td>
                                    <td>
                                        <Button color="secondary" href="/details">
                                            <i className="fas fa-angle-double-right"></i> Details
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                <Col md="9">
                
                </Col>
            </Row>
        </Container>
      </section>
    )
  }
}
